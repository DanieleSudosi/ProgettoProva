import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSerieComponent } from './cat-serie.component';

describe('CatSerieComponent', () => {
  let component: CatSerieComponent;
  let fixture: ComponentFixture<CatSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
