import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
