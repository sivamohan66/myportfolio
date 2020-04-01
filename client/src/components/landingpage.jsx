import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfileImage from './profileImage';

class Landing extends Component {

  details = () => {
    return (
      <section>
        <div className="card text-center">
          <div className="card-header">
            <h1 className="text-center text-capitalize font-weight-bold title">Full Stack Web Developer</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">My Skills</h5>
            <p className="card-text">HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            <div className="social-links">

              {/* LinkedIn */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Freecodecamp */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </a>

              {/* Youtube */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <main className="container">
        <Grid className="">
          <Cell col={12}>
            <ProfileImage />
            {this.details()}
          </Cell>
        </Grid>
      </main>
    )
  }
}

export default Landing;
