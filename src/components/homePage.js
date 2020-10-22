import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-user-check icon"></i>Career Objective
              </strong>
              <hr />
              <div className="row">
                <div className="">
                  <p> - Help the company thrive.</p>
                  <br></br>
                  <p>
                    - Perfect yourself and be successful in the future.
                  </p>
                  <br></br>
                  <p> - Want to find a stable place in the long term.</p>
                  <br></br>
                  <p> - Want to find a place to devote yourself.</p>
                </div>
              </div>
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-user-graduate icon"></i>The skill itself
              </strong>
              <hr />
              <div className="row">
                <div className="">
                  <p> - Group skill.</p>
                  <br></br>
                  <p>
                    - Easily adaptable to new environments.
                  </p>
                </div>
              </div>
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-language icon"></i>Language level
              </strong>
              <hr />
              <div className="row">
                <div className="col s8 m10 l10">
                  <p> - English</p>
                  <br></br>
                  <p> - Japanese </p>
                </div>
                <div className="col s4 m2 l2">
                  <p>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star "></i>
                  </p>
                  <br></br>
                  <p>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star "></i>
                  <i className="fas fa-star "></i>
                  </p>
                </div>
              </div>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
