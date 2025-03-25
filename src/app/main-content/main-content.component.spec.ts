import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContentComponent } from './main-content.component';

describe('HeroContentComponent', () => {
  let component: HeroContentComponent;
  let fixture: ComponentFixture<HeroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
