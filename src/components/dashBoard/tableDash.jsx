/* eslint-disable no-plusplus */
import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (phoneNumbers) => {
  const rowItems = [];

  /* istanbul ignore next */
  for (let i = 0; i < phoneNumbers.phoneNumbers.length; i++) {
    /* istanbul ignore next */
    const a = i + 1;
    const row = {
      id: a,
      phone_number: phoneNumbers.phoneNumbers[i],
    };
    rowItems.push(row);
  }
  const data = {
    columns: [
      {
        label: 'Number',
        field: 'number',
        sort: 'asc',
      },
      {
        label: 'Phone Number',
        field: 'phone_number',
        sort: 'asc',
      },
    ],
    rows: rowItems,
  };
  return (
    <MDBTable scrollY>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default TablePage;
