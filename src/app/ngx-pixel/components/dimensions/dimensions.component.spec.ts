import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DecodePngService } from '../../services/decode-png.service';
import { SyncService } from '../../services/sync.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DimensionsComponent } from './dimensions.component';

describe('DimensionsComponent', () => {
  let component: DimensionsComponent;
  let fixture: ComponentFixture<DimensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DimensionsComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        SyncService,
        DecodePngService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
