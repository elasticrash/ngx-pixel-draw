import { Component, OnInit, ViewChild } from '@angular/core';
import { SyncService } from '../../services/sync.service';
import { DecodePngService } from '../../services/decode-png.service';
import * as getPixels from 'get-pixels';
import * as ndarray from 'ndarray';

@Component({
  selector: 'open-file',
  templateUrl: './open-file.component.html',
  styleUrls: ['./open-file.component.css']
})
export class OpenFileComponent implements OnInit {
  @ViewChild('file') public file: any;
  public selectedColor;
  public colorMatrix: string[][] = [];
  constructor(
    private decodeService: DecodePngService,
    private syncService: SyncService
  ) { }

  public ngOnInit() {

  }

  public readFile(): void {
    const reader = new FileReader();
    const self = this;
    reader.onloadend = (e) => {
      getPixels(reader.result, (err, pixels) => {
        if (err) {
          console.log('unsupported image');
        } else {
          this.syncService.shape = pixels.shape;

          const nd = pixels as ndarray;
          for (let i = 0; i < nd.shape[0]; i++) {
            this.colorMatrix[i] = [];
            for (let j = 0; j < nd.shape[1]; j++) {
              const r = nd.get(i, j, 0);
              const g = nd.get(i, j, 1);
              const b = nd.get(i, j, 2);
              this.colorMatrix[i][j] = this.rgbToHex(r, b, g);
            }
          }
          this.syncService.colorMatrix = this.colorMatrix;
        }
      });
    };
    reader.readAsDataURL(this.file.nativeElement.files[0]);
  }

  private intensityToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  private rgbToHex(r, g, b) {
    return this.intensityToHex(r) + this.intensityToHex(g) + this.intensityToHex(b);
  }
}
