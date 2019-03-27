import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class SearchBar extends React.Component {

    state = {
        term: '',
        searchBy: '',
        options: [{
            key: 'firstName',
            text: 'First Name',
            value: 'firstName'
        },
        {
            key: 'lastName',
            text: 'Last Name',
            value: 'lastName'
        },
        {
            key: 'email',
            text: 'Email',
            value: 'email'
        },
        {
            key: 'phone',
            text: 'Phone',
            value: 'phone'
        }]
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        console.log(this.state.searchBy);

        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                        <Form.Input
                            id="searchInput"
                            type="text"
                            label="Search Term"
                            value={this.state.term}
                            onChange={(event) => this.setState({term: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            id="searchBy"
                            name="search_using"
                            placeholder="Search By..."
                            defaultValue={this.state.searchBy}
                            onChange={(event, { value }) => this.setState({searchBy: value})} 
                            options={this.state.options}/>
                            {/* <option value="undefined">--</option>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </Form.Select> */}
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>
            </Segment>);
    }
}

export default SearchBar;
