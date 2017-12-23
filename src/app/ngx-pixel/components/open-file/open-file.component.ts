import { Component, OnInit, ViewChild } from '@angular/core';
import { SyncService } from '../../services/sync.service';
import { DecodePngService } from '../../services/decode-png.service';

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
      self.decode(reader.result);
    };
    reader.readAsDataURL(this.file.nativeElement.files[0]);
  }

  public decode(base64) {
    for (let index = 0; index < base64.length; index++) {
      const element = base64[index];
      this.bytes.push(this.decodeService.base64Decode(element));
    }
  }
}
