import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentaldisorderComponent } from './mentaldisorder.component';

describe('MentaldisorderComponent', () => {
  let component: MentaldisorderComponent;
  let fixture: ComponentFixture<MentaldisorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentaldisorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentaldisorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
