import { Component, OnInit, OnDestroy } from "@angular/core";

// declares the interfaces for a Metric and Mude data type
interface Metric {
  used: number;
  available: number;
}
interface Node {
  name: string;
  cpu: Metric;с
  mem: Metric;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})

// Creates controller class; declare must implement OnInit and OnDestroy
export class DashboardComponent implements OnInit, OnDestroy {
  // Defines properies and grants then types
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  // Implements the NgOnInit lifecycle hook to initialize the data, and sets up interval
  ngOnInit(): void {
    this.generateData();

    this.interval = setInterval(() => {
      this.generateData();
    }, 15000);
  }

  // Clears the interval usung NgOnDestroy to free up memory
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) this.cluster1.push(this.randomNode(i));
    for (let i = 1; i < 7; i++) this.cluster2.push(this.randomNode(i));
  }

  private randomNode(i): Node {
    let node = {
      name: "node" + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
