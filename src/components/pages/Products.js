import React from 'react';
import Produkterna from './includes/Produkterna';

function Products() {
    return(
        <div className="content-container">
        <section class="py-4 bg-info">
        <div className="container">
        <div className="row">
        <div className="col-md-12 text-center">
        <div className="color-4-my-auto">
        <div className="card-body">
        <h4>Forever Living</h4>
        </div>
        <div className="col-md-8 my-auto"></div>
        </div>
        </div>
        
        </div> 
        </div>
        </section>
        <Produkterna/>
        </div>
            
    );

}
export default Products;