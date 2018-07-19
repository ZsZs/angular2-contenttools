import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenttoolsComponent } from './contenttools.component';

describe('ContentToolsComponent', () => {
  let component: ContenttoolsComponent;
  let fixture: ComponentFixture<ContenttoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenttoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ContenttoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
