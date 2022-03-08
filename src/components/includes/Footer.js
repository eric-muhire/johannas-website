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
                <h6>Snabba länkar</h6>
                <hr/>
                <div><Link to="/">Hem</Link></div>
                <div><Link to="/about">Om</Link></div>
                <div><Link to="/contact">Frågor & Svar</Link></div>
                </div>
                
            <div className="col-md-4 ">
                <h6>Kontakt Information</h6>
                <hr/>
                <div><p className="text-white mb-1">Nödinge</p></div>
                <div><p className="text-white mb-1">+4673444</p></div>
                <div><p className="text-white mb-1">e.muhire24@gmail.com</p></div>
                
         
               
                </div>
                </div>
                </div>
                <div>
                    <p class="copyright">copyright &copy; 2022 Muhire. All Rights Reserved<span id="curYr"></span>

                    </p>
                </div>
                <script>
                    var date = new Date();
                    var year = date.getFullYear();
                    document.getElementById('curYr').innerHTML = year;
                    
                    </script>
                </section>
              
             

    );
}

export default Footer;