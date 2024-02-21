import React from "react";
import "../css/plans.css"
import Cards from "./Cards";
function Plans () {
    return (
        <div className="container py-5 plans-container card">
            <div className="pb-5 plans-heading">
               <p>Plans</p>
                <h1>Let's get this ball <br />on the roll.</h1>
            </div>
            <Cards />
        </div>

    )
};
export default Plans;