import React, {Component} from 'react';
import {Form, FormGroup, FormControl, InputGroup, Glyphicon, Button} from 'react-bootstrap';

import BookQuery from '../model/BookQuery';

class AdvancedSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ISBN: '',
            author: '',
            publisher: '',
        };
    }

    search() {
        let bookQuery = new BookQuery();
        bookQuery.title = this.state.title;
        bookQuery.ISBN = this.state.ISBN;
        bookQuery.authorName = this.state.author;
        bookQuery.publisherName = this.state.publisher;
        this.props.search(bookQuery);
    }

    enterKeyHandler(event) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <FormGroup className="form-inline" style={{width: '100%'}}>
                <InputGroup style={{margin: '2px'}}>
                    <InputGroup.Addon>Title</InputGroup.Addon>
                    <FormControl type="text"
                                 placeholder="Enter Book Title"
                                 onChange={event => this.setState({title: event.target.value})}
                                 onKeyPress={e => this.enterKeyHandler(e)}
                    />
                </InputGroup>
                <InputGroup style={{margin: '2px'}}>
                    <InputGroup.Addon>Author</InputGroup.Addon>
                    <FormControl type="text"
                                 placeholder="Enter Book Author"
                                 onChange={event => this.setState({author: event.target.value})}
                                 onKeyPress={e => this.enterKeyHandler(e)}
                    />
                </InputGroup>
                <InputGroup style={{margin: '2px'}}>
                    <InputGroup.Addon>ISBN</InputGroup.Addon>
                    <FormControl type="text"
                                 placeholder="Enter Book ISBN"
                                 onChange={event => this.setState({ISBN: event.target.value})}
                                 onKeyPress={e => this.enterKeyHandler(e)}
                    />
                </InputGroup>
                <InputGroup style={{margin: '2px'}}>
                    <InputGroup.Addon>Publisher</InputGroup.Addon>
                    <FormControl type="text"
                                 placeholder="Enter Book Publisher"
                                 onChange={event => this.setState({publisher: event.target.value})}
                                 onKeyPress={e => this.enterKeyHandler(e)}
                    />
                </InputGroup>
                <Button onClick={() => this.search()} style={{margin: '2px'}}>
                    <Glyphicon glyph="search"/> Search
                </Button>
            </FormGroup>
        )
    }
}

class GeneralSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }

    search() {
        this.props.search(this.state.query);
    }

    enterKeyHandler(event) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <FormGroup className="form-inline" style={{width: '100%'}}>
                <FormGroup style={{width: '90%'}}>
                    <InputGroup style={{margin: '2px', width: '80%'}}>
                        <InputGroup.Addon style={{width: '10%'}}>Query</InputGroup.Addon>
                        <FormControl type="text"
                                     placeholder="Search"
                                     onChange={event => this.setState({query: event.target.value})}
                                     onKeyPress={e => this.enterKeyHandler(e)}
                        />
                    </InputGroup>
                    <Button onClick={() => this.search()} style={{margin: '2px'}}>
                        <Glyphicon glyph="search"/> Search
                    </Button>
                </FormGroup>
            </FormGroup>
        )
    }
}

export {AdvancedSearch, GeneralSearch};