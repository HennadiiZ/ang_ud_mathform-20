// import { AbstractControl } from "@angular/forms";

// export class MathValidators {
//   static addition(form: AbstractControl){
//     const { a, b, answer } = form.value;

//     if(a + b === parseInt(answer)){
//       return null;
//     }
//     return { addition: true};
//   }

//   static substraction(){

//   }
// }

// const mathValidators = new MathValidators();
// mathValidators.addition(); //- does not work with static

// MathValidators.addition(); //- works with static



import { AbstractControl } from "@angular/forms";

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string){
    return (form: AbstractControl) => {

      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];

      if(firstNumber + secondNumber === parseInt(sum)){
        return null;
      }
      return { addition: true};
    };
  }

  static substraction(){

  }
}
