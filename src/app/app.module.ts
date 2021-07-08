// ANGULAR
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MÁSCARAS
import { NgxMaskModule, IConfig } from 'ngx-mask';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

// DIRETÓRIOS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatPaginatorIntlCro } from './translate/customClass';
import { DeleteModalComponent } from './components/list/delete-modal/delete-modal.component';
import { ConfirmModalComponent } from './components/details/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    AboutComponent,
    ContactUsComponent,
    DeleteModalComponent,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
  ],

  providers: [
    TodoService,
    MatPaginatorIntl,
    MatPaginatorIntlCro,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
