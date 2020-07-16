import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position) =>console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Latitude: </div>
// };

class App extends React.Component{
    // No need of constuctor if we declare the below line
    // as babel auto converts our code to this. 
    // state ={lat:null, errorMessage: ''};
    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: ''};
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err =>this.setState({errorMessage: err.message})
        );
    }

    // react says we have to define render!
    render(){
        // return (
        //     <div>
        //       Latitude: {this.state.lat}
        //     <br />
        //       Error:{this.state.errorMessage}
        //     </div>
        // ); 
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location" />

    }
}

ReactDOM.render(<App />, document.querySelector('#root')); 