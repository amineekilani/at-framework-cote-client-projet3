import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStatsComponent } from './books-stats.component';

describe('BooksStatsComponent', () => {
  let component: BooksStatsComponent;
  let fixture: ComponentFixture<BooksStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
