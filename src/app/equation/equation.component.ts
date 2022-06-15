import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit {
  secondPerSolution = 0;
  mathform = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  },[
    MathValidators.addition('answer', 'a', 'b'),
    Validators.required
  ]);

  constructor() { }

  get a() { return this.mathform.value.a; }
  get b() { return this.mathform.value.b; }
  get answer() { return this.mathform.value.answer; }

  ngOnInit(): void {
    this.mathform.statusChanges
      .pipe(
        filter(value => value === "VALID"),
        delay(1000),
        scan((acc, value)=>{
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          }
        }, {numberSolved: 0, startTime: new Date()})
      )
    .subscribe(({numberSolved, startTime})=>{
      this.secondPerSolution = (
        new Date().getTime() - startTime.getTime()
      ) / numberSolved / 1000;

        this.mathform.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        });
    });
  }

  randomNumber(){
    return Math.floor(Math.random() * 10);
  }

}
