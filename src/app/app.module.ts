import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FotoprincipalComponent } from './componentes/fotoprincipal/fotoprincipal.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotoprincipalComponent,
    PortfolioComponent,
    TecnologiasComponent,
    FormularioComponent,
    EducacionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
