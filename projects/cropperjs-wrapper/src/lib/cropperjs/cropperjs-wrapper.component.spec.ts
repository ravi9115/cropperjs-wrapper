import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperjsWrapperComponent } from './cropperjs-wrapper.component';

describe('CropperjsWrapperComponent', () => {
  let component: CropperjsWrapperComponent;
  let fixture: ComponentFixture<CropperjsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperjsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperjsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
