import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DimensionsComponent } from './components/dimensions/dimensions.component';
import { BoardComponent } from './components/board/board.component';
import { BlockComponent } from './components/block/block.component';
import { SyncService } from './services/sync.service';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

export const myComponents = [
  DimensionsComponent,
  BoardComponent,
  BlockComponent,
  ColorPickerComponent
]


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
    SyncService
  ],
  exports: [
    ...myComponents
  ]
})

export class NgxPixelModule { }
