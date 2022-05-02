import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMangaComponent } from './single-manga.component';

describe('SingleMangaComponent', () => {
  let component: SingleMangaComponent;
  let fixture: ComponentFixture<SingleMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
