import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
export default class Experiences extends Component {
  render() {
    return (
      <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3">
            <Profile />
          </div>
          <div className="col s12 m8 l9">
         <div className="card">
            <div className="card-content">
              <h6 className="mt-button">
                <strong>EXPERIENCES</strong> <hr/>
                <div className="row">
                  <div className="col s12 m4 l4 xl4">
                    <p className="pink lighten-3 year_exp white-text">
                      Jan <strong>2016</strong> - March <strong>2017</strong>
                    </p>
                  </div>
                  <div className="col s12 m8 l8 xl8">
                    <blockquote className="no-pad"> 
                      <h6 className="no-pad mt-button">
                        <strong>DESIGNER</strong>
                      </h6>
                      <p>
                      Hi ! My name is Thanh and I am 21 years old.
                      I am from Danang. 
                      I have experience in web design in which I am good at front end and back end, I am a cheerful person with everyone.
                      If I work at your company I will do my best
                      </p>
                    </blockquote>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m4 l4 xl4">
                    <p className="pink lighten-3 year_exp white-text">
                      Jan <strong>2016</strong> - March <strong>2017</strong>
                    </p>
                  </div>
                  <div className="col s12 m8 l8 xl8">
                    <blockquote className="no-pad"> 
                      <h6 className="no-pad mt-button">
                        <strong>WEB DEVELOPMENT</strong>
                      </h6>
                      <p>
                      Hi ! My name is Thanh and I am 21 years old.
                      I am from Danang. 
                      I have experience in web design in which I am good at front end and back end, I am a cheerful person with everyone.
                      If I work at your company I will do my best
                      </p>
                    </blockquote>
                  </div>
                </div>
              </h6>
            </div>  
         </div>
         </div>
      </div>
      </div>
      </section>
    );
  }
}
