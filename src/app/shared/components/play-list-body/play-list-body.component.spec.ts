import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListBodyComponent } from './play-list-body.component';

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
