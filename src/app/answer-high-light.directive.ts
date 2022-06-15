import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighLight]'
})
export class AnswerHighLightDirective {

  constructor(private el: ElementRef, private controlName: NgControl) {
    console.log(this.el);
    console.log(this.controlName.control);
  }

  ngOnInit(){
    // console.log(this.controlName.control);
    // console.log(this.controlName.control?.parent);
    this.controlName.control?.parent?.valueChanges
    .pipe(
      map(({a, b, answer}) => Math.abs((a + b - answer) / (a + b)) ),
      // filter(value => value < 0.2)
    )
    .subscribe(value => {
      // console.log(value);
      if( value < 0.2 ){
        this.el.nativeElement.classList.add('close');
      } else {
        this.el.nativeElement.classList.remove('close');
      }
    })
  }

}
