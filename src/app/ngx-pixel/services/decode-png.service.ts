import { Injectable } from '@angular/core';
import * as pako from 'pako';

@Injectable()
export class DecodePngService {
  public base64Lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  public BASE64_MARKER = ';base64,';

  constructor() { }

  base64Decode(char): string {
    const num = this.base64Lookup.indexOf(char);
    return this.arithmeticToBinaryString(num);
  }

  arithmeticToBinaryString(num): string {
    return ('000000' + num.toString(2)).substr(-6);
  }

  convertDataURIToBinary(dataURI) {
    const base64Index = dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;
    const base64 = dataURI.substring(base64Index);
    const raw = window.atob(base64);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
}
