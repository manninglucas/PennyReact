//==============================================================================
// PennySearch.jsx
// Author: Lucas Manning 
//==============================================================================
import React from 'react';

export default class PennySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            inputValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});     
        this.fetchResults(event.target.value);
    }

    fetchResults(querystring) {
        let seed = (new Date()).getSeconds();
        let messageId =  Math.floor(Math.random(seed) * 1000000) + 1;

        fetch(`/searchresults?author=${querystring}&messageId=${messageId}`)
            .then(resp => resp.json())
            .then(data => this.setState({books: data}))
            .catch(error => console.log(error));                    
    }

    render() {
        return (
            <div>
                <h1>Author Search</h1>
                {'Please enter an author name: '} 
                <input type='text' value={this.state.inputValue} 
                    onChange={this.handleChange} />
                <hr></hr>
                <p> 
                    {this.state.books.map(book => (
                        <span key={book.title}>
                            <strong>{book.author + ': '}</strong>
                            {`${book.title} ($${book.price})`}
                            <br></br>
                        </span>
                    ))}
                </p>
            </div>
        );
    }
}