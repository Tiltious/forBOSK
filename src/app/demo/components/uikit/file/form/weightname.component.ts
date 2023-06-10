import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpDataService } from 'src/app/demo/service/http.data.service';

@Component({
  selector: 'app-weightname',
  templateUrl: './weightname.component.html',
  providers: [DynamicDialogRef]

})
export class WeightnameComponent {
  formgroup!:FormGroup;
  value!:string;
  constructor(private fb:FormBuilder, public ref: DynamicDialogRef,private http:HttpDataService, private ddConfig:DynamicDialogConfig){
    this.formgroup = this.fb.group({
      Name:['',Validators.required]
    })
  }
  
  public get nameWeight() : string {
    return this.formgroup.get('Name')?.value
  }
  
  onSubmit(){
    console.log(this.ddConfig.data)
    console.log(this.nameWeight)
    this.http.saveWeight({Name:this.nameWeight,Weights:this.ddConfig.data}).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }
}
