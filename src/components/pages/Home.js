import React from 'react';

import Slider from '../includes/Slider';
import {Link} from 'react-router-dom';
import VisionMission from './includes/VisionMission';
import service1 from '../images/service1.png';


function Home() {
    return(
         <div>
            <Slider/>

              <section className="section">
                  <div className="container">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <h3 className="main-heading">Fokusområden</h3>
                          <div className="underline mx-auto"></div>
                          <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the c ites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum"
            </p>
                <Link to="/about" className="btn btn-warning shadow">Läs mer</Link>
                      </div>
                      </div>

                  </div>
                </section>
                {/*Skönhet, Hälsa och Välmående */}
                
                <VisionMission/>
                

                {/*vår produkter */}
                <section className="section bg-c-light border-top">
        <div className="container">
        <div className="row">
            <div className="col-md-12 md-4 ">
                <h3 className="main-heading">Produkter</h3>
                <div className="underline mx-auto-left"></div>
   
            </div>
            <div className="col-md-4 ">
               
                <div className="card shadow">
                
                   <div className="card-body">
                       <img src={service1} className="w-100 border-botom" alt="Services" />
                   <h6>Om produkter</h6>
                   <div className="underline"></div>
                   <p>
                   Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literatur
                   </p>

                   
                      <Link to="/products" className="btn btn-link">Läsmer</Link>
                       
                   </div> 
                </div>
            

            </div>
            </div>
            </div>
            
      </section>


        </div>
    
);

}
export default Home;