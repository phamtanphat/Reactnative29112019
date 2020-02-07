import {connect} from 'react-redux';
import * as actionCreator from '../redux/action/actionCreator';
import Word from '../Word';

const mapStateToProps = state => {
  return {words: state.words, filterMode: state.filterMode};
};
const mapDispatchToProps = disptach => {
  return {
    toggleWord: id => disptach(actionCreator.toggleMemorized(id)),
    removeWord: id => disptach(actionCreator.removeWord(id)),
    fetchWordsApi: () => disptach(actionCreator.fetchWordsApi()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Word);
