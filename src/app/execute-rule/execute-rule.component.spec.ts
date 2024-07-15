import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteRuleComponent } from './execute-rule.component';

describe('ExecuteRuleComponent', () => {
  let component: ExecuteRuleComponent;
  let fixture: ComponentFixture<ExecuteRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecuteRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecuteRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
