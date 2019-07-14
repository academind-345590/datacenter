import { Component, Input } from '@angular/core';

@Component({
  // use [] to the attribute app-nodes-row
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent {

  // Declares the node property as an input
  @Input() node: any;

  // Implement the method to check if the value exceeds 70% utilization
  isDanger(prop){
    return this.node[prop].used / this.node[prop].availavle > 0.7;
  }

}
