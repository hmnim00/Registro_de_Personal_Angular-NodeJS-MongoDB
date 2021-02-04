import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { WListComponent } from './components/w-list/w-list.component';
import { WViewComponent } from './components/w-view/w-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent, pathMatch: 'full' },
  { path: 'todos', component: WListComponent },
  { path: 'nuevo', component: CreateFormComponent },
  { path: 'empleado/:id', component: WViewComponent },
  { path: 'nuevo/:id', component: CreateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
