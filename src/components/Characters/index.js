import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {CharactersComp2, CharactersComponent} from './CharactersComponent';
import { getCharacters } from "../../actions/actinsCharacters";

const mapStateToProps = state => ({
  characters: state.characters.data
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getCharacters
    },
    dispatch
  )
})

export const Characters = connect(mapStateToProps, mapDispatchToProps)(CharactersComponent)
export const Characters2 = connect(mapStateToProps, mapDispatchToProps)(CharactersComp2)
