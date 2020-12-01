import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './PopOverMyCircle.css';
import PublicIcon from '@material-ui/icons/Public';
import MyCircleItem from '../MyCircleItem/MyCircleItem';
import avatar from '../../img/avatar.png';
import { ChevronRightSharp } from '@material-ui/icons';

const PopOverMyCircle = ({ id }) => {
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
              <PublicIcon className="public" /> My Circle
            </div>
            <span className="text-primary">25</span>
          </div>
        </PopoverHeader>
        <PopoverBody>
          <div className="items">
            <MyCircleItem avatar={avatar} name="Simon Kathich" />
            <MyCircleItem avatar={avatar} name="Jhon Doe" />
            <MyCircleItem avatar={avatar} name="Jonathon Smedtman" />
            <MyCircleItem avatar={avatar} name="Json Roy" />
            <MyCircleItem avatar={avatar} name="Brendon Macculam" />
            <MyCircleItem avatar={avatar} name="David Hussy" />
            <MyCircleItem avatar={avatar} name="Eion Morgan" />
            <MyCircleItem avatar={avatar} name="Tom Banton" />
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

export default PopOverMyCircle;
