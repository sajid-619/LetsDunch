import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './PopOverMyCircle.css';
import { ChevronRightSharp } from '@material-ui/icons';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MyDunchItem from '../MyDunchItem/MyDunchItem';
import one from '../../img/popular-one.jpg';
import two from '../../img/popular-six.jpg';
import three from '../../img/popular-five.jpg';
import four from '../../img/popular-four.jpg';
import five from '../../img/popular-three.jpg';

const PopOverMyDunch = ({ id }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Popover
        style={{ zIndex: 50001 }}
        placement="bottom"
        isOpen={popoverOpen}
        target={id}
        toggle={toggle}
      >
        <PopoverHeader>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <EventNoteIcon className="public" /> My Dunch
            </div>
            <span className="text-primary">5</span>
          </div>
        </PopoverHeader>
        <PopoverBody>
          <div className="items">
            <MyDunchItem
              title="Not-So-Secret Family Recipes"
              date="20 march 2020"
              when="Today"
              color="text-primary"
              image={one}
            />
            <MyDunchItem
              title="Red Table Talk Group"
              date="5 march 2020"
              when="5 days to go"
              color="text-primary"
              image={two}
            />
            <MyDunchItem
              title="Rock(Climb)!"
              color="text-secondary"
              date="1 march 2020"
              image={three}
            />
            <MyDunchItem
              title="Weekend Trips"
              date="27 march 2020"
              color="text-secondary"
              image={four}
            />
            <MyDunchItem
              title="Table Talk"
              date="14 march 2020"
              color="text-secondary"
              image={five}
            />
          </div>
          <hr />
          <p className="text-center see-all text-primary">
            See all <ChevronRightSharp />
          </p>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default PopOverMyDunch;
