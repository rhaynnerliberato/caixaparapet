import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { IniciarOrcamentoComponent } from 'src/app/caixa-para-pet/iniciar-orcamento/iniciar-orcamento.component';
import { TipoCaixaComponent } from 'src/app/caixa-para-pet/tipo-caixa/tipo-caixa.component';
import { AlturaDataComponent } from 'src/app/caixa-para-pet/altura-data/altura-data.component';
import { FinalizarPedidoComponent } from 'src/app/caixa-para-pet/finalizar-pedido/finalizar-pedido.component';
import { CaixaParaPetComponent } from 'src/app/caixa-para-pet/caixa-para-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaParaPetComponent,
    HeaderComponent,
    FooterComponent,
    IniciarOrcamentoComponent,
    TipoCaixaComponent,
    AlturaDataComponent,
    FinalizarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
