// import the Input decorator
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-metric",
  templateUrl: "./metric.component.html",
  styleUrls: ["./metric.component.css"]
})
export class MetricComponent {
  // Declares properties with  Input decoeater and default values
  @Input() title: string = "";
  @Input() description: string = "";
  @Input("used") value: number = 0;
  @Input("available") max: number = 100;

  // Method to check if utilixation ezceeds 70%
  isDanger() {
    return this.value / this.max > 0.7;
  }
}
