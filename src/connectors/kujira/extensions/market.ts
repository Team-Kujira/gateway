export class Market {
  private _address: string;
  private _chainID: string;
  private _denoms: any[];
  private _precision: any[];
  private _decimalDelta: number;
  private _multiswap: boolean;
  private _pool: string;
  private _queue: string;
  private _calc: string;

  constructor(
    address: string,
    chainID: string,
    denoms: any[],
    precision: any[],
    decimalDelta: number,
    multiswap: boolean,
    pool: string,
    queue: string,
    calc: string
  ) {
    this._address = address;
    this._chainID = chainID;
    this._denoms = denoms;
    this._precision = precision;
    this._decimalDelta = decimalDelta;
    this._multiswap = multiswap;
    this._pool = pool;
    this._queue = queue;
    this._calc = calc;
  }

  get address(): string {
    return this._address;
  }

  get chainID(): string {
    return this._chainID;
  }

  get denoms(): any[] {
    return this._denoms;
  }

  get precision(): any[] {
    return this._precision;
  }

  get decimalDelta(): number {
    return this._decimalDelta;
  }

  get multiswap(): boolean {
    return this._multiswap;
  }

  get pool(): string {
    return this._pool;
  }

  get queue(): string {
    return this._queue;
  }

  get calc(): string {
    return this._calc;
  }

  // static async load(
  //   address: string,
  //   chainID: string,
  //   denoms: any[],
  //   precision: any[],
  //   decimalDelta: number,
  //   multiswap: boolean,
  //   pool: string,
  //   queue: string,
  //   calc: string
  // ) {
  //
  // }
}
