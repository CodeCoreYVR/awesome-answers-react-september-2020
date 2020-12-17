import React, { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then(res => {
        return res.json()
      })
      .then((payload) => {
        this.setState((state) => {
          return {
            pokemon: payload
          }
        })
      })
  }
  render() {
    return (
      <div>
        {JSON.stringify(this.state.pokemon)}
      </div>
    )
  }
}

export default Pokemon;