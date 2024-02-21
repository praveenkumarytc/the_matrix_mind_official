import React from "react";
import "../css/heading.css";
function Heading() {
  return (
    <div className="container">
      <div className="text-center card heading-card py-5">
        <span></span>
        <div className="">
          <h1 className="heading-ctnt">
            Unlimited web design <br />
            at a fixed monthly price
          </h1>
          <p className="heading-txt">
            Design and development requests for a fixed fee. <br />
            Pause or cancel at any time.
          </p>
          <button className="heading-btn rounded-pill">
            See Plans{" "}
            <i class="fa-solid fa-arrow-down ms-1"></i>
          </button>
        </div>
      </div>
      <div className="py-5">
        <hr />
        <div className="d-flex justify-content-between py-4">
          <div className="d-flex align-items-center justify-content-center">
            <i class="fa-brands fa-slack me-2 h3"></i>
            <h1>Snowflake </h1>
          </div>
          <div className="d-flex align-items-center justify-content-center">
          <i class="fa-brands fa-slack me-2 h3"></i>
            <h2>Colab</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center">
          <i class="fa-brands fa-slack me-2 h3"></i>
            <h2>Colab</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center">
          <i class="fa-brands fa-slack me-2 h3"></i>
            <h2>Colab</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center">
          <i class="fa-brands fa-slack me-2 h3"></i>
            <h2>Colab</h2>
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6 left-heading">
          <h3>About</h3>
          <h1>
            Whatever your <br />
            web needs, we're <br />
            here to help.
          </h1>
        </div>
        <div className="col-md-6 right-heading">
          <h4 className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            aliquid explicabo esse error placeat minima neque et molestias
            similique vero? Qui deserunt explicabo sapiente ipsa iste rerum
            quisquam nisi a. <br />
            <br />
            Ullam aspernatur quae voluptatem sunt ipsam atque nesciunt
            blanditiis, veniam molestiae id eveniet tempora sequi magnam
            consequuntur dicta quo dolor optio modi consequatur nulla ipsa
            nostrum? Dolor deserunt aspernatur sequi.
          </h4>
          <div className="row">
            <div className="col-md-6 project-detail">
              <h1>127 </h1>
              <p>Project done</p>
            </div>
            <div className="col-md-6 project-detail">
              <h1>87%</h1>
              <p>Chance of coffee</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 project-detail">
              <h1> 24</h1>
              <p>Team memebers</p>
            </div>
            <div className="col-md-6 project-detail">
              <h1>4.9</h1>
              <p>Average rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Heading;
