import { Component } from '@angular/core';
import { products } from '../products';
// import { Product } from '../products';
// import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    debugger;
    window.alert('You will be notified when the product goes on sale');
  }
}
