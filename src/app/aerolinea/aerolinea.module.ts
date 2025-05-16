import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueloModule } from '../vuelo/vuelo.module';
import { VistaGeneralComponent } from './vista-general/vista-general.component';



@NgModule({
  declarations: [
    VistaGeneralComponent
  ],
  imports: [
    CommonModule,
    VueloModule
  ]
})
export class AerolineaModule { }
