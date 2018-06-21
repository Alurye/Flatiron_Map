import React from 'react';
import ReservationForm from './reservation_form';
import Schedule from './schedule.js';

const Sidebar = (props) => {
  console.log("siddebar level", props.events)
  return(
    <aside>
      {props.showForm ? <ReservationForm rooms={props.rooms} /> : null}
      <Schedule events={props.events} />
    </aside>
  );
}

export default Sidebar;
