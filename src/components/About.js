import React, { Component } from 'react';
import apiCaller from './../utils/apiCaller';
export default class About extends Component {
     constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        apiCaller('informations', 'GET', null).then(response => {
            this.setState({
                items: response.data
            })    
        })   
    }
  render() {
    console.log(this.state.items[0]);    
    return (
      <div> 
        <div className="card">
            <div className="card-content">
                <h6 className="mt-button">
                 <strong> ABOUT ME </strong>
                </h6>
                <p className="grey-text">
                Hi ! My name is Thanh and I am 21 years old. I am from Danang.  I have experience in web design in which I am good
                 at front end and back end, I am a cheerful person with everyone.  If I work at your company I will do my best
                </p>
            </div>
            <div className="card-action">
                <h6 className="mt-button">
                    <strong> PERSONAL INFO </strong>
                </h6>
                <div className="row mt">
                    <div className="col s12 m6 l6 xl6">
                        <p>
                            <strong>Address: </strong> 
                        </p>
                        <p>
                            <strong>Email: </strong> Kimthanh99153@gmail.com
                        </p>
                        <p>
                            <strong>Phone: </strong> +84 367.592.479
                        </p>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <p>
                            <strong>Main Language: </strong> Vietnamese
                        </p>
                        <p>
                            <strong>Second Language: </strong> English
                        </p>
                        <p>
                            <strong>Third Language: </strong> None
                        </p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
  }
}
