import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { CalendarModule } from 'primeng/calendar';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

//@urir https://www.primefaces.org/primeng/#/dragdrop
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';

import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';


import { ChartModule } from 'primeng/chart';


import { MegaMenuModule } from 'primeng/megamenu';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    DragDropModule,
    PanelModule,
    TableModule,
    BreadcrumbModule,
    ChartModule,
    MegaMenuModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
