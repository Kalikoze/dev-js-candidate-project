import { bindActionCreators } from 'redux';
import { fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke, Store } from '../store';
import withRedux from 'next-redux-wrapper';
import Index from '../components/Index';

const mapStateToProps = ({ newJoke }) => ({ currentJoke: newJoke.currentJoke });

const mapDispatchToProps = dispatch => {
  return {
    fetchJoke: bindActionCreators({ fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke }, dispatch),
  };
};

export default withRedux(Store, mapStateToProps, mapDispatchToProps)(Index);
