import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoExampleComponent } from './todo-example.component';

describe('TodoExampleComponent', () => {
  let component: TodoExampleComponent;
  let fixture: ComponentFixture<TodoExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
