import React from 'react';
import { inject, observer } from 'mobx-react';
import ModalDialogue from './ModalDialog';

const Member = ({ id, name, tz, i, openModal, store }) => {
  const { isOpen } = store;
  return (
    <li className="list-group-item ">
      <div className="row w-100">
        <div className="col-4 px-0">
          <img
            src="http://demos.themes.guide/bodeo/assets/images/users/w104.jpg"
            alt="Debbie Schmidt"
            className="img-fluid rounded-circle d-block mx-auto"
          />
        </div>
        <div className="col-4 text-center text-sm-left">
          <label className="name lead">{name}</label>
          <br />

          <span
            className="fa fa-fw fa-map-marker fa-fw text-muted"
            data-toggle="tooltip"
            title=""
            data-original-title="timeZone"
          ></span>
          <span className="text-muted">{tz}</span>
          <br />

          <span
            className="fa fa-fw fa-phone fa-fw text-muted"
            data-toggle="tooltip"
            title=""
            data-original-title="(867) 322-1852"
          ></span>
          <span className="text-muted small">{id}</span>
          <br />
        </div>
        <div className="col-4 my-auto">
          <ModalDialogue key={id} isOpen={isOpen[i] || false} i={i} />
          <button className="btn btn-primary" onClick={() => openModal(i)}>
            Check Availability
          </button>
        </div>
      </div>
    </li>
  );
};
export default inject('store')(observer(Member));
