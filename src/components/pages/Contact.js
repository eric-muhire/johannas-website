import React from "react";
import { useState } from "react";


function Contact() {
 const initialValues = { namn: "", telefon: "", email: "", meddelande: ""};
 const[formValues, setFormValues] = useState(initialValues);

 const handleChange = (e)=>{
     const { namn, value} = e.target;
     setFormValues({ ...formValues, [namn]:value});
  
     

 };
 const handleSubmit = (e) =>{
     e.preventDefault();

 };
    return(
        <div
        style={{ backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
        
        backgroundPosition: "center",
        backgroundSize: "cover",}}>
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
                            <pre>{JSON.stringify(formValues)}</pre>
                            <form onSubmit = {handleSubmit}>
                            <hr />
                        
                            <div className="form-group">
                                <label className="margin-bottom-1"  for="">Ditt namn</label>
                                <input type="text" name="namn" className="form-control" placeholder="Skriv in ditt namn" value={ formValues.namn} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label className="margin-bottom-1" for="">Telefonnummer</label>
                                <input type="text" name="telefon" className="form-control" placeholder="Telefonnummer" value={formValues.telefon} onChange={handleChange}/>

                            </div>
                            <div className="form-group">
                                <label className="margin-bottom-1" for="">E-mail </label>
                                <input type="email" name="email"className="form-control" placeholder="E-mail Address" value={formValues.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label className="margin-bottom-1">Meddelande</label>
                                <textarea rows="3" name="meddelande" className="form-control" placeholder="Skriv in ditt meddelande" value={formValues.meddelande} onChange={handleChange}></textarea>
                            </div>
                            <div className="form-group">                            
                                <button type="button" className="btn btn-primary shadow width-100">Skicka meddelandet</button>
                            </div>

                            <div className="col-md-6">
                                
                            </div>
                            </form>
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