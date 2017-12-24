import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Dimensions } from '../models/dimensions.model';

@Injectable()
export class SyncService {
  public currentColor: BehaviorSubject<string> = new BehaviorSubject('#d34567');
  public currentSize: BehaviorSubject<Dimensions> = new BehaviorSubject(new Dimensions(10, 10));
  public currentMatrix: BehaviorSubject<any> = new BehaviorSubject([]);

  private _width = 10;
  private _height = 10;
  private _colorMatrix: string[][];
  private _shape: any;

  get shape() {
    return this._shape;
  }

  set shape(shape) {
    this._shape = shape;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  get height() {
    return this._width;
  }

  set height(height) {
    this._height = height;
  }

  get colorMatrix() {
    return this._colorMatrix;
  }

  set colorMatrix(colorMatrix) {
    this._colorMatrix = colorMatrix;
    this.currentMatrix.next(colorMatrix);
  }

  updateCurrentSize(dimensions: Dimensions) {
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.currentSize.next(dimensions);
  }

  constructor() { }

}
