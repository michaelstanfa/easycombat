import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner.js'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewCharacterForm from './NewCharacterForm';
import React from 'react';


function CharacterCard(props) {
  return (

  <div className="card">
    <ul className = "list-group list-group-flush">
      <li className="list-group-item list-group-item-fof">
          {props.character.friendOrFoe}
          <Button className="list-group-item-kill-button" variant="danger">Kill</Button>
      </li>
    </ul>
    <div className="card-header">
      <h5>{props.character.name}</h5>

    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Max HP: <b>{props.character.hp}</b></li>
      <li className="list-group-item">Armor Class: <b>{props.character.armorclass}</b></li>
      <li className="list-group-item">Spell Save DC: <b>{props.character.spellsavedc}</b></li>
      
    </ul>
  </div>

  )
}

class CharacterCards extends React.Component {

  renderCard(data, iterator) {

    return (
      <div>
      <CharacterCard 
        key={iterator}
        character = {data}
        />
      </div>
      )
  }

  render() {
    let cards = [];
    let iterator = 0;

    this.props.characters.forEach(characterData => {
      cards = cards.concat(this.renderCard(characterData, iterator));
      iterator ++;
    });

    if(!this.props.started) {
      return(<div>Add a player to begin</div>);
    }
    //adding key=1 gets ride of the key issue even though it does absolutely nothing
    return(<div key='1' className="card-group">{cards}</div>);
  }

}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character: {
        name: '',
        hp: 0,
        armorclass: 0,
        spellsavedc: 0,
        friendOrFoe: "Friend"
      },
      show: false,
      history: [{
        characters: []
      }],
      startedCharacters: false
    
    };

    this.handleSubmitNewPlayer = this.handleSubmitNewPlayer.bind(this);
    this.handleNewPlayerInputChange = this.handleNewPlayerInputChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.setShow = this.setShow.bind(this);

  }


  handleNewPlayerInputChange(event) {
    this.setState(prevState => {
      let oldState = {...prevState};
      oldState.character[event.target.name] = event.target.value;
      return oldState;
    })
  }

  handleSubmitNewPlayer(event) {

    let blankCharacter = {
      name: "",
      hp: 0,
      armorclass: 0,
      spellsavedc: 0,
      friendOrFoe: "Friend"
    }

    const history = this.state.history.slice();
    let characters = [];

    let newCharacter = {
      'name': this.state.character.name,
      'hp': this.state.character.hp,
      'armorclass': this.state.character.armorclass,
      'spellsavedc': this.state.character.spellsavedc,
      'friendOrFoe': this.state.character.friendOrFoe
    }

    if(this.state.startedCharacters) {
      characters = history.concat([newCharacter])
    } else {
      characters = [newCharacter];
    }

    this.setState({
      character: blankCharacter, 
      show: this.state.show,
      history: characters,
      startedCharacters: true
    })
  
    event.preventDefault();
    this.setShow(false);
  }



  setShow(show) {
    this.setState({show: show});
  }

  handleOpen() {
    this.setShow(true);
  }

  handleClose() {
    this.setShow(false);
  }

  render() {

    return (
      <div className="App">
        <Banner />

        <header className="App-header">
          

          
          <CharacterCards
            characters={this.state.history}
            started={this.state.startedCharacters}
          />
          <br/>
          <Button variant="dark" onClick={this.handleOpen}>
            Add Player
          </Button>

          <Modal
            show = {this.state.show}
            onHide = {this.handleClose}
            backdrop = "static"
          >
            {/* <Modal.Dialog> */}
            <Modal.Header closeButton>
              <Modal.Title>New Character</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <NewCharacterForm
                state = {this.state}
                handleNewPlayerInputChange = {this.handleNewPlayerInputChange}
                handleSubmitNewPlayer = {this.handleSubmitNewPlayer}
              />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick = {this.handleClose}>Close</Button>
            </Modal.Footer>
          {/* </Modal.Dialog> */}
        </Modal>
        </header>
      </div>
    );
  }

}
export default App;

