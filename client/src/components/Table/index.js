import React from "react";
import { Table } from "react-bootstrap";
import "./style.css";
import youTubeImg from "../../images/youtube.png";
import blogImg from "../../images/blogging.png";

function TableComp(props) {
  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th width="100">Error #</th>
          <th className="text-center">Title of Error</th>
          <th height="30" width="450">
            Description
          </th>
          <th width="100">Component</th>
          <th width="150">Media</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2000</td>
          <td>Pickup Out of Phase</td>
          <td>
            When they are out-of-phase, the two pickups work against one
            another; the resulting sound is simply the “leftovers” from the
            pickups’ cancellations. The closer the two pickups are, the greater
            the cancellations, meaning thinner sound and lesser volume.
          </td>
          <td>Electronics</td>
          <td className="text-center">
            <img className="tableIcon" src={youTubeImg} alt="Youtube Icon" />
            <img className="tableIcon" src={blogImg} alt="Youtube Icon" />
          </td>
        </tr>
        <tr>
          <td>2000</td>
          <td>Pickup Out of Phase</td>
          <td>
            When they are out-of-phase, the two pickups work against one
            another; the resulting sound is simply the “leftovers” from the
            pickups’ cancellations. The closer the two pickups are, the greater
            the cancellations, meaning thinner sound and lesser volume.
          </td>
          <td>Electronics</td>
          <td className="text-center">
            <img className="tableIcon" src={youTubeImg} alt="Youtube Icon" />
            <img className="tableIcon" src={blogImg} alt="Youtube Icon" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComp;
