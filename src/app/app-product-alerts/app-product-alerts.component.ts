import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-app-product-alerts',
  templateUrl: './app-product-alerts.component.html',
  styleUrls: ['./app-product-alerts.component.css'],
})
export class AppProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  ngOnInit(): void {}
}