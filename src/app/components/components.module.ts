import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

//Modulos Importados
import { PagesModule } from '../pages/pages.module';
import { MaterialModule } from '../material/material.module';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogDeporteComponent } from './dialog-deporte/dialog-deporte.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    DialogDeporteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    LayoutModule,
    MaterialModule,
    PagesModule,
  ],
  exports: [NavigationComponent, DialogDeporteComponent],
})
export class ComponentsModule {}
