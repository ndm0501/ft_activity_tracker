import React from "react"
import {Modal, Button} from "react-bootstrap"
import {inject, observer} from "mobx-react"
import ActivityLog from "./ActivityLog"

const ModalDialogue = ({store, id, isOpen, i}) => {
  const {closeModal, members} = store

  return (
    <Modal size="lg" show={isOpen} onHide={() => closeModal(i)} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Activity Log</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container my-3">
          <div className="row my-2">
            <div className="col-4">
              <h5>Start Time</h5>
            </div>
            <div className="col-4">
              <h5>End Time</h5>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row my-3">
            {members[i].activity_periods.map((period, i) => (
              <ActivityLog
                startTime={period.start_time}
                endTime={period.end_time}
                key={Math.random()}
                i={i}
              />
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(i)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default inject("store")(observer(ModalDialogue))
