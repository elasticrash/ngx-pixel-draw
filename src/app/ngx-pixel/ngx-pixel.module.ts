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
import { D3Service } from '../d3/d3.service';
import { GraphComponent } from '../visuals/graph/graph.component';
import { DraggableDirective } from '../d3/directives/draggable.directives';
import { ZoomableDirective } from '../d3/directives/zoomable.directive';
import { LinkVisualComponent } from '../visuals/shared/link-visual.component';
import { NodeVisualComponent } from '../visuals/shared/node-visual.component';

export const myComponents = [
  DimensionsComponent,
  BoardComponent,
  BlockComponent,
  ColorPickerComponent,
  OpenFileComponent,
  GraphComponent,
  DraggableDirective,
  ZoomableDirective,
  LinkVisualComponent,
  LinkVisualComponent,
  NodeVisualComponent
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
    DecodePngService,
    D3Service
  ],
  exports: [
    ...myComponents
  ]
})

export class NgxPixelModule { }
