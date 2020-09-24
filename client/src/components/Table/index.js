import React from "react";
import { Table } from "react-bootstrap";
import "./style.css";
import youTubeImg from "../../images/youtube.png";
import blogImg from "../../images/title.png";

function TableComp(props) {
  return (
    <div className="row">
      <div className="col">
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
              <tr key={defect._id}>
                <td>{defect.errorCode}</td>
                <td>{defect.title}</td>
                <td width="450">{defect.description}</td>
                <td>{defect.component}</td>

                <td>
                  <div className="d-flex align-items-center justify-content-around align-items-center">
                    <a href={defect.media.videoUrl}>
                      <img
                        className="tableIcon"
                        src={youTubeImg}
                        alt="Youtube Icon"
                      />
                    </a>
                    <a href={defect.media.blogUrl}>
                      <img
                        className="tableIcon"
                        src={blogImg}
                        alt="Youtube Icon"
                      />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TableComp;
