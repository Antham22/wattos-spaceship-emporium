import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Table = styled.table`

`

const TableRow = styled.tr`
`
const TableHeader =styled.th`
  text-align: left;
  padding: 15px;
`
const TableItem = styled.td `
  text-align: left;
  padding: 15px;
`

const Thumbnail = styled.img`
  // cursor:pointer;
  width: 50px;
  height: 50px;
`

const CheckoutList = ({items , handleRemoveFromCartClick}) => (
  items.length <= 0 ?
  <h3>No items in cart!</h3>
  :<Table>
    <TableRow>
      <TableHeader></TableHeader>
      <TableHeader>Item</TableHeader>
      <TableHeader>Price</TableHeader>
      <TableHeader></TableHeader>
    </TableRow>
      {items.map((item, index) =>
        <TableRow key={index}>
          <TableItem><Thumbnail src={`/static/${item.slug}/0.png`} /></TableItem>
          <TableItem>{item.name} </TableItem>
          <TableItem>{item.price}</TableItem>
          <TableItem><Button text="remove" handleClick={()=>{handleRemoveFromCartClick(index)}} /></TableItem>
        </TableRow>
      )}
  </Table>
)

export default CheckoutList
