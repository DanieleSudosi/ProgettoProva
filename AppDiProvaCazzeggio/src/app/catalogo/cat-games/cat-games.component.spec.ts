import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGamesComponent } from './cat-games.component';

describe('CatGamesComponent', () => {
  let component: CatGamesComponent;
  let fixture: ComponentFixture<CatGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
