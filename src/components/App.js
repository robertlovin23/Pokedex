import React from 'react';
import Search from './Search'
import PokedexList from './Pokedex'
import Select from 'react-select'
import pokedex from '../api/pokedexapi'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      initPokemon: [],
      pokemonList: [],
      selectedType: "",
      selectedWeakness: "",
      selectedPokemon: null
    } 
  }
  onTypeChange = (event) => {
    const options = event.target.options;

    const value = [];
      for(var i = 0, l = options.length; i < l; i++){
        if(options[i].selected){
            value.push(options[i].value)
            if(options[i].value){
              const values = this.state.initPokemon.filter(element => {
                console.log(this.state.initPokemon,element)
                for(var a = 0; a < element.type.length; a++){
                  console.log(element.type[a])
                  if(element.type[a] === options[i].value){
                    return element.type[a].toLowerCase().includes(options[i].value.toLowerCase())
                  }
                }
              })
              console.log(values)
              this.setState({
                pokemonList: values
              })
              console.log(this.state.pokemonList)
            }

        }
      }
  }

  onWeaknessChange = (event) => {
    const options = event.target.options;
    console.log(this.state.initPokemon)

    const value = [];
      for(var i = 0, l = options.length; i < l; i++){
        if(options[i].selected){
            value.push(options[i].value)
            if(options[i].value){
              const weaknessValue = this.state.initPokemon.filter(element => {
                for(var a = 0; a < element.weaknesses.length; a++){
                  if(element.weaknesses[a] === options[i].value){
                    return element.weaknesses[a].toLowerCase().includes(options[i].value.toLowerCase())
                  }
                }
              })
              this.setState({
                pokemonList: weaknessValue
              })
            }
        }
      }
  }

  handleSearch = async (query) => {
    const response = await pokedex.get('./pokedex.json')
    const search = query
    const filteredData = this.state.initPokemon.filter(element => {
      return element.name.toLowerCase().includes(search.toLowerCase());
    })
      this.setState({
        initPokemon: response.data.pokemon,
        selectedPokemon: response.data.pokemon[0],
        pokemonList: filteredData
      })
      console.log(response.data, this.state.pokemonList)
  }

  componentDidMount = (query) => {
      this.handleSearch(query)
  }

  selectPokemon = (poke) => {
    this.setState({
      selectedPokemon: poke
    })
    console.log(poke)
  }
 
  render(){
    const { pokemonList,initPokemon } = this.state;
    console.log(pokemonList.length, initPokemon.length)
    if(!initPokemon.length){
      return(
        <div>Loading...</div>
      )
    } else if(!pokemonList.length) {
      return(
        <div className="ui container">
            <div className="ui segment">
              <Search submitSearch={this.componentDidMount}/>
            <div/>
            <form onSubmit={this.handleFilterSubmit}>
              <label>Types:</label>
              <select className="menu" onChange={this.onTypeChange} value={this.state.selectedType} multiple={true} style={{marginRight: "10px"}}>
                  <option className="item" value="Fairy">Fairy</option>
                  <option className="item" value="Steel">Steel</option>
                  <option className="item" value="Rock">Rock</option>
                  <option className="item" value="Psychic">Psychic</option>
                  <option className="item" value="Ground">Ground</option>
                  <option className="item" value="Fighting">Fighting</option>
                  <option className="item" value="Ghost">Ghost</option>
                  <option className="item" value="Ice">Ice</option>
                  <option className="item" value="Normal">Normal</option>
                  <option className="item" value="Electric">Electric</option>
                  <option className="item" value="Dragon">Dragon</option>
                  <option className="item" value="Dark">Dark</option>
                  <option className="item" value="Bug">Bug</option>
                  <option className="item" value="Flying">Flying</option>
                  <option className="item" value="Water">Water</option>
                  <option className="item" value="Fire">Fire</option>
                  <option className="item" value="Grass">Grass</option>
                  <option className="item" value="Posion">Poison</option>
              </select>
              <label>Weaknesses:</label>
              <select className="menu" onChange={this.onWeaknessChange} value={this.state.selectedWeakness} multiple={true}>
                  <option className="item" value="Fairy">Fairy</option>
                  <option className="item" value="Steel">Steel</option>
                  <option className="item" value="Rock">Rock</option>
                  <option className="item" value="Psychic">Psychic</option>
                  <option className="item" value="Ground">Ground</option>
                  <option className="item" value="Fighting">Fighting</option>
                  <option className="item" value="Ghost">Ghost</option>
                  <option className="item" value="Ice">Ice</option>
                  <option className="item" value="Normal">Normal</option>
                  <option className="item" value="Electric">Electric</option>
                  <option className="item" value="Dragon">Dragon</option>
                  <option className="item" value="Dark">Dark</option>
                  <option className="item" value="Bug">Bug</option>
                  <option className="item" value="Flying">Flying</option>
                  <option className="item" value="Water">Water</option>
                  <option className="item" value="Fire">Fire</option>
                  <option className="item" value="Grass">Grass</option>
                  <option className="item" value="Posion">Poison</option>
              </select>
            </form>
          </div>
              <PokedexList
                      selectedPokemon={this.state.selectedPokemon} 
                      pokemonList={this.state.initPokemon}
                      selectPokemon={this.selectPokemon}/>
          </div>
        )
    } else {
    return(
      <div className="ui container">
        <div className="ui segment">
        <Search submitSearch={this.componentDidMount}/>
        <form onSubmit={this.handleFilterSubmit}>
            <label>Types:</label>
            <select className="menu" onChange={this.onTypeChange} value={this.state.selectedType} multiple={true} style={{marginRight: "10px"}}>
                <option className="item" value="Fairy">Fairy</option>
                <option className="item" value="Steel">Steel</option>
                <option className="item" value="Rock">Rock</option>
                <option className="item" value="Psychic">Psychic</option>
                <option className="item" value="Ground">Ground</option>
                <option className="item" value="Fighting">Fighting</option>
                <option className="item" value="Ghost">Ghost</option>
                <option className="item" value="Ice">Ice</option>
                <option className="item" value="Normal">Normal</option>
                <option className="item" value="Electric">Electric</option>
                <option className="item" value="Dragon">Dragon</option>
                <option className="item" value="Dark">Dark</option>
                <option className="item" value="Bug">Bug</option>
                <option className="item" value="Flying">Flying</option>
                <option className="item" value="Water">Water</option>
                <option className="item" value="Fire">Fire</option>
                <option className="item" value="Grass">Grass</option>
                <option className="item" value="Posion">Poison</option>
            </select>
            <label>Weaknesses:</label>
            <select className="menu" onChange={this.onWeaknessChange} value={this.state.selectedWeakness} multiple={true}>
                <option className="item" value="Fairy">Fairy</option>
                <option className="item" value="Steel">Steel</option>
                <option className="item" value="Rock">Rock</option>
                <option className="item" value="Psychic">Psychic</option>
                <option className="item" value="Ground">Ground</option>
                <option className="item" value="Fighting">Fighting</option>
                <option className="item" value="Ghost">Ghost</option>
                <option className="item" value="Ice">Ice</option>
                <option className="item" value="Normal">Normal</option>
                <option className="item" value="Electric">Electric</option>
                <option className="item" value="Dragon">Dragon</option>
                <option className="item" value="Dark">Dark</option>
                <option className="item" value="Bug">Bug</option>
                <option className="item" value="Flying">Flying</option>
                <option className="item" value="Water">Water</option>
                <option className="item" value="Fire">Fire</option>
                <option className="item" value="Grass">Grass</option>
                <option className="item" value="Posion">Poison</option>
            </select>
            </form>
        <div/>
        </div>
        <PokedexList pokemon={this.state.initPokemon} 
                    selectedPokemon={this.state.selectedPokemon} 
                    pokemonList={this.state.pokemonList}
                    selectPokemon={this.selectPokemon}/>
    </div>
    )
  }}
}

export default App;
