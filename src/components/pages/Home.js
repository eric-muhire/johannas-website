import React from 'react';

import Slider from '../includes/Slider';
import {Link} from 'react-router-dom';
import VisionMission from './includes/VisionMission';

function Home() {
    return(
         <div>
            <Slider/>

              <section className="section">
                  <div className="container">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <h3 className="main-heading">Our company</h3>
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
                <Link to="/about" className="btn btn-warning shadow">Read more</Link>
                      </div>
                      </div>

                  </div>
                </section>
                {/*Our vision, mission and values */}
                
                <VisionMission/>
        </div>
    
);

}
export default Home;