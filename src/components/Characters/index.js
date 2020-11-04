import { connect } from "react-redux";
import { CharactersComponent } from './CharactersComponent';

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export const Characters = connect(mapStateToProps, mapDispatchToProps)(CharactersComponent)
