import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-example.component.html',
  styleUrl: './todo-example.component.css'
})
export class TodoExampleComponent {
  task = signal<Task>({
    title: 'Learn more about the signals',
    state: TaskState.New,
  });

  readonly TaskState = TaskState;

  createNewTask() {
    this.task.set({
      title: 'new task',
      state: TaskState.New,
    })
  }

  markAsDone() {
    this.task.update((task) => ({
      ...task,
      state: TaskState.Done,
    }));
  }
}


export enum TaskState {
  New,
  Done,
}

export interface Task {
  title: string;
  state: TaskState;
}