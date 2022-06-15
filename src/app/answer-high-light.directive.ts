import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAnswerHighLight]'
})
export class AnswerHighLightDirective {

  constructor(private el: ElementRef, private controlName: NgControl) {
    console.log(this.el);
    console.log(this.controlName.control);
  }

  ngOnInit(){
    console.log(this.controlName.control);
    console.log(this.controlName.control?.parent);
  }

}
