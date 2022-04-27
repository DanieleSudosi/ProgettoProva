import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMangaComponent } from './cat-manga.component';

describe('CatMangaComponent', () => {
  let component: CatMangaComponent;
  let fixture: ComponentFixture<CatMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
