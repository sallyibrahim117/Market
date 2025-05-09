import { Inameoffeature } from "./inameoffeature";

export interface Irelease {
  title ?:Inameoffeature
  image:string;
  desc:string;
  price:number;
  oldPrice?:number
}
