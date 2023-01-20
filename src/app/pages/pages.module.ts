import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos Importados
import { MaterialModule } from '../material/material.module';

//Componentes
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [HomeComponent],
})
export class PagesModule {}
