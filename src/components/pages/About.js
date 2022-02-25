import React from 'react';
import VisionMission from './includes/VisionMission';

function About() {
    return(
        <div>
            <section className="py-4 bg-info">
            <div className="container">
            <div className="row">
                 <div className="col-md-4 my-auto">
                 <h4>Om mig</h4>
                     </div>
                    <div className="col-md-8 my-auto">
                    <h6 className="float-end">
                      
                        </h6>                       
                     </div>
                 </div>
                 </div>
                 </section>
                 <section className="section bg-c-light border-bottom">
                     <div className="container">
                         <h5 className="main-heading">Our Company</h5>
                         <div className="underline"></div>
                         <p>dfsmlsdkfskldflskdsd</p>
                     </div>
                 </section>
                 <VisionMission/>
                
            </div>
    );

}
export default About;