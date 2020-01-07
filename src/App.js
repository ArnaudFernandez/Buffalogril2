import React, {Component, ReactPropTypes as PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';

import TableRestaurant from "./app_modules/Table";
import TextField from "@material-ui/core/TextField";

class App extends Component {

  constructor(props) {
		super(props);

		this.state = {
			restaurants:[],
		};
	}


	
  addHobby() {
		let oldrestaurants = this.state.restaurants;
		this.setState({
			restaurants: oldrestaurants.concat(this.input.value)
    });
    
    this.input.value = "";
  }

    getDataFromServer() {

        let data;
        fetch('http://localhost:8080/api/restaurants')
            .then(response => {
                data = response.json();
            })
            .then( () => {
                let newrestaurants = [];
                data.then(resp => {
                    for (let i = 0; i < resp.data.length; i++) {
                        newrestaurants.push(resp.data[i]);
                    }
                    this.setState({
                        restaurants: newrestaurants
                    });
                });
            }).catch(err => {
        });
    }

  componentWillMount() {
    this.getDataFromServer();
  }

  render() {
    return (

      <div className="App">

          <TextField
              type="text"
              ref={(input) => this.input = input}
              id="standard-basic"
              label="Nom restaurant"/>
				<button onClick={() => this.addHobby()}>Ajouter un restaurant</button>
          <p>
            Nombre de restaurants {this.state.restaurants.length}
          </p>

          <h1>Liste des restaurants :</h1>

        <TableRestaurant data={this.state}/>
      </div>
    );
  }
}

export default App;

