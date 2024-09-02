import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InfolistComponent } from './home/infolist/infolist.component';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard/home' , pathMatch:"full"},

  {path:'dashboard',component:HomeComponent , children:
    [
      {path:'home',component:InfolistComponent},
    ]
  },
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
