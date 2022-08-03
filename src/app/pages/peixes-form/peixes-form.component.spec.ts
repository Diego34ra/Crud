import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeixesFormComponent } from './peixes-form.component';

describe('PeixesFormComponent', () => {
  let component: PeixesFormComponent;
  let fixture: ComponentFixture<PeixesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeixesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeixesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
