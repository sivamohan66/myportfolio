import React, { Component } from 'react';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-4-lg col-6-sm col-xs-12 mx-3 my-2">
        <div className="card" style={{ "width": "24rem" }}>
          < img src="https://picsum.photos/200" alt="Card Image" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.data.name}</h5>
            <p className="card-text">
              {this.props.data.description}
            </p>
            <a href={this.props.data.link} className="btn btn-primary">View</a>
          </div>
        </div >
      </div >
    );
  }
}

export default Cards;