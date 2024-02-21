import React from "react";
import "../css/help.css"
import Services from "./Services";
function Help () {
    return (
        <div>
        <div className="container card card-color py-5 ps-4">
            <div className="my-title">
                <p>Who it's for</p>
                <h1>The kind of item's <br />we help</h1>
            </div>
            <div className="row py-5">
                <div className="col-md-4 card-heading-content">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <h3>For Startups</h3>
                   <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur eveniet exercitationem repudiandae, amet maxime aperiam. Eveniet obcaecati, repellendus a natus facere debitis tempore magnam quod culpa exercitationem deleniti ad.</p>
                </div>
                <div className="col-md-4 card-heading-content">
                  <i class="fa-solid fa-pen-to-square"></i>                    <h3>For Startups</h3>
                   <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur eveniet exercitationem repudiandae, amet maxime aperiam. Eveniet obcaecati, repellendus a natus facere debitis tempore magnam quod culpa exercitationem deleniti ad.</p>
                </div>
                <div className="col-md-4 card-heading-content">
                <i class="fa-solid fa-bullhorn"></i>
                    <h3>For Startups</h3>
                   <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur eveniet exercitationem repudiandae, amet maxime aperiam. Eveniet obcaecati, repellendus a natus facere debitis tempore magnam quod culpa exercitationem deleniti ad.</p>
                </div>
                {/* <div className="com-md-4">
                  
                    <h3>For Startups</h3>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, tenetur repellat consequuntur explicabo consectetur temporibus provident ipsam error sapiente adipisci est? Corrupti a quasi laboriosam qui assumenda veritatis molestias laudantium!</p>
                </div>
                <div className="com-md-4">
                <span class="material-symbols-outlined">
                  favorite
                </span>
                <h3>For Startups</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, tenetur repellat consequuntur explicabo consectetur temporibus provident ipsam error sapiente adipisci est? Corrupti a quasi laboriosam qui assumenda veritatis molestias laudantium!</p>
                </div>
                <div className="com-md-4">
                <span class="material-symbols-outlined">
                  favorite
                </span>
                <h3>For Startups</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, tenetur repellat consequuntur explicabo consectetur temporibus provident ipsam error sapiente adipisci est? Corrupti a quasi laboriosam qui assumenda veritatis molestias laudantium!</p>
                </div> */}
            </div>
        </div>
        <Services />
        </div>
    )
};
export default Help;