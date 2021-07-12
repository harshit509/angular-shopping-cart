export class Product {
  id: number;
  product_name: string;
  desc: string;
  price: number;
  image: string;
 

  constructor(id:any, product_name:any, desc = '', price = 0, image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    this.id = id;
    this.product_name = product_name;
    this.desc = desc;
    this.price = price;
    this.image =image;
  }
}