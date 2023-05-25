import { DOMParser } from '@xmldom/xmldom';
// import { DOMParser, Node, NamedNodeMap } from '@xmldom/xmldom';

export const serialize = function (
  objectToSerialize: any,
  objectName: string,
  indentSpace = ''
): string {
  const type = getTypeName(objectToSerialize);

  let s = indentSpace + '<' + objectName + ' type="' + type + '">';

  switch (type) {
    case 'number':
    case 'string':
    case 'boolean':
      s += objectToSerialize;
      break;
    case 'date':
      s += objectToSerialize.toLocaleString();
      break;
    case 'Function':
      s += '\n';
      s += '<![CDATA[' + objectToSerialize + ']]>';
      s += indentSpace;
      break;
    case 'array':
      s += '\n';
      for (const a in objectToSerialize) {
        s += serialize(objectToSerialize[a], 'index' + a, indentSpace + '   ');
      }
      s += indentSpace;
      break;
    default:
      s += '\n';

      for (const o in objectToSerialize) {
        s += serialize(objectToSerialize[o], o, indentSpace + '   ');
      }
      s += indentSpace;
      break;
  }

  s += '</' + objectName + '>\n';

  return s;
};

export const deserialize = function (XmlText: string): any {
  const _doc = getDom(XmlText);
  return deserial(_doc.childNodes[0]);
};

function getDom(strXml: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(strXml, 'text/xml');
}

function deserial(domObject: Node): any {
  let retObj;
  const nodeType = getNodeType(domObject);

  if (isSimpleVar(nodeType)) {
    return stringToObject(domObject.textContent!, nodeType);
  }

  switch (nodeType) {
    case 'array':
      return deserializeArray(domObject);
    case 'Function':
      return deserializeFunction(domObject);
    default:
      try {
        retObj = eval('new ' + nodeType + '()');
      } catch (e) {
        retObj = {};
      }
      break;
  }

  if (domObject && domObject.childNodes && domObject.childNodes.length > 0) {
    for (let i = 0; i < domObject.childNodes.length; i++) {
      const Node = domObject.childNodes[i];
      try {
        const property: string = Node.nodeName
          .replace(/_at_/g, '@')
          .replace(/_slash_/g, '/');

        retObj[property] = deserial(Node);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return retObj;
}

function isSimpleVar(type: string): boolean {
  switch (type) {
    case 'int':
    case 'string':
    case 'String':
    case 'Number':
    case 'number':
    case 'Boolean':
    case 'boolean':
    case 'bool':
    case 'dateTime':
    case 'Date':
    case 'date':
    case 'float':
      return true;
  }

  return false;
}

function stringToObject(text: string, type: string): any {
  switch (type.toLowerCase()) {
    case 'int':
      return parseInt(text, 10);

    case 'number':
      if (text.indexOf('.') > 0) {
        return parseFloat(text);
      } else {
        return parseInt(text, 10);
      }

    case 'string':
      return text;

    case 'dateTime':
    case 'date':
      return new Date(text);

    case 'float':
      return parseFloat(text);

    case 'bool':
      if (text == 'true' || text == 'True') {
        return true;
      } else {
        return false;
      }
  }

  return null;
}

function getClassName(obj: any): string {
  try {
    let ClassName = obj.constructor.toString();
    ClassName = ClassName.substring(
      ClassName.indexOf('function') + 8,
      ClassName.indexOf('(')
    ).replace(/ /g, '');
    return ClassName;
  } catch (e) {
    return 'NULL';
  }
}

function getTypeName(obj: any): string {
  if (obj instanceof Array) {
    return 'array';
  }

  if (obj instanceof Date) {
    return 'date';
  }

  const type = typeof obj;

  if (isSimpleVar(type)) {
    return type;
  }

  const typeName = getClassName(obj);

  return typeName;
}

function deserializeArray(node: Node): any[] {
  const retObj: any[] = [];
  let child: Node | null;

  while ((child = node.firstChild) != null) {
    node.removeChild(node.firstChild!);

    const nodeType = getNodeType(child);

    if (isSimpleVar(nodeType)) {
      retObj[retObj.length] = child.textContent;
    } else {
      if (child.textContent?.trim() != '') {
        retObj[retObj.length] = deserial(child);
      }
    }
  }
  return retObj;
}

function deserializeFunction(func: Node): any {
  if (func && func.textContent) {
    const content = prepareFunctionDefinition(func.textContent);

    return eval(content);
  }
}

function getNodeType(node: Node | any): string {
  let nodeType = 'object';

  if (node.attributes != null && node.attributes.length != 0) {
    const tmp = node.attributes.getNamedItem('type');
    if (tmp != null) {
      nodeType = tmp.nodeValue;
    }
  }

  return nodeType;
}

function prepareFunctionDefinition(arrowFunction: string): string {
  const arrowFunctionRegex = /\s*(\((.*?)\)\s*=>\s*(.*))/;
  const match = arrowFunction.match(arrowFunctionRegex);

  if (match) {
    const parameters = match[2];
    const body = match[3];
    return `(function anonymous(${parameters}) {\n  return ${body};\n})`;
  } else {
    return `(${arrowFunction
      .trim()
      .replace(/function.*?\(/, 'function anonymous(')})`;
  }
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
  };
}
