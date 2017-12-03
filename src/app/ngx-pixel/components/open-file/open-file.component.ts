import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../services/sync.service';

@Component({
  selector: 'open-file',
  templateUrl: './open-file.component.html',
  styleUrls: ['./open-file.component.css']
})
export class OpenFileComponent implements OnInit {
  public selectedColor;

  constructor(
  ) { }

  public ngOnInit() {

  }
}
