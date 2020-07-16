import React from 'react';

class SearchBar extends React.Component{
    // onInputChange(event){
    //     console.log(event.target.value);
    // };
    state = {term: ''};

    onFormsubmit = (event) =>{
        event.preventDefault();

        console.log(this.state.term);
    }

    // <input type="text" onChange={this.onInputChange}/>
    render(){
        return ( 
        <div className="ui segment">
          <form onSubmit={this.onFormsubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input 
                type="text"
                value={this.state.term}
                onChange={e=>this.setState({term:e.target.value})}
               />
            </div>
          </form>
        </div>
        );
    }
}

export default SearchBar;