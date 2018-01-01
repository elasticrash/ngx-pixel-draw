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
      console.log(matrix);
      if (matrix.length === 0) {
        this.generateBoard();
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
    for (let i = 0; i < this.syncService.width; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < this.syncService.height; j += 1) {
        this.board[i][j] = '#e7f2ff';
      }
    }
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

  private reSampleImage(matrix) {
    const ratioX = Math.floor(this.syncService.shape[0] / this.syncService.width);
    const ratioY = Math.floor(this.syncService.shape[1] / this.syncService.height);

    for (let i = 0; i < this.syncService.width; i += 1) {
      for (let j = 0; j < this.syncService.height; j += 1) {

        let colorValue = [0, 0, 0];
        for (let x = 0; x < Math.ceil(ratioX); x++) {
          for (let y = 0; y < Math.ceil(ratioY); y++) {
            colorValue = [
              colorValue[0] + matrix[(i * ratioX) + x][(j * ratioY) + y][0],
              colorValue[1] + matrix[(i * ratioX) + x][(j * ratioY) + y][1],
              colorValue[2] + matrix[(i * ratioX) + x][(j * ratioY) + y][2]
            ];
          }
        }
        this.board[i][j] = '#' + this.rgbToHex(
          Math.floor(colorValue[0] / (ratioX * ratioY)),
          Math.floor(colorValue[1] / (ratioX * ratioY)),
          Math.floor(colorValue[2] / (ratioX * ratioY))
        );
      }
    }
  }

  private intensityToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  private rgbToHex(r, g, b) {
    return this.intensityToHex(r) + this.intensityToHex(g) + this.intensityToHex(b);
  }
}
