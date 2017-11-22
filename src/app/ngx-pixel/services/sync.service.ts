import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Dimensions } from '../models/dimensions.model';

@Injectable()
export class SyncService {
  public currentSize: BehaviorSubject<Dimensions> = new BehaviorSubject(new Dimensions(10,10));
  public currentColor: BehaviorSubject<string> = new BehaviorSubject("#d34567");
  
  constructor() { }

}
