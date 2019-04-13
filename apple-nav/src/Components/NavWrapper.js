import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class NavList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        links: []
      };
    }
  
    // componentDidMount() {
    //   axios
    //     .get('http://localhost:5000/api/movies')
    //     .then(response => {
    //       this.setState(() => ({ movies: response.data }));
    //     })
    //     .catch(error => {
    //       console.error('Server Error', error);
    //     });
    // }
  
    render() {
      return (
        <div className="nav-list">
          {this.state.links.map(link => (
            <NavDetails key={links.id} links={links} />
          ))}
        </div>
      );
    }
  }
  
  function NavDetails({ Nav }) {
    return (
      <Link to={`/nav/${links.id}`}>
        <Nav links={links}/>
      </Link>
    );
  }
  