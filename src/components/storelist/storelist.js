import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const styles = {
  listGroup: {
    borderLeft: '0px',
    borderRight: '0px',
    borderRadius: '0px',
  },
};

const StoreList = ({stores}) => (
<div>
  <h2 style={{fontSize: '1.8rem'}}>{stores.length} stores near you</h2>
  <ListGroup>
    {stores.map(store =>
      <ListGroupItem key={store.id} style={store.showInfo ? {...styles.listGroup, backgroundColor: '#eee'} : {...styles.listGroup}}>
        <p>address: {store.address_line_1} {store.address_line_2}</p>
        <p>distance: {store.distance_in_meters} m</p>
        <p>telephone: {store.telephone}</p>
        <Button><Link to={`/store/${store.id}`}>Store Details</Link></Button>
      </ListGroupItem>
    )}
  </ListGroup>
</div>
);

StoreList.propTypes = {
  stores: React.PropTypes.array,
};

export default StoreList;
