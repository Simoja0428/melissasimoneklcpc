import "./AboutPanelStyles.css";
import React from 'react';
import Melissa from "../assets/melissa.jpeg";

const AboutPanel = () => {
  return (
        <div>
            <div className="ab-panel">
                <div className="org-all">
                    <div className="org-h">
                        <h2 className="title-h"> Hours: </h2>
                        <p className="hs"> Monday:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;10:00am - 8:00pm <br/>
                            <br/>
                            Tuesday:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;10:00am - 8:00pm <br/>
                            <br/>
                            Wednesday:&emsp;&emsp;&emsp;&emsp;10:00am - 8:00pm <br/>
                            <br/>
                            Thursday:&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;10:00am - 8:00pm <br/>
                        </p>
                    </div>
                    <div className= "org-add">
                        <h2 className="addy-h"> Address: </h2>
                        <p className="address">
                            11516 183rd pl, suite NE, Orland Park, IL. 60467
                        </p>
                    </div>
                </div>
                <div className="info-pan">
                    <div className="bio-pan">
                        <h2> What do we do???</h2>
                    </div>
                    <div className="who-we-are">
                        <p>Melissa Simonek LCPC, is a therapeutic practice based out of Orland Park
                        that focuses on providing exceptional mental health services to the residents of Southwest
                        Suburban Chicago! We offer a variety of services for adolescents and adults in an effort
                        to cater to the specific needs of our clients! We have experience working with a variety of
                        clients in different settings including, but not limited to: in-office visits, telehealth visits,
                        on-site school visits, on-site corporate visits, on-site law enforcement training, and on-site
                        visits to incarcerated individuals. We believe mental health services should be accessible to
                        everyone and strive to make that possible!</p>
                    </div>
                    <div className="bio-pan">
                        <h2> Who are we???</h2>
                    </div>
                    <div className="bio-title">
                        <img src= {Melissa} alt="bio-photo" className="bio-photo"></img> 
                        <p className="bio-name"> Melissa Simonek (Licensed Clinical Professional Counselor)</p>
                    </div>
                    <div className="bio"> <p> Melissa Simonek is a long time resident of the Southwestern Suburbs. Melissa moved
                        to Homer Glen Illinois in 1977 and has been a resident of the area ever since. After
                        spending more than 20 years living in Orland Park, Melissa moved back to Homer Glen in
                        2022 to pursue her ambitions of opening her own private practice. Melissa attended
                        Lockport Township Highschool before pursuing her BA at Governors' State University and her
                        MA in Clincial Mental Health Counseling at Lewis University. In her spare time, Melissa 
                        enjoys relaxing in warm weather and travelling. Whether its the mountains of Wyoming
                        or the beaches of Florida, Melissa loves to travel and experience new things with her
                        family! Melissa loves sharing her experiences with her longtime partner, two kids, dog, and 
                        two cats that continually remind her why she loves providing mental health services to everyday people.
                    </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutPanel;