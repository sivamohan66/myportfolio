import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Shubham Singh",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries`,
      img: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png",
      icons: ["fa fa-phone-square", "fa fa-fax", "fa fa-envelope", "fa fa-skype"],
      data: {
        "fa fa-phone-square": "  9304225752",
        "fa fa-envelope": "  denyshubham@gmail.com",
        "fa fa-fax": "  ------",
        "fa fa-skype": "  denyshubh"
      },
    };

  }
  contact = (icons = []) => {
    return (
      <List>
        {
          icons.map((icon, index) =>
            <ListItem key={index}>
              <ListItemContent className="contact-list">
                <i className={icon} aria-hidden="true" />
                {this.state.data[icon]}
              </ListItemContent>
            </ListItem>
          )
        }
      </List>
    )
  }

  render() {
    return (
      <main className="">
        <Grid className="">
          <Cell col={6} shadow={4}>
            <section className="jumbotron bg-gradient-info">
              <article className="container d-flex flex-column  justify-content-center">
                <figure className="image">
                  <img
                    src={this.state.img}
                    alt="avatar"
                    style={{ height: '250px' }}
                  />
                </figure>
                <h2 className="name">{this.state.name}</h2>
                <blockquote className="blockquote">
                  <h4>
                    {this.state.desc}
                  </h4>
                </blockquote>
              </article>
            </section>
          </Cell>
          <Cell col={3} phone={6} tablet={6}>
            <h2 className="name text-info">Contact Me</h2>
            <hr />
            <div className="container">
              {this.contact(this.state.icons)}
            </div>
          </Cell>
          <Cell col={3} hidePhone hideTablet>
            <figure>
              <img src="/images/tomato.png" alt="tomato pic" />
            </figure>
          </Cell>
        </Grid>
      </main>
    )
  }
}

export default Contact;
