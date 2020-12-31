import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class NewCharacterForm extends React.Component {

    render() {
      return (
        <form onSubmit={this.props.handleSubmitNewPlayer}>
          <label className='modal-input-label'>Name:</label>
          <input required className = 'modal-input-text' type="text" placeholder="Character Name" name="name" value={this.props.state.character.name} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          <label className='modal-input-label'>HP:</label>
          <input required className = 'modal-input-text' type="text" pattern="\d*" name="hp" value={this.props.state.character.hp} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          <label className='modal-input-label'>Armor Class:</label>
          <input required className = 'modal-input-text' type="text" pattern="\d*" name="armorclass" value={this.props.state.character.armorclass} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          <label className='modal-input-label'>Spell Save DC:</label>
          <input required className = 'modal-input-text' type="text" pattern="\d*" name="spellsavedc" value={this.props.state.character.spellsavedc} onChange={this.props.handleNewPlayerInputChange}></input>
          <br/>
          
          <fieldset>
            <div className="radio">
              
              <input className='radio-input'
                name="friendOrFoe"
                type="radio"
                value="Friend"
                checked={this.props.state.character.friendOrFoe === "Friend"}
                onChange={this.props.handleNewPlayerInputChange}
              />
              <label className = 'radio-label'>
                Friend
              </label>  
              <input className='radio-input'
                name="friendOrFoe"
                type="radio"
                value="Foe"
                checked={this.props.state.character.friendOrFoe === "Foe"}
                onChange={this.props.handleNewPlayerInputChange}
              />
              <label className = 'radio-label'>
                Foe
              </label>
            </div>

          </fieldset>
          <br/>
          
          <input className="center" type="Submit" variance="Success" defaultValue ="Add Player"/>
          
        </form>
        
    )}
}

export default NewCharacterForm;