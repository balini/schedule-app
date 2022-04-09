import { ProfessionalComponent } from './professional.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProfessionalComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfessionalComponent]
})
export class ProfessionalModule { }
