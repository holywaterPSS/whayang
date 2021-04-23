import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNavigatorComponent } from './web-navigator.component';

describe('WebNavigatorComponent', () => {
  let component: WebNavigatorComponent;
  let fixture: ComponentFixture<WebNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
