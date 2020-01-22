import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstidentComponent } from './editstident.component';

describe('EditstidentComponent', () => {
  let component: EditstidentComponent;
  let fixture: ComponentFixture<EditstidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
