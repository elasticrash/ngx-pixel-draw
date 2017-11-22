import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../services/sync.service';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  public color: string;

  constructor(
    private syncService: SyncService
  ) { }

  ngOnInit() {

  }

  validateColor(color: string): boolean {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  }

  public updateColor(): void {
    this.syncService.currentColor.next(this.color)
  }

}
