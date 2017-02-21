/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render list', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  return tcb.createAsync(MyList).then((componentFixture: ComponentFixture) => {
    const element = componentFixture.nativeElement;
    componentFixture.detectChanges();
    expect(element.querySelectorAll('li').length).toBe(5);
    document.getElementById('test').click();
  });
}));
});
