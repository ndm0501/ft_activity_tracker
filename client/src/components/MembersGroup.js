import React from "react"
import {Member} from "../components"
import {inject, observer} from "mobx-react"

const MemberGroup = ({store}) => {
  const {members, setIsOpen} = store
  const openModal = (index) => {
    setIsOpen(index)
  }

  return (
    <div className="container my-4">
      <h1 className="text-center">Our Members</h1>
      <div className="card card-default" id="card_contacts">
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul
            className="list-group pull-down d-flex justify-content-center"
            id="contact-list"
          >
            {members && members.length ? (
              members.map((member, i) => (
                <Member
                  key={member.id}
                  name={member.real_name}
                  id={member.id}
                  tz={member.tz}
                  i={i}
                  openModal={openModal}
                />
              ))
            ) : (
              <h1>Member data not available</h1>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default inject("store")(observer(MemberGroup))
