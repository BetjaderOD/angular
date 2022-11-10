import {Component} from "@angular/core";
import {Heroe} from "../entities/heroe";
import {ListComponent} from "../list/list.component";
import {ServicesService} from "../services/services.service";
@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',

})
export class AddComponent {

  heroe: Heroe = {
    name: 'betja',
    power: 1,
    habilities: ['volar'],

  }
  constructor(private readonly service: ServicesService) {
  }

  saveHeroe(){
  this.service.saveHeroe(this.heroe)
    // console.log(this.heroe)
  }


}
