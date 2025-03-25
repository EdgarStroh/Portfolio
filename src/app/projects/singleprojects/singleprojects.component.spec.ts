import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleprojectsComponent } from './singleprojects.component';

describe('SingleprojectsComponent', () => {
  let component: SingleprojectsComponent;
  let fixture: ComponentFixture<SingleprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleprojectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
