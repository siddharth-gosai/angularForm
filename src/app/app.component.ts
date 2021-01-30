import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';
  alert:String= 'This field is requied!'
  reactiveForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
   });;

  constructor(private _fb:FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this._fb.group({
      firstName : ["",Validators.required],
      lastName : ["",Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(500)])]
    })
  }

  // submitForm(postData:any) {
  //   if(this.reactiveForm.valid){
  //     console.log('postdata',postData.value);
  //     this.reactiveForm.reset();
  //   }else{
  //   }
  // }

  onsubmitForm(data:FormGroup){
    if(this.reactiveForm.valid){
      console.log('submit successfully')
    }else{
      Object.keys(this.reactiveForm.controls).forEach(field => { 
        var control = this.reactiveForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
