import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

// this can be performance concern with large arrays or on
// slow computers since the array methods get called every
// time on component re-render.
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        // .map(({ id, ...otherItemProps }) => (
        //   <CollectionItem key={id} {...otherItemProps} />
        // ))}
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
