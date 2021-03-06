import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { OcrHistoryComponent } from './ocr-history/ocr-history.component';
import { OcrLoginComponent } from './ocr-login/ocr-login.component';
import { OcrRegisterComponent } from './ocr-register/ocr-register.component';

import { OcrHomeInputComponent } from './ocr-home-input/ocr-home-input.component';
import { AppRoutingModule } from './/app-routing.module';
import { OcrFooterComponent } from './ocr-footer/ocr-footer.component';
import { OcrCkeditorComponent } from './ocr-ckeditor/ocr-ckeditor.component';
import { OcrInputService } from './service/ocr-input.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OcrChildpersonal1Component } from './ocr-childpersonal1/ocr-childpersonal1.component';
import { OcrChildpersonal2Component } from './ocr-childpersonal2/ocr-childpersonal2.component';

@NgModule({
  declarations: [
    AppComponent,
    OcrHistoryComponent,
    OcrLoginComponent,
    OcrRegisterComponent,
    OcrHomeInputComponent,
    OcrFooterComponent,
    OcrChildpersonal1Component,
    OcrChildpersonal2Component,
    OcrCkeditorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    FileUploadModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CKEditorModule,
    QuillModule,
  ],
  providers: [
    OcrInputService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
