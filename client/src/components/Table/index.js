import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import "./style.css";
import picImg from "../../images/img.png";

function TableComp(props) {
  const [show, setShow] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalImg, setModalImg] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    console.log(e.target.getAttribute("data-image"));
    setmodalTitle(e.target.getAttribute("data-title"));
    setModalImg(e.target.getAttribute("data-image"));

    setShow(true);
  };

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
                    <div>
                      <img
                        onClick={handleShow}
                        data-title={defect.title}
                        data-image={defect.image}
                        className="tableIcon"
                        src={picImg}
                        alt="Youtube Icon"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img
              className="def-image text-center"
              src={modalImg}
              alt="Defect image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Table>
  );
}

export default TableComp;
