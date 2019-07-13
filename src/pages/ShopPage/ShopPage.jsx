import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
class ShopPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <section className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </section>
    );
  }
}
export default ShopPage;
