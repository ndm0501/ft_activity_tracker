import React from "react"
import Calendar from "react-calendar"
import {Popover, OverlayTrigger} from "react-bootstrap"
import utils from "../utils/utils"
import "react-calendar/dist/Calendar.css"
import "./ActivityLog.css"

const ActivityLog = ({startTime, endTime, i}) => {
  let dateList = utils.getDateList(
    utils.formatDate(startTime),
    utils.formatDate(endTime)
  )
  return (
    <>
      <div className="col-4 my-2">
        <div>{startTime}</div>
      </div>
      <div className="col-4 my-2">
        <div>{endTime}</div>
      </div>
      <div className="col-4 my-2">
        <div>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Popover id={"popover-" + i}>
                <Popover.Title as="h3">Calendar</Popover.Title>
                <Popover.Content>
                  <Calendar
                    activeStartDate={utils.formatDate(startTime)}
                    tileClassName={({date}) => {
                      if (dateList.find((x) => date.getTime() === x.getTime())) {
                        return "calendar"
                      }
                    }}
                  />
                </Popover.Content>
              </Popover>
            }
          >
            {({ref, ...triggerHandler}) => (
              <div
                variant="light"
                {...triggerHandler}
                className="btn btn-outline-dark"
              >
                See Calendar
                <div ref={ref}></div>
              </div>
            )}
          </OverlayTrigger>
        </div>
      </div>
    </>
  )
}
export default ActivityLog
