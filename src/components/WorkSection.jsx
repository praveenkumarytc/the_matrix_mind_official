import React from "react";
import "../css/work.css"
function WorkSection () {
    return (
        <div className="container">
            <div className="work-heading">
              <p className="h4 fw-bold">Work</p>
              <h1 className="fw-bolder">Stuff we've worked on.</h1>
            </div>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
            </div>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
            </div>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
            </div>
            <div className="">
                <button className="heading-btn">See All Work</button>
            </div>
        </div>
    )
};
export default WorkSection;