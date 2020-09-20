import React from "react";
import { Table } from "react-bootstrap";
import "./style.css";
import youTubeImg from "../../images/youtube.png";
import blogImg from "../../images/blogging.png";

function TableComp(props) {
  console.log(props.defects);
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
        {props.defects.map((defect) => (
          <tr>
            <td>{defect.errorCode}</td>
            <td>{defect.title}</td>
            <td>{defect.description}</td>
            <td>{defect.component}</td>

            <td>
              <a href={defect.media.videoUrl}>
                <img
                  className="tableIcon"
                  src={youTubeImg}
                  alt="Youtube Icon"
                />
              </a>
              <a href={defect.media.blogUrl}>
                <img className="tableIcon" src={blogImg} alt="Youtube Icon" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComp;
