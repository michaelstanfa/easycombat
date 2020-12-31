import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class NewCharacterForm extends React.Component {

    render() {
      return (
        <form onSubmit={this.props.handleSubmitNewPlayer}>
          <label>Name: </label><input type="text" name="name" value={this.props.state.character.name} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          <label>HP: </label><input type="number" name="hp" value={this.props.state.character.hp} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          <label>Armor Class: </label><input type="number" name="armorclass" value={this.props.state.character.armorclass} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          <label>Spell Save DC: </label><input type="number" name="spellsavedc" value={this.props.state.character.spellsavedc} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          
          <div className="radio">
            <label>
              <input
                name="friendOrFoe"
                type="radio"
                value="Friend"
                checked={this.props.state.character.friendOrFoe === "Friend"}
                onChange={this.props.handleNewPlayerInputChange}
              />
              Friend
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                name="friendOrFoe"
                type="radio"
                value="Foe"
                checked={this.props.state.character.friendOrFoe === "Foe"}
                onChange={this.props.handleNewPlayerInputChange}
              />
              Foe
            </label>
          </div>
          
          <input type="Submit" variance="Success" defaultValue ="Add Player"/>
          
        </form>
        
    )}
}

export default NewCharacterForm;