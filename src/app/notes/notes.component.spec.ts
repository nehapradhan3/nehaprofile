/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';
import { NotesComponent } from './notes.component';


// deleteSelectedTodos() {
//      //need ES5 to reverse loop in order to splice by index
//      for(var i=(this.todos.length -1); i > -1; i--) {
//        if(this.todos[i].completed) {
//          this.todos.splice(i, 1);
//        }


describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  // let  a=1 , todo="say hi", splice= a, i=(todo.length)-a ;
  // it("should meet conditions to splice the length" ,() =>{
  //     expect(i).toBeGreaterThan(-1);
  //     expect(todo.length).toBeGreaterThan(0);
  //    expect(todo[i]).toBeTruthy();
  //    expect(splice).toBeLessThan(i);
  //
  //   });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('Sanity Test', () => {

    it('Should test matchers', () => {

        let _undefined, _defined = true;

        expect("a" + "b").toBe("ab");

        expect(_undefined).toBeUndefined();
        expect(_defined).toBeDefined();

        expect(!_defined).toBeFalsy();
        expect(_defined).toBeTruthy();
        expect(null).toBeNull();

        expect(1 + 1).toEqual(2);
        expect(5).toBeGreaterThan(4);
    	expect(5).toBeLessThan(6);

        expect("abcdbca").toContain("bcd");
        expect([4, 5, 6]).toContain(5);
        expect("abcdefgh").toMatch(/efg/);

        expect("abcdbca").not.toContain("xyz");
        expect("abcdefgh").not.toMatch(/123/);
    });
});

//////////beginning of  test example////////////
// export let myCustomMatchers = {

  // toBeAllowedToDrive matcher
  // Usage: expect(age).toBeAllowedToDrive();
  //        expect(age).not.toBeAllowedToDrive();

//   toBeAllowedToDrive: () => ({
//     compare: age => {
//       let result = {};
//       result.pass = age>16;
//
//       if (result.pass) {
//         result.message = `Expected ${age} to be allowed to drive`;
//       } else {
//         result.message = `Expected ${age} to be allowed to drive, but it was not`;
//       }
//       return result;
//     }
//   })
// };


// let John = 17, Mary = 16;
//
// it("should allow John to drive", () => {
//   expect(John).toBeAllowedToDrive();
//   // replaces
//   expect(John).toBeGreaterThan(16);
// });
//
// it("should not allow Mary to drive", () => {
//   expect(Mary).not.toBeAllowedToDrive();
//   // replaces
//   expect(Mary).not.toBeGreaterThan(16);
// });

//////////end of example////////////
