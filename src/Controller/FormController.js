import {connect} from 'react-redux';
import * as actionCreator from '../redux/action/actionCreator';
import Form from '../Form';

const mapStateToProps = state => {
  return {shouldShowForm: state.shouldShowForm};
};
const mapDispatchToProps = disptach => {
  return {
    addWord: newWord => disptach(actionCreator.addWord(newWord)),
    toggleForm: () => disptach(actionCreator.toggleForm()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
