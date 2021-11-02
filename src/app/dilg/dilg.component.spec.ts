import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilgComponent } from './dilg.component';

describe('DilgComponent', () => {
  let component: DilgComponent;
  let fixture: ComponentFixture<DilgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DilgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
