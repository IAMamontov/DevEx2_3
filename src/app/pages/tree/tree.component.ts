import { Component, OnInit } from '@angular/core';
import { Host, CufService} from "./cuf.service";
// import { DxTreeListModule } from 'devextreme-angular';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  hosts: Host[] = [];

  constructor(service: CufService) {
    this.hosts = service.getHosts();
  }
}
/*export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
