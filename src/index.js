import React from 'react';
import ReactDOM from 'react-dom';
import UserDisplay from './components/UserDisplay';
import SearchBar from './components/SearchBar';
import axios from 'axios';

// faker.seed(100);

class App extends React.Component {

    state = {users: [], matchedUsers: []};

    componentDidMount() {
        axios.get('./users.json').then((res) => {
            this.setState({users: res.data});
            // console.log(res);
        }).catch((err) => console.log(err));
    }

    onSearchSubmit = (data) => {
        const matchedUsers = [];
        if(data.searchBy === 'firstName') {
            this.state.users.map((user) => {
                if(user.firstName === data.term) {
                    matchedUsers.push(user);
                }
            });
        }
        else if(data.searchBy === 'lastName') {
            this.state.users.map((user) => {
                if(user.lastName === data.term) {
                    matchedUsers.push(user);
                }
            });
        }
        else if(data.searchBy === 'phone') {
            this.state.users.map((user) => {
                if(user.phone === data.term) {
                    matchedUsers.push(user);
                }
            });
        }
        else if(data.searchBy === 'email') {
            this.state.users.map((user) => {
                if(user.email === data.term) {
                    matchedUsers.push(user);
                }
            });
        }

        this.setState({matchedUsers: matchedUsers});
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.state.matchedUsers.map((user) => {
                    return <UserDisplay key={user.id} user={user}/>
                })}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);