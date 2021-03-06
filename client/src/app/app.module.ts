import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './components/app/app.component';
import {LoginComponent} from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SectorsComponent } from './pages/sectors/sectors.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { CreateSectorComponent } from './pages/create-sector/create-sector.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'view-project', component: ViewProjectComponent },
  { path: 'sectors', component: SectorsComponent },
  { path: 'create-sector', component: CreateSectorComponent },
  { path: 'equipment', component: EquipmentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    UsersComponent,
    CreateUserComponent,
    ProjectsComponent,
    SectorsComponent,
    EquipmentComponent,
    ViewProjectComponent,
    CreateProjectComponent,
    CreateSectorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
