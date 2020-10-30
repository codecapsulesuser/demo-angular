// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string,  amount: number){
//     this.name = name;
//     this.amount = amount;

//   }
// }

// Above is so common TS gives us the option below

export class Ingredient {
  constructor(public name: string, public amount: number){
  }
}