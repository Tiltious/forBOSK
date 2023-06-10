import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProjectMain } from 'src/app/demo/class/files-details';
import { HttpDataService } from 'src/app/demo/service/http.data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WeightnameComponent } from './weightname.component';

interface ProjectSelect {
  name: string,
  data: ProjectMain
}

interface Weights {
  Name: string,
  Weights: ProjectMain
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [DialogService]
})
export class FormComponent implements OnInit{
  @Input() project!:ProjectSelect;
  weight!:ProjectSelect;
  formgroup!:FormGroup;
  weights_sets!:any[];
  ref!: DynamicDialogRef;
  showload=false;
  constructor(private fb:FormBuilder,private http:HttpDataService,public dialogService: DialogService){
    this.http.getAllWeights().subscribe(
      (response:any)=>{
        console.log(response)
        this.weights_sets = response;
      }
    )
  }
  ngOnInit() {}
  show() {
    this.ref = this.dialogService.open(WeightnameComponent, { header: 'Save weight set', data:this.formgroup.value});
  }
  setWeights(event:any){
    console.log(event,'event')
    console.log(this.formgroup.value,'form value')
    for(let i in event){
      console.log(i)
      this.formgroup.get(i)?.get('weight')?.setValue(event[i].weight)
    }
    console.log(this.formgroup.value)

  }
  setControls(groupName:any){
    // this.formgroup.controls[controlName].setValue(this.project.data.Values)
    const x = this.formgroup.get(groupName)?.get('weight')?.value; 
    const c:any = this.project.data.Values;
    const y = c[groupName]
    const res = x*y;
    this.formgroup.get(groupName)?.get('words')?.setValue(res);
    let sum:number=0;
    for(let i in this.formgroup.value){
      const y = c[i]
      console.log(this.formgroup.value[i].weight,y)
      sum+=this.formgroup.value[i].weight*y
    }
    console.log(sum,'sum')
    this.formgroup.get('Total')?.get('words')?.setValue(sum)
  }
  // saveWeights(){
  //   console.log(this.formgroup.value)
  //   this.http.saveWeight({Name:'TestName',Weights:this.formgroup.value}).subscribe(
  //     (res:any)=>{
  //       console.log(res)
  //     }
  //   )
  // }
  ngOnChanges(){
    this.formgroup = this.fb.group({})
    const c:any = this.project.data.Values;
    for(let i in c){
      let weight:FormControl = this.fb.control('')
      let words:FormControl = this.fb.control(c[i])
      let control:FormGroup = this.fb.group({weight,words});
      this.formgroup.addControl(i,control)
      control.controls['words'].disable();
    }
    // console.log(this.formgroup.value,'fb')
  }
}
