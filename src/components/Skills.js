import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
export default class Skills extends Component {
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
              <strong>PROFESSION SKILLS</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>HTML</p>
                <div className="progress grey lighten-1">
                  <div className="determinate pink lighten-3" style={{width: "90%"}}></div>
                </div>
              </div>
              <div className="col s6">
                <p>JAVASCRIPT</p>
                <div className="progress grey lighten-1">
                  <div className="determinate pink lighten-3" style={{width: "70%"}}></div>
                </div>
              </div>
              <div className="col s6">
                <p>CSS</p>
                <div className="progress grey lighten-1">
                  <div className="determinate pink lighten-3" style={{width: "80%"}}></div>
                </div>
              </div>
              <div className="col s6">
                <p>JQUERY</p>
                <div className="progress grey lighten-1">
                  <div className="determinate pink lighten-3" style={{width: "50%"}}></div>
                </div>
              </div>
              <div className="col s6">
                <p>PHP</p>
                <div className="progress grey lighten-1">
                  <div className="determinate pink lighten-3" style={{width: "75%"}}></div>
                </div>
              </div>
              <div className="col s6">
                <p>MySQL</p>
                <div className="progress grey lighten-1">
                  <div className="determinate pink lighten-3" style={{width: "55%"}}></div>
                </div>
              </div>
            </div>
          </div>  
        </div>    
        </div>
      </div>
      </div>
      </section>
     
    );
  }
}
