import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaParaPetComponent } from 'src/app/caixa-para-pet/caixa-para-pet.component';


const routes: Routes = [
  {
    path: '',
    component: CaixaParaPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
