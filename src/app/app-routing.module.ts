import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeixesFormComponent } from './pages/peixes-form/peixes-form.component';
import { PeixesListComponent } from './pages/peixes-list/peixes-list.component';

const routes: Routes = [
  {
    path: '', component: PeixesListComponent
  },
  {
    path: 'Peixes', component: PeixesFormComponent
  },
  {
    path: 'Peixes/:id', component: PeixesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
