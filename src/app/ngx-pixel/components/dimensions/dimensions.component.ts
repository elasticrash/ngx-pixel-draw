import { Component, OnInit } from '@angular/core';
import { Dimensions } from '../../models/dimensions.model';
import { SyncService } from '../../services/sync.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  public dimensions: Dimensions = new Dimensions(20, 20);

  constructor(
    private syncService: SyncService
  ) { }

  ngOnInit() {
  }

  updateSize() {
    this.syncService.updateCurrentSize(this.dimensions);
  }

}
