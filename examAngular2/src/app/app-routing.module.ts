import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChild } from '@angular/core/src/metadata/di';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'view/:id', component: ViewComponent},
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
