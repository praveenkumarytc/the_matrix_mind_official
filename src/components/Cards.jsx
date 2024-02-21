import React from "react";
import "../css/cards.css";
function Cards() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card border-0 px-4 plans-card">
            <h1>Basic</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            </p>
            <br />
            <p>Monthly price</p>
            <p>
              <span>$</span>4995
            </p>
            <span>Pause or cancel anytime</span>
            <button className="plans-btn">Get Started</button>
            <div>
              <p>Includes</p>
              <span>✔</span>
              <p>Responsive one page website</p>
              <span>✔</span>
              <p>Fully custom design</p>
              <span>✔</span>
              <p>Illustrations</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 px-4 plans-card">
            <h1>Basic</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            </p>
            <br />
            <p>Monthly price</p>
            <p>
              <span>$</span>4995
            </p>
            <span>Pause or cancel anytime</span>
            <button className="plans-btn">Get Started</button>
            <div>
              <p>Includes</p>
              <span>✔</span>
              <p>Responsive one page website</p>
              <span>✔</span>
              <p>Fully custom design</p>
              <span>✔</span>
              <p>Illustrations</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 px-4 plans-card">
            <h1>Basic</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            </p>
            <br />
            <p>Monthly price</p>
            <p>
              <span>$</span>4995
            </p>
            <span>Pause or cancel anytime</span>
            <button className="plans-btn">Get Started</button>
            <div>
              <p>Includes</p>
              <span>✔</span>
              <p>Responsive one page website</p>
              <span>✔</span>
              <p>Fully custom design</p>
              <span>✔</span>
              <p>Illustrations</p>
            </div>
            {/* <Cards /> */}
          </div>
        </div>
      </div>

      {/* 

            <h1>Basic</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            </p>
            <br />
            <p>Monthly price</p>
            <p><span>$</span>4995</p>
            <span>Pause or cancel anytime</span>
            <button className="rounded-pill">Get Started</button>
            <div>
                <p>Includes</p>
                <span>✔</span><p>Responsive one page website</p>
                <span>✔</span><p>Fully custom design</p>
                <span>✔</span><p>Illustrations</p>
            </div> */}
    </div>
  );
}
export default Cards;
