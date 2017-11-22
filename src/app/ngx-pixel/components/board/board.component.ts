import { Component, OnInit, ViewChild } from '@angular/core';
import { SyncService } from '../../services/sync.service';
import { Dimensions } from '../../models/dimensions.model';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  @ViewChild('square') block;
  public dimensions: Dimensions;
  public board: Array<Array<number>> = [[]];
  public color: string;

  constructor(
    private syncService: SyncService
  ) { }

  ngOnInit() {
    this.syncService.currentSize.subscribe((size: Dimensions) => {
      this.dimensions = size;
      this.generateBoard();
    });

    this.syncService.currentColor.subscribe((color: string) => {
      this.color = color;
    });
  }

  applyColor() {
    this.block.nativeElement.style['background-color'] = this.color;
  }

  generateBoard() {
    this.board = Array(this.dimensions.width).fill(Array(this.dimensions.height).fill("#ffffff"));
  }

}
