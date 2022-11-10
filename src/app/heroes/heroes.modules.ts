import { NgModule } from "@angular/core";
import {ListComponent} from "./list/list.component";
import  { AddComponent} from "./add/add.component";

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations :[
    ListComponent,
    AddComponent,

  ],
  imports:[CommonModule, FormsModule],
  providers:[],
  exports:[ListComponent,
  AddComponent],

})
export class  HeroesModules{}
