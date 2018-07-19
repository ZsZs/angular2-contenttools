import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentToolsComponent } from './content-tools.component';

describe('ContentToolsComponent', () => {
  let component: ContentToolsComponent;
  let fixture: ComponentFixture<ContentToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ContentToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
