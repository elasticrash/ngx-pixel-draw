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

  pngDecode(data) {
    let byte, c, col, i, left, length, p, pa, paeth, pb, pc,
      pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
    data = new this.flateStream(data);
    data = data.getBytes();
    pixelBytes = 32 / 8;
    scanlineLength = pixelBytes * 400;
    pixels = new Uint8Array(scanlineLength * 400);
    length = data.length;
    row = 0;
    pos = 0;
    c = 0;
    while (pos < length) {
      switch (data[pos++]) {
        case 0:
          for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
            pixels[c++] = data[pos++];
          }
          break;
        case 1:
          for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
            byte = data[pos++];
            left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
            pixels[c++] = (byte + left) % 256;
          }
          break;
        case 2:
          for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
            byte = data[pos++];
            col = (i - (i % pixelBytes)) / pixelBytes;
            upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
            pixels[c++] = (upper + byte) % 256;
          }
          break;
        case 3:
          for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
            byte = data[pos++];
            col = (i - (i % pixelBytes)) / pixelBytes;
            left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
            upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
            pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
          }
          break;
        case 4:
          for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
            byte = data[pos++];
            col = (i - (i % pixelBytes)) / pixelBytes;
            left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
            if (row === 0) {
              upper = upperLeft = 0;
            } else {
              upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
            }
            p = left + upper - upperLeft;
            pa = Math.abs(p - left);
            pb = Math.abs(p - upper);
            pc = Math.abs(p - upperLeft);
            if (pa <= pb && pa <= pc) {
              paeth = left;
            } else if (pb <= pc) {
              paeth = upper;
            } else {
              paeth = upperLeft;
            }
            pixels[c++] = (byte + paeth) % 256;
          }
          break;
        default:
          throw new Error('Invalid filter algorithm: ' + data[pos - 1]);
      }
      row++;
    }
    return pixels;
  }
}
