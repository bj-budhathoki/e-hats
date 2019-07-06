import React, { Component } from "react";
import { SHOP_DATA } from "../../data/smaple-data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <section className="shop-page">
        {collections.map(collection => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </section>
    );
  }
}
export default ShopPage;
