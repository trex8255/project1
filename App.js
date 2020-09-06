import React from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import Error from './Error'

class App extends React.Component {
    constructor () {
        super ();
        this.state = {
        robots: [],
        SearchField: ''
        }
    }
componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>{ return response.json()}).then(users=> {
            this.setState({robots:users})
        })
}
    onSearchChange = (event) => {
        this.setState({SearchField: event.target.value})
    };


    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                <Error>
                    <CardList robots = {filteredRobots}/>
                </Error>
                </Scroll>
            </div>
    
        
    )}
        }
        
};

export default App;