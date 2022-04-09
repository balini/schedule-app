import { SessionService } from './session.service';
import { SessionComponent } from './session.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SessionComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SessionComponent],
  providers: [SessionService]
})
export class SessionModule { }
