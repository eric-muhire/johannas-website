import React from 'react';
import {Link} from 'react-router-dom'


function Footer(){
    return(
        
        <section className="section footer bg-dark text-white">
        <div className="container">
        <div className="row">
            <div className="col-md-4 ">
                <h6>Kontaktupgiter</h6>
                <hr/>
                <p className="text-white">
                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of 
                </p>
                </div>
 
          
            <div className="col-md-4 ">
                <h6>Quick links</h6>
                <hr/>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/">Contact</Link></div>
                </div>
                
            <div className="col-md-4 ">
                <h6>Kontakt Information</h6>
                <hr/>
                <div><p className="text-white mb-1">#Nödinge</p></div>
                <div><p className="text-white mb-1">#+4673444</p></div>
                <div><p className="text-white mb-1">#e.muhire24@gmail.com</p></div>
                
        
               
                </div>
                </div>
                </div>

                </section>
             

    );
}

export default Footer;