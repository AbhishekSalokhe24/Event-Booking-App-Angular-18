import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacUSComponent } from './contac-us.component';

describe('ContacUSComponent', () => {
  let component: ContacUSComponent;
  let fixture: ComponentFixture<ContacUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacUSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
