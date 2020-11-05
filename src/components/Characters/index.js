import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { CharactersComponent} from './CharactersComponent';
import { getCharacters } from "../../actions/actionsCharacters";

const mapStateToProps = state => ({
  characters: state.characters.data,
  loading: state.characters.loading
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getCharacters
    },
    dispatch
  )
})

export const Characters = withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersComponent));
