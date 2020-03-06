import React from "react"

//Uses a query string passed through an onChange handler to use the search form
class Search extends React.Component{
    state={
        query: ""
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    submitSearch = (event) => {
        event.preventDefault();
        this.props.submitSearch(
            this.state.query
        )
    }

    render(){
        return(
                <form className="ui form field" onSubmit={this.submitSearch} style={{paddingBottom:"10px"}}>
                    <input value={this.state.query}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Pokemon"
                    ></input>
                </form>
        )
    }
}

export default Search