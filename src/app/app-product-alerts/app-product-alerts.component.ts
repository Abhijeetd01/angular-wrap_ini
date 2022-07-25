import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-app-product-alerts',
  templateUrl: './app-product-alerts.component.html',
  styleUrls: ['./app-product-alerts.component.css'],
})
export class AppProductAlertsComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {}
}
