
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppInfoFormComponent } from './app-management/app-info-form/app-info-form.component';
import { AppManagementComponent } from './app-management/app-management.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserManagementComponent } from './user/user-management/user-management.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'app-mgmt',component:AppManagementComponent},
  {path:'info-form',component:AppInfoFormComponent},
  {path:'user-mgmt',component:UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
