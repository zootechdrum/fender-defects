import React from "react";
import { Table } from "react-bootstrap";
import "./style.css";
import blogImg from "../../images/defectImg/2110.jpg";

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
          <tr key={defect._id}>
            <td>{defect.errorCode}</td>
            <td>{defect.title}</td>
            <td width="450">{defect.description}</td>
            <td>{defect.component}</td>

            <td>
              <div className="d-flex align-items-center justify-content-around align-items-center">
                <a href={defect.media.blogUrl}>
                  {defect.image ? (
                    <img
                      className="tableIcon"
                      src={require("../../images/defectImg/2110.jpg")}
                      alt="Youtube Icon"
                    />
                  ) : (
                    <h2>hello</h2>
                  )}
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComp;
