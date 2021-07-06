import React,{useState,useEffect} from 'react'
import {Modal,Button} from 'react-bootstrap'
function Payment({togglerButton,order,showModal=false,showStatus}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            {togglerButton &&
                        <span  onClick={handleShow}>{togglerButton()}</span>

            }
    
      <Modal show={show ||showStatus} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Payment Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card">
            <div className="card-header">
                Select payment Options
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Payment
