import React from 'react'

class FilterForm extends React.Component{
    state={
        type: "",
        weakness: ""
    }

    onTypeChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    onWeaknessChange = (event) => {
        this.setState({
            weakness: event.target.value
        })
    }

    onFilterSubmit = (event) => {
        event.preventDefault();
        this.props.onFilterSubmit(
            this.state.type,
            this.state.weakness
        )
        console.log(this.props)
    }
    render(){
        return(
        <form className="ui form" onSubmit={this.onFilterSubmit}>
            <select className="menu" onChange={this.onTypeChange} value={this.state.type} style={{marginRight: "10px"}}>
                <option className="item" value="17">Fairy</option>
                <option className="item" value="16">Steel</option>
                <option className="item" value="15">Rock</option>
                <option className="item" value="14">Psychic</option>
                <option className="item" value="13">Ground</option>
                <option className="item" value="12">Fighting</option>
                <option className="item" value="11">Ghost</option>
                <option className="item" value="10">Ice</option>
                <option className="item" value="9">Normal</option>
                <option className="item" value="8">Electric</option>
                <option className="item" value="7">Dragon</option>
                <option className="item" value="6">Dark</option>
                <option className="item" value="5">Bug</option>
                <option className="item" value="4">Flying</option>
                <option className="item" value="3">Water</option>
                <option className="item" value="2">Fire</option>
                <option className="item" value="1">Grass</option>
                <option className="item" value="0">Poison</option>
            </select>
            <select className="menu" onChange={this.onWeaknessChange} value={this.state.weakness}>
                <option className="item" value="17">Fairy</option>
                <option className="item" value="16">Steel</option>
                <option className="item" value="15">Rock</option>
                <option className="item" value="14">Psychic</option>
                <option className="item" value="13">Ground</option>
                <option className="item" value="12">Fighting</option>
                <option className="item" value="11">Ghost</option>
                <option className="item" value="10">Ice</option>
                <option className="item" value="9">Normal</option>
                <option className="item" value="8">Electric</option>
                <option className="item" value="7">Dragon</option>
                <option className="item" value="6">Dark</option>
                <option className="item" value="5">Bug</option>
                <option className="item" value="4">Flying</option>
                <option className="item" value="3">Water</option>
                <option className="item" value="2">Fire</option>
                <option className="item" value="1">Grass</option>
                <option className="item" value="0">Poison</option>
            </select>
        </form>
        )
    }
}

export default FilterForm