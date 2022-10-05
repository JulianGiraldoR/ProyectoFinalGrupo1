import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 

  @Input() product: Product = {
    _id:"",
    title:"",
    description:"",
    category:"",
    ingredients:"",
    imgUrl:"",
  }

  @Output() productAdded = new EventEmitter<Product>()



  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit(){
    this.ProductsService.getProducts()
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )

 
}
}
