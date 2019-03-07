import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacterList } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getCharacterList();
    console.log(this.props)
  }

  render() {
    if (this.props.fetching) {
      return (
        <div><p>We are loading the list! :D</p></div>
      )
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <p>Supposed to be a character list.</p>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  fetching: state.fetching,
  characters: state.characters,
});

export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    /* action creators go here */ getCharacterList
  }
)(CharacterListView);
