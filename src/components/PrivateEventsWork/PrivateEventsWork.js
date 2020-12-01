import React from 'react';
import './PrivateEventsWork.css';

const PrivateEventsWork = () => {
  return (
    <div className="privateEventsWork">
      <div className="container my-5">
        <h4>How does it work?</h4>
        <div className="row my-4">
          <div className="col-md-4">
            <div className="work-wrapper">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/search.png"
                alt=""
              />
              <p>
                Great for any occasion - Birthday parties, bachelorette,
                corporate team building & more.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-wrapper">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/chat-message-sent.png"
                alt=""
              />
              <p>
                Customize to your taste - choose the menu, pick the host's place
                or a premium third party location.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-wrapper">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/checked.png"
                alt=""
              />
              <p>
                Great for any occasion - Birthday parties, bachelorette,
                corporate team building & more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsWork;
