import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit {

  mathform = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  },[
    (form: AbstractControl)=>{
      // return null
      // console.log(form.value);
      // return { addition: true};

      // if(form.value.a + form.value.b === parseInt(form.value.answer)){}
      const { a, b, answer } = form.value;
      if(a + b === parseInt(answer)){
        return null;
      }
      return { addition: true};
    }
  ]);

  constructor() { }

  get a() { return this.mathform.value.a; }
  get b() { return this.mathform.value.b; }
  get answer() { return this.mathform.value.answer; }

  ngOnInit(): void {
  }

  randomNumber(){
    return Math.floor(Math.random() * 10);
  }

}
