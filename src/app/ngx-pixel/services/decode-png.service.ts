import { Injectable } from '@angular/core';

@Injectable()
export class DecodePngService {
  public base64Lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  constructor() { }

  base64Decode(char): string {
    const num = this.base64Lookup.indexOf(char);
    return this.arithmeticToBinaryString(num);
  }

  arithmeticToBinaryString(num): string {
    return ('000000' + num.toString(2)).substr(-6);
  }
}
