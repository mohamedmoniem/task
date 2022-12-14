import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SuccessfullyComponent } from './successfully/successfully.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '',component: WelcomeComponent },
  {path: 'register',component:RegisterComponent },
  {path: 'successfully',component: SuccessfullyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true}   )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
