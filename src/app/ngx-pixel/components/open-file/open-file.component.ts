import { Component, OnInit, ViewChild } from '@angular/core';
import { SyncService } from '../../services/sync.service';
import { DecodePngService } from '../../services/decode-png.service';
import * as getPixels from 'get-pixels';

@Component({
  selector: 'open-file',
  templateUrl: './open-file.component.html',
  styleUrls: ['./open-file.component.css']
})
export class OpenFileComponent implements OnInit {
  @ViewChild('file') public file: any;
  public selectedColor;
  public bytes: string[] = [];
  constructor(
    private decodeService: DecodePngService
  ) { }

  public ngOnInit() {

  }

  public readFile(): void {
    const reader = new FileReader();
    const self = this;
    reader.onloadend = (e) => {
      getPixels(reader.result, (err, pixels) => {
        if (err) {
          console.log('Bad image path');
        } else {
          console.log('got pixels', pixels);
        }
      });
    };
    reader.readAsDataURL(this.file.nativeElement.files[0]);
  }
}
