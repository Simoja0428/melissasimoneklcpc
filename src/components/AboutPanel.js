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
                        <p className="hs"> Monday:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;10:00am - 8:00pm <br/>
                            <br/>
                            Tuesday:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;10:00am - 8:00pm <br/>
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
                        <h2> What do I do???</h2>
                    </div>
                    <div className="who-we-are">
                        <p>Melissa Simonek LCPC, is a therapeutic practice based out of Orland Park
                        that focuses on providing exceptional mental health services to the residents of Southwest
                        Suburban Chicago! I offer a variety of services for adolescents and adults in an effort
                        to cater to the specific needs of my clients! I have experience working with a variety of
                        clients in different settings including, but not limited to: in-office visits, telehealth visits,
                        on-site school visits, on-site corporate visits, and on-site law enforcement training.  
                        I believe mental health services should be accessible to everyone and strive to make that possible!</p>
                    </div>
                    <div className="bio-pan">
                        <h2> Who am I???</h2>
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
                        MA in Clincial Mental Health Counseling at Lewis University. Melissa has a wide array 
                        of experiences with different diagnoses from working at previous therapeutic practices. Melissa
                        offers a diverse variety of different theraputic services such as: therapy for families,
                        parenting education, and marriage counseling. Melissa was trained in the Gottman model of psychology, she is grounded 
                        in a cognitive behavioral mode and additionally she emphasizes the formation of sound 
                        therapeutic relationships where individuals are valued and helped to aspire to their full potential.

                    </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutPanel;