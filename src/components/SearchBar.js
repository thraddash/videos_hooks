import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');
};

class SearchBar extends React.Component {

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        // TODO: Make sure we call
        // callback from parent component this.prop.onFormSubmit 
        // is told what the current search term is this.state.term
        this.props.onFormSubmit(this.state.term)
    };

    // alternative: pass onInputChange() inline to onChange event handler
    // onChange={e => this.setState({ term: e.target.value })}
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;