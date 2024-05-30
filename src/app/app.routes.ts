import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/TodoComponent';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'todo',
  },
];
