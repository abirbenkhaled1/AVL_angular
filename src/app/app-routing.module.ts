import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project imports
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

// Importing Components
import { DefaultComponent } from './demo/default/dashboard/dashboard.component';
import TypographyComponent from './demo/ui-component/typography/typography.component';
import UiColorComponent from './demo/ui-component/ui-color/ui-color.component';
import SamplePageComponent from './demo/other/sample-page/sample-page.component';
import { RegisterComponent } from './demo/authentication/register/register.component';
import { LoginComponent } from './demo/authentication/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/login', // Redirection vers la page login
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        component: DefaultComponent 
      },
      {
        path: 'typography',
        component: TypographyComponent 
      },
      {
        path: 'color',
        component: UiColorComponent 
      },
      {
        path: 'sample-page',
        component: SamplePageComponent 
      }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent // Déplacer la route de register ici
  },
  {
    path: 'login',
    component: LoginComponent // Déplacer la route de login ici
  },
  {
    path: '',
    component: GuestComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
