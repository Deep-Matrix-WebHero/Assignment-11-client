import React, {useState} from "react";
import {Button, Collapse} from "react-bootstrap";
import "./Sport.css";

const Sports = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <h4 className="text-success"> You Can Try</h4>
        <h1>Winter Sports</h1>
      </div>
      <div className="sport-video">
        <iframe
          width="720"
          height="320"
          src="https://www.youtube.com/embed/wqbrXVTvMjY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="py-3">
        <p>
          A resort from the valley station of Zermatt's Sunnegga Cable Car, a
          lift takes you directly to the reception of the CERVO Mountain Resort,
          located right next to the ski slopes and hiking trails. Zermatt Train
          Station is a 10-minute walk away. The property boasts 3 restaurants
          and a spa.{" "}
        </p>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          ReadMore
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            The CERVO consists of 7 units with spacious rooms and suites. Every
            unit features its own wellness area with a sauna, steam bath,
            terrace, massage room, and relaxation room with an open fireplace.
            The terrace offers panoramic views of the Matterhorn Mountain..
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Sports;
