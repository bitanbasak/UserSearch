import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: '',
        searchBy: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="searchInput">Search Term</label>
                        <input
                            id="searchInput"
                            type="text"
                            value={this.state.term}
                            onChange={(event) => this.setState({term: event.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="searchBy">Search By</label>
                        <select
                            id="searchBy"
                            name="search_using"
                            defaultValue={this.state.searchBy}
                            onChange={(event) => this.setState({searchBy: event.target.value})}>
                            <option value="undefined">--</option>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                    <button type="submit" className="ui primary button">Submit</button>
                </form>
            </div>);
    }
}

export default SearchBar;
