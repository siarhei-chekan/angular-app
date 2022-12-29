import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ModalService } from './services/modal.service';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  // products: IProduct[] = [];
  loading = false;
  queryString = '';

  // products$: Observable<IProduct[]>;

  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() => {
      // this.products = products;
      this.loading = false;
    });
    // this.products$ = this.productService.getAll().pipe(tap(() => this.loading = false));
  }
}
