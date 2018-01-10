import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postMessage } from '../store';
import Chat from '../components/Chat';

const mapStateToProps = ({watsonResponse}) => ({ response: watsonResponse.response });

const mapDispatchToProps = dispatch => {
  return {
    postMessage: bindActionCreators(postMessage, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
