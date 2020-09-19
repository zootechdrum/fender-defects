import React from "react";
import { Table } from "react-bootstrap";

function TableComp(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Error #</th>
          <th>Title of Error</th>
          <th>Description</th>
          <th>Media</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2000</td>
          <td>Pickup Out of Phase</td>
          <td>When they are out-of-phase, the two pickups work against one another; the resulting sound is simply the “leftovers” from the pickups’ cancellations. The closer the two pickups are, the greater the cancellations, meaning thinner sound and lesser volume.</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComp;
