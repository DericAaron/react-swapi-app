import React, { Component } from 'react';
import People from '../People/People';
import axios from 'axios';

class Planet extends Component {

  constructor(props){
    super(props);

    this.state = {
      peopleList: []
    }
  }

  // this is similar to Jquery onready
  // It is called by react when the component is loaded and ready to go
  componentDidMount() {
    console.log('App component mounted');
    this.getPeople('https://swapi.co/api/people/?format=json');
  }

  //async function
  async getPeople(url){
    let nextUrl = url;
    while (nextUrl != null){
      await axios.get(nextUrl) //must be inside of async function for await
        .then( (response) => {
          this.setState (
            {
              peopleList: [...this.state.peopleList, ...response.data.results]
            }
          );
          nextUrl = response.data.next
        }).catch( (error) => {
          console.log('Error in people');
          nextUrl = null;
        });
    }
  }

  render() {
    return (
        <section className="grid-item">
            <h2>Characters:</h2>
            <ul>
            {
            this.state.peopleList.map( people => 
            <People people={people}/>
            )
            }
            </ul>
      </section>
    );
  }
}

export default Planet;