// export const serialize = function(objectToSerialize, objectName, indentSpace) {
//   indentSpace = indentSpace ? indentSpace : "";
//
//   // Get object type name to serialize
//   var type = getTypeName(objectToSerialize);
//
//   // string to store serialized XML
//   var s = indentSpace + "<" + objectName + " type=\"" + type + "\">";
//
//   switch (type) {
//     case "number":
//     case "string":
//     case "boolean":
//       s += objectToSerialize;
//       break;
//     case "date":
//       s += objectToSerialize.toLocaleString();
//       break;
//     case "Function":
//       s += "\n";
//       s += "<![CDATA[" + objectToSerialize + "]]>";
//       s += indentSpace;
//       break;
//     case "array":
//       s += "\n";
//       for (var a in objectToSerialize) {
//         s += serialize(objectToSerialize[a], ("index" + a), indentSpace + "   ");
//       }
//       s += indentSpace;
//       break;
//     default:
//       s += "\n";
//
//       for (var o in objectToSerialize) {
//         s += serialize(objectToSerialize[o], o, indentSpace + "   ");
//       }
//       s += indentSpace;
//       break;
//   }
//
//   s += "</" + objectName + ">\n";
//
//   return s;
// };
//
// export const deserialize = function(XmlText) {
//   var _doc = getDom(XmlText);
//   return deserial(_doc.childNodes[0]);
// };
//
// function getDom(strXml) {
//   var _doc = null;
//
//   var parser = new DOMParser();
//   _doc = parser.parseFromString(strXml, "text/xml");
//
//   return _doc;
// }
//
// function deserial(domObject) {
//   var retObj;
//   var nodeType = getNodeType(domObject);
//
//   if (isSimpleVar(nodeType)) {
//     return stringToObject(domObject.textContent, nodeType);
//   }
//
//   switch (nodeType) {
//     case "array":
//       return deserializeArray(domObject);
//     case "Function":
//       return deserializeFunction(domObject);
//     default:
//       try {
//         retObj = eval("new " + nodeType + "()");
//       } catch (e) {
//         // create generic class
//         retObj = {};
//       }
//       break;
//   }
//
//   for (var i = 0; i < domObject.childNodes.length; i++) {
//     var Node = domObject.childNodes[i];
//     retObj[Node.nodeName] = deserial(Node);
//   }
//
//   return retObj;
// }
//
// function isSimpleVar(type) {
//   switch (type) {
//     case "int":
//     case "string":
//     case "String":
//     case "Number":
//     case "number":
//     case "Boolean":
//     case "boolean":
//     case "bool":
//     case "dateTime":
//     case "Date":
//     case "date":
//     case "float":
//       return true;
//   }
//
//   return false;
// }
//
// function stringToObject(text, type) {
//   var retObj = null;
//
//   switch (type.toLowerCase()) {
//     case "int":
//       return parseInt(text, 10);
//
//     case "number":
//       var outNum;
//
//       if (text.indexOf(".") > 0) {
//         return parseFloat(text);
//       } else {
//         return parseInt(text, 10);
//       }
//
//     case "string":
//       return text;
//
//     case "dateTime":
//     case "date":
//       return new Date(text);
//
//     case "float":
//       return parseFloat(text, 10);
//
//     case "bool":
//       if (text == "true" || text == "True") {
//         return true;
//       } else {
//         return false;
//       }
//   }
//
//   return retObj;
// }
//
// function getClassName(obj) {
//   try {
//     var ClassName = obj.constructor.toString();
//     ClassName = ClassName.substring(ClassName.indexOf("function") + 8, ClassName.indexOf("(")).replace(/ /g, "");
//     return ClassName;
//   } catch (e) {
//     return "NULL";
//   }
// }
//
// function getTypeName(obj) {
//   if (obj instanceof Array) {
//     return "array";
//   }
//
//   if (obj instanceof Date) {
//     return "date";
//   }
//
//   var type = typeof (obj);
//
//   if (isSimpleVar(type)) {
//     return type;
//   }
//
//   type = getClassName(obj);
//
//   return type;
// }
//
// function deserializeArray(node) {
//   var retObj = [];
//
//   // Cycle through the array's TOP LEVEL children
//   while ((child = node.firstChild) != null) {
//
//     // delete child so it's children aren't recursed
//     node.removeChild(node.firstChild);
//
//     var nodeType = getNodeType(child);
//
//     if (isSimpleVar(nodeType)) {
//       retObj[retObj.length] = child.textContent;
//     } else {
//       var tmp = child.textContent;
//       if (child.textContent.trim() != "") {
//         retObj[retObj.length] = deserial(child);
//       }
//     }
//   }
//   return retObj;
// }
//
// function deserializeFunction(func) {
//   if (func && func.textContent) {
//     return eval(func.textContent);
//   }
// }
//
// function getNodeType(node) {
//     var nodeType = "object";
//
//     if (node.attributes != null && node.attributes.length != 0) {
//       var tmp = node.attributes.getNamedItem("type");
//       if (tmp != null) {
//         nodeType = node.attributes.getNamedItem("type").nodeValue;
//       }
//     }
//
//     return nodeType;
//   }
//
// if (!String.prototype.trim) {
//   String.prototype.trim = function() {
//     a = replace(/^\s+/, "");
//     return a.replace(/\s+$/, "");
//   };
// }