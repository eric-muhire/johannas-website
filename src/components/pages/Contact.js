import React from 'react';

function Contact() {
    return(
        <div>
        <section class="py-4 bg-info">
        <div className="container">
            <div className="row">
            <div className="color-4-my-auto">
                 <div className="card-body">
                    
                     <h4>Frågor & svar</h4>
                     </div>
                    <div className="col-md-8 my-auto">
                                         
                     </div>
                 </div>
                 </div>
                 </div>
                 </section>
                <section className="section"><br/><br/><br/><br/>

               
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                           
                            <div className="row">
                            <div className="col-md-6">
                            <h5>Kontakta mig</h5>
                            <hr />
                            <div className="form-group">
                                <label className="margin-bottom-1" for="">Ditt namn</label>
                                <input type="text" className="form-control" placeholder="Skriv in ditt namn"/>
                            </div>
                            <div className="form-group">
                                <label className="margin-bottom-1" for="">Telefonnummer</label>
                                <input type="text" className="form-control" placeholder="Skriv in ditt namn"/>

                            </div>
                            <div className="form-group">
                                <label className="margin-bottom-1" for="">E-mail Address</label>
                                <input type="text" className="form-control" placeholder="Skriv in ditt namn"/>
                            </div>
                            <div className="form-group">
                                <label className="margin-bottom-1">Meddelande</label>
                                <textarea rows="3" className="form-control" placeholder="Skriv in ditt meddelande"></textarea>
                            </div>
                            <div className="form-group">                            
                                <button type="button" className="btn btn-primary shadow width-100">Skicka meddelandet</button>
                            </div>

                            <div className="col-md-6">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                   
                    </section>
                    </div>
  
    );

}
export default Contact;