import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { DetailsCharacterComponent } from './DetailsCharacterComponent';
import { getDetailsCharacter } from "../../actions/actionsDetailsCharacter";

const mapStateToProps = state => ({
  character: state.details.character,
  loading: state.details.loading
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getDetailsCharacter
    },
    dispatch
  )
})

export const DetailsCharacter = withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsCharacterComponent));
