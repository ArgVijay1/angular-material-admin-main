import { AppInfoFormComponent } from "./app-management/app-info-form/app-info-form.component";
import { AppManagementComponent } from "./app-management/app-management.component";
import { LoginComponent } from "./authentication/login/login.component";

export const childRoutes = [
  {
    path: 'app-mgmt',
    loadChildren: () =>
      import('./app-management/app-management.module').then(
        m => m.AppManagementModule
      ),
    data: { icon: 'place', text: 'Google Maps' }
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./user/user.module').then(
        m => m.UserModule
      ),
    data: { icon: 'assignment', text: 'Projects' }
  },
];  