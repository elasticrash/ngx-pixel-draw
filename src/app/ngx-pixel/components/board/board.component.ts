import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../services/sync.service';
import { Dimensions } from '../../models/dimensions.model';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public dimensions: Dimensions;
  public board: Array<Array<number>> = [[]];

  constructor(
    private syncService: SyncService
  ) { }

  ngOnInit() {
    this.syncService.currentSize.subscribe((size: Dimensions) => {
      this.dimensions = size;
      this.generateBoard();
    });
  }

  generateBoard() {
    this.board = Array(this.dimensions.width).fill(Array(this.dimensions.height).fill("#ffffff"));
  }

}
