import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../services/sync.service';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  public listOfColors: Array<string> = this.randomColorArray(10);
  public selectedColor;

  constructor(
    private syncService: SyncService
  ) { }

  private randomColorArray(arrayLength: number): Array<string> {
    const rA = new Array(arrayLength).fill('');
    rA.forEach((element, index) => {
      rA[index] = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
    return rA;
  }

  ngOnInit() {

  }

  validateColor(color: string): boolean {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  }

  public updateColor(): void {
    this.syncService.currentColor.next(this.selectedColor)
  }

  public syncColor(): void {
    this.updateColor()
  }
}
