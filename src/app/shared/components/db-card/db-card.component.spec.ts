import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCardComponent } from './db-card.component';

describe('DbCardComponent', () => {
  let component: DbCardComponent;
  let fixture: ComponentFixture<DbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
