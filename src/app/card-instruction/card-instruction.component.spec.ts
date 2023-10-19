import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstructionComponent } from './card-instruction.component';

describe('CardInstructionComponent', () => {
  let component: CardInstructionComponent;
  let fixture: ComponentFixture<CardInstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInstructionComponent]
    });
    fixture = TestBed.createComponent(CardInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
