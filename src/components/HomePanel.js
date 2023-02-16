import "./HomePanelStyles.css";
import React from 'react';
import Office from "../assets/office.jpeg";

const HomePanel = () => {
  return (
    <div className="home-panel">
        <div className="home-info">
            <div className="welcome-panel-outer">
                <div className="welcome-panel-inner">
                    <h1 className="wel"> Hello and Welcome! </h1>
                    <p className="welcome"> Welcome to Melissa Simonek LCPC! I am a Licensed Clinical Professional Counselor 
                    based out of Orland Park that focuses on providing exceptional mental health services to the residents 
                    of the Southwest Suburbs and in Chicagoland. I offer a variety of services for adolescents and adults 
                    in an effort to taylor to the specific needs of my clients!
                    </p>
                </div>
            </div>
            <div className="org-hours">
                <h2 className="hours-title"> Hours: </h2>
                <p className="hours"> Monday:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;10:00am - 8:00pm <br/>
                    <br/>
                    Tuesday:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;10:00am - 8:00pm <br/>
                    <br/>
                    Wednesday:&emsp;&emsp;10:00am - 8:00pm <br/>
                    <br/>
                    Thursday:&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;10:00am - 8:00pm <br/>
                </p>
            </div>
        </div>
        <div className="mask"> <img src= {Office} alt="office" className="office"></img> </div>
    </div>
  )
}

export default HomePanel;