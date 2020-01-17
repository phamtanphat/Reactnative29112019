import {connect} from 'react-redux';
import * as actionCreator from '../redux/action/actionCreator';
import Filter from '../Filter';

const mapStateToProps = state => {
  return {filterMode: state.filterMode};
};
const mapDispatchToProps = disptach => {
  return {
    setFilterMode: filterMode => {
      disptach(actionCreator.setFilterMode(filterMode));
    },
  };
};
const FilterController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
export default FilterController;
