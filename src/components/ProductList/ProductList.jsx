import React, { Component } from "react";
import Product from "../Product/Product";
import { PRODUCTS } from "../../data/smaple-data";
class ProductList extends Component {
  state = {
    products: PRODUCTS
  };
  render() {
    const { products } = this.state;
    return (
      <section className="product-list">
        {products &&
          products.map(product => <Product key={product.id} {...product} />)}
      </section>
    );
  }
}
export default ProductList;
