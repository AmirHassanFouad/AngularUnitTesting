import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';


import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodosComponent],
            imports: [HttpClientModule],
            providers: [TodoService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodosComponent);
        component = fixture.componentInstance;
    });

    it('should load todos from the server', fakeAsync(() => {
        //fixture.debugElement.injector.get(TodoService)
        let service = TestBed.get(TodoService);

        //spyOn(service, 'getTodos').and.returnValue(of([1, 2, 3]));
        spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
      
        fixture.detectChanges();

        // use whenStable() withh async because the expect function called before the promise has been completed
        // so that this test will fail because the todos array hasn't been assigned with the value from server yet
        // fixture.whenStable().then(() => {//returns a promise that is resolved when all async calls are completed
        //     expect(component.todos.length).toBe(3);
        // });
        // with fakeAsync we can use expect without promise
        tick();// simulate a passage of time
        expect(component.todos.length).toBe(3);
    }));
});
