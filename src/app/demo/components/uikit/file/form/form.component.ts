import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProjectMain } from 'src/app/demo/class/files-details';

interface ProjectSelect {
  name: string,
  data: ProjectMain
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() project!:ProjectSelect;
  formgroup!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit() {}
  
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
    console.log(this.formgroup.value,'fb')
  }
}
