import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbFireComponent } from './db-fire.component';

describe('DbFireComponent', () => {
  let component: DbFireComponent;
  let fixture: ComponentFixture<DbFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
