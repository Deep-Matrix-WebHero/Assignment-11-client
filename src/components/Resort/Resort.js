import React from "react";
import {Button} from "react-bootstrap";
import "./Resort.css";
const Resort = () => {
  return (
    <>
      <div className="my-5 py-5 bg-success">
        <h5 className="text-center text-white">Choose Your</h5>
        <h1>Resorts</h1>
        <h3>
          <b>Berghotel Randolins</b>
        </h3>
        <p>
          Situated high above St. Moritz on the famous Suvretta hillside, the
          Berghotel Randolins can be found right at the ski slopes and hiking
          trails. It features a wellness area with panoramic views. A free
          regular shuttle service from and to the train station and the village
          centre is available. On-site parking is provided free of charge.
        </p>
      </div>

      <div className="row resort py-5">
        <div className="col-lg-4 col-sm-12">
          <img
            className="resort-image"
            src="https://i.ibb.co/59BcV59/winter-1.jpg"
            alt=""
          />
          <h4 className="text-center text-success m-3">Winter</h4>
          <Button className="mb-4" variant="outline-success">
            View details
          </Button>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img
            className="resort-image"
            src="https://i.ibb.co/tKPHDY6/summer-1.jpg"
            alt=""
          />
          <h4 className="text-center text-success m-3">Summer</h4>
          <Button className="mb-4" variant="outline-success">
            View details
          </Button>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img
            className="resort-image"
            src="https://i.ibb.co/DgNdMnm/rainy-1.jpg"
            alt=""
          />
          <h4 className="text-center text-success m-3">Rainy</h4>
          <Button className="mb-4" variant="outline-success">
            View details
          </Button>
        </div>
      </div>
    </>
  );
};

export default Resort;
// https://i.ibb.co/DgNdMnm/rainy-1.jpg
// https://i.ibb.co/tKPHDY6/summer-1.jpg
// https://i.ibb.co/59BcV59/winter-1.jpg
