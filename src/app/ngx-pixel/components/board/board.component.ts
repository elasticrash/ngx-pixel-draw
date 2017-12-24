import { Component, OnInit, ViewChild, ViewChildren, Input, QueryList } from '@angular/core';
import { SyncService } from '../../services/sync.service';
import { Dimensions } from '../../models/dimensions.model';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  @ViewChild('square') block;
  @ViewChildren('square') blocks: QueryList<any>;

  @Input() public mode = 'click';
  public dimensions: Dimensions;
  public board: Array<Array<string>> = [[]];
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

    this.syncService.currentMatrix.subscribe((matrix: any) => {
      if (matrix.length === 0) {
        this.board = Array(this.dimensions.width).fill(Array(this.dimensions.height).fill('#e7f2ff'));
      } else {
        this.reSampleImage(matrix);
        console.log('board', this.board);
      }
    });
  }

  public applyColor(block, e) {
    if (e.type === this.mode) {
      block.style['background-color'] = this.color;
    }
  }

  public generateBoard() {
    this.board = Array(this.dimensions.width).fill(Array(this.dimensions.height).fill('#e7f2ff'));
  }

  private addHexColor(c1, c2) {
    let hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
    while (hexStr.length < 6) { hexStr = '0' + hexStr; }
    return hexStr;
  }

  private divideHexColor(c1: string, div: number) {
    const num: number = +parseInt(c1, 16).toString(10);
    const division = num / div;
    let result = parseInt(division.toString(), 10).toString(16);
    while (result.length < 6) { result = '0' + result; }
    return result;
  }

  private reSampleImage(image) {
    const ratio = this.syncService.shape[0] / this.syncService.width;

    for (let i = 0; i < this.syncService.width; i++) {
      for (let j = 0; j < this.syncService.height; j++) {
        this.board[i][j] = '#' + image[Math.floor(i * ratio)][Math.floor(j * ratio)];
      }
    }
  }
}
