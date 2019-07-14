// import the Input decorator
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-metric",
  templateUrl: "./metric.component.html",
  styleUrls: ["./metric.component.css"]
})
export class MetricComponent {
  // Declares properties with  Input decoeater and default values
  @Input() title: string;
  @Input() description: string;
  // private properties for storing the validated values
  private _value: number = 0;
  private _max: number = 100;

  //setter methos for value with input decorator
  @Input("used")
  set value(value: number) {
    if (isNaN(value)) value = 0;
    this._value = value;
  }
  //getter merhod for value to return privare property
  get value(): number {
    return this._value;
  }

  //setter methos for max with input decorator
  @Input("available")
  set max(max: number) {
    if (isNaN(max)) max = 100;
    this._max = max;
  }
  //getter merhod for max to return privare property
  get max(): number {
    return this._max;
  }

  // Method to check if utilixation ezceeds 70%
  isDanger() {
    return this.value / this.max > 0.7;
  }
}
