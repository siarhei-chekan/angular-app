import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
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
