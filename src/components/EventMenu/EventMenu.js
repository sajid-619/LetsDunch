import React, { useState } from 'react';
import './EventMenu.css';

const EventMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="eventMenu">
      <h5 className="menu">Menu</h5>
      <div className="menu-box">
        <p className="menu-subtitle">mezethes</p>
        <h3 className="menu-title">
          An assortment of traditional Greek dips and other traditional nibbles.
        </h3>
        <hr />
        <p className="menu-subtitle">First Course</p>
        <h3 className="menu-title">
          This small plate will be inspired by the season and market offerings
          of the day.
        </h3>
        <hr />

        {show && (
          <div>
            <p className="menu-subtitle">Goddess Salad</p>
            <h3 className="menu-title">
              Arugula, dates, feta and pomegranate.
            </h3>
            <hr />
            <p className="menu-subtitle">Chicken youvetsi</p>
            <h3 className="menu-title">
              Slowly braised chicken served over orzo pasta — chef’s favorite
              Greek comfort food.
            </h3>
            <hr />

            <h3 className="menu-title">Vegetarian Entree</h3>
            <p className="menu-subtitle">
              A special vegetarian entree for non-meat eating guests. Just
              indicate when you book this dinner.
            </p>

            <hr />
            <p className="menu-subtitle">Dessert</p>
            <h3 className="menu-title">
              A sweet treat you'll want to save room for.
            </h3>
            <hr />
            <h3 className="menu-title">Drinks & Beverages</h3>
            <p className="menu-subtitle">Guests can bring alcohol</p>
          </div>
        )}

        <p onClick={() => setShow(!show)} id="readMore">
          {show ? 'Read less' : 'Read more'}
        </p>
      </div>
    </div>
  );
};

export default EventMenu;
