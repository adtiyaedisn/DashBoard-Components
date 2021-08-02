import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchcardComponent } from './matchcard.component';

describe('MatchcardComponent', () => {
  let component: MatchcardComponent;
  let fixture: ComponentFixture<MatchcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
