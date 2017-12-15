import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

// modules
import { MapModule } from '../map/map.module';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { DocumentsTabContentComponent } from './application-detail/documents/documents-tab-content.component';
import { OrderByPipe } from '../filters/order-by.pipe';
import { NewlinesPipe } from '../filters/newlines.pipe';

// services
import { Api } from '../services/api';
import { ApplicationService } from '../services/application.service';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ApplicationsRoutingModule,
    MapModule,
    SharedModule
  ],
  declarations: [
    ApplicationListComponent,
    ApplicationDetailComponent,
    DocumentsTabContentComponent
  ],
  exports: [
    ApplicationListComponent,
    ApplicationDetailComponent
  ],
  providers: [
    Api,
    ApplicationService
  ]
})
export class ApplicationsModule { }
