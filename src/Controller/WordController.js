import {connect} from 'react-redux';
import * as actionCreator from '../redux/action/actionCreator';
import Word from '../Word';

const mapStateToProps = state => {
  return {words: state.words, filterMode: state.filterMode};
};
const mapDispatchToProps = disptach => {
  return {
    toggleWord: (_id, isMemorized) => {
      disptach(actionCreator.toggleMemorized(_id, isMemorized));
    },
    removeWord: _id => disptach(actionCreator.removeWord(_id)),
    fetchWordsApi: () => disptach(actionCreator.fetchWordsApi()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Word);
