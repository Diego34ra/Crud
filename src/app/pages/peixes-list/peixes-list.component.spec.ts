import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeixesListComponent } from './peixes-list.component';

describe('PeixesListComponent', () => {
  let component: PeixesListComponent;
  let fixture: ComponentFixture<PeixesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeixesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeixesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
