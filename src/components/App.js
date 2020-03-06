import React from 'react';
import Search from './Search'
import PokedexList from './Pokedex'
import Select from 'react-select'
import FilterForm from './FilterForm'
import pokedex from '../api/pokedexapi'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      initPokemon: [],
      pokemonList: [],
      options: [
        {value:'Fairy', label:'Fairy'},
        {value:'Steel', label:'Steel'},
        {value:'Rock',label:'Rock'},
        {value:'Psychic',label:'Psychic'},
        {value:'Ground', label:'Ground'},
        {value:'Fighting', label:'Fighting'},
        {value:'Ghost', label:'Ghost'},
        {value:'Ice', label:'Ice'},
        {value:'Normal', label:'Normal'},
        {value:'Electric', label:'Electric'},
        {value:'Dragon', label:'Dragon'},
        {value:'Dark', label:'Dark'},
        {value:'Bug', label:'Bug'},
        {value:'Flying', label:'Flying'},
        {value:'Water', label:'Water'},
        {value:'Grass', label:'Grass'},
        {value:'Poision', label:'Poision'}
      ],
      type: "",
      weakness: "",
      selectedPokemon: null
    } 
  }
  //OnChange Handler for dropdown boxes
  onChange = (event) => {
    const options = event.target.options;
    console.log(options)
    const name = event.target.name

    //sets new value array to take in the options
    const value = [];
      for(var i = 0, l = options.length; i < l; i++){
        if(options[i].selected){
            value.push(options[i].value)
            if(options[i].value){
              console.log(options[i].value)
              //Filters through element properties using two different for loops to loop through weaknesses and types
              const filterValues = this.state.initPokemon.filter(element => {
                for(var j = 0; j < element.type.length; j++){
                  for(var a = 0; a < element.weaknesses.length; a++){
                    //weakness check
                    if(element.weaknesses[a] === options[i].value && name == "weakness"){
                      return(
                        element.weaknesses[a].toLowerCase().includes(options[i].value.toLowerCase())
                      ) 
                    // type check
                    } else if(element.type[j] === options[i].value && name == "type"){
                      return(
                        element.type[j].toLowerCase().includes(options[i].value.toLowerCase())
                      )
                    }
                  }
                }
              })
              //Sets filter values and determines which filter is picked
              this.setState({
                pokemonList: filterValues,
                [name]: event.target.value
              })
              console.log(filterValues)
            }
        }
      }
  }

  //onChange handler for searchBar
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

  //Mounts handleSearch so that it is run on page render
  componentDidMount = (query) => {
      this.handleSearch(query)
  }

  //Function to select specific pokemon
  selectPokemon = (poke) => {
    this.setState({
      selectedPokemon: poke
    })
    console.log(poke)
  }
 
  //Renders HTML
  render(){
    const { initPokemon,pokemonList } = this.state
    if(!initPokemon.length){
      return(
        <div>Loading...</div>
      )
    } else if (!pokemonList.length) {
      return(
      <div className="ui container">
        <div className="ui segment">
            <Search submitSearch={this.componentDidMount}/>
              <FilterForm handleFilterSubmit={this.handleFilterSubmit}
                              options={this.state.options}
                              onChange={this.onChange}
                              selectedType={this.selectedType}
                              selectedWeakness={this.selectedWeakness}
                  />
        </div>
        <div>No Results...Search Something</div>
      </div>
    )
    } else {
      return(
        <div className="ui container">
          <div className="ui segment">
            <Search submitSearch={this.componentDidMount}/>
                <FilterForm handleFilterSubmit={this.handleFilterSubmit}
                            options={this.state.options}
                            onChange={this.onChange}
                            selectedType={this.selectedType}
                            selectedWeakness={this.selectedWeakness}
                />
          <div/>
          </div>
            <PokedexList pokemon={this.state.initPokemon} 
                        selectedPokemon={this.state.selectedPokemon} 
                        pokemonList={this.state.pokemonList}
                        selectPokemon={this.selectPokemon}
            />
      </div>
      )
  }}
}

export default App;
