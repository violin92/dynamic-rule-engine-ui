import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRuleComponent } from './delete-rule.component';

describe('DeleteRuleComponent', () => {
  let component: DeleteRuleComponent;
  let fixture: ComponentFixture<DeleteRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
