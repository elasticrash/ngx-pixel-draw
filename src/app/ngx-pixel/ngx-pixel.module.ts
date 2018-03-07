import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DimensionsComponent } from './components/dimensions/dimensions.component';
import { BoardComponent } from './components/board/board.component';
import { BlockComponent } from './components/block/block.component';
import { SyncService } from './services/sync.service';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DecodePngService } from './services/decode-png.service';
import { OpenFileComponent } from './components/open-file/open-file.component';
import { GraphComponent } from '../visuals/graph/graph.component';
import { TickComponent } from '../visuals/shared/tick.component';

export const myComponents = [
  DimensionsComponent,
  BoardComponent,
  BlockComponent,
  ColorPickerComponent,
  OpenFileComponent,
  GraphComponent,
  TickComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...myComponents,
  ],
  providers: [
    SyncService,
    DecodePngService
  ],
  exports: [
    ...myComponents
  ]
})

export class NgxPixelModule { }
