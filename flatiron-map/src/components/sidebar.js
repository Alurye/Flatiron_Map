import React from 'react';
import ReservationForm from './reservation_form';

const Sidebar = (props) => {
  return(
    <aside>

      <ReservationForm rooms={props.rooms} />

    </aside>
  );
}

export default Sidebar;
