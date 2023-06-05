import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { FileDemoRoutingModule } from './filedemo-routing.module';
import { FileDemoComponent } from './filedemo.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormComponent } from './form/form.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FileDemoRoutingModule,
		FileUploadModule,
        FormsModule,
        ReactiveFormsModule,
		CardModule,
		TableModule,
		MultiSelectModule,
		DropdownModule
	],
	declarations: [FileDemoComponent, FormComponent],
})
export class FileDemoModule { }
