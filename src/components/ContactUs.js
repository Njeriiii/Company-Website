import React from "react"
import { Link } from 'react-router-dom';
import MainMenu from "./MainMenu";

class ContactUs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <><><div>
          <MainMenu />
          <h2 id="PageHeading"> Contact Us</h2>
          <h5 textAlign="left"> Use the following details to get in touch with us:</h5>

          <p>
            FullBloom Insurance Agency Ltd.,<br />
            Standard Building, Wabera Street,<br />
            P. O. Box 102163-00101,<br />
            Tel: +254 20 3344064,<br />
            Mobile: +254 703327174, +254 729588613, +254 727205832,<br />
            Fax: +254 20 3344064,<br />
            Nairobi, Kenya<br />
          </p>
        </div>
          <div className="App">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br></br>
            <a href="https://www.google.com/maps/place/Standard+Building/@-1.2855878,36.8169336,16z/data=!4m5!3m4!1s0x182f10d6f038e9e1:0x40f6ec8000897b19!8m2!3d-1.2851294!4d36.8217156">
              <img src={require("/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/maps-2.png")} width="800px"  alt="example" />
            </a>
          </div></>

          
          </> 
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(event) {
    }
  }
  
  export default ContactUs;



            {/* <div>
                <iframe src=
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815175613867!2d36.819444950484964!3d-1.2848486359827787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6f02910f1%3A0xfbe2fe03ae590adc!2sFullbloom%20Insurance%20Agency%20Ltd!5e0!3m2!1sen!2sus!4v1657904779966!5m2!1sen!2sus" 
                width="800" height="600" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div> */}



            // export const ContactUs = () =>

            // {   
            // return (
            //     <div>
            //         <MainMenu/>
            //         <h2 id="PageHeading"> Contact Us</h2>
            //         <h5> Use the following details to get in touch with us:</h5>
            
            //         <p>
            //                 FullBloom Insurance Agency Ltd.,<br/>
            //                 Standard Building, Wabera Street,<br/>
            //                 P. O. Box 102163-00101,<br/>
            //                 Tel: +254 20 3344064,<br/>
            //                 Mobile: +254 703327174, +254 729588613, +254 727205832,<br/>
            //                 Fax: +254 20 3344064,<br/>
            //                 Nairobi, Kenya<br/>
            //         </p>
            // </div>
            //     )
            // }