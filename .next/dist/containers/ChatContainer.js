'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

var _Chat = require('../components/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var watsonResponse = _ref.watsonResponse;
  return { response: watsonResponse.response };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    postMessage: (0, _redux.bindActionCreators)(_store.postMessage, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Chat2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvQ2hhdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwicG9zdE1lc3NhZ2UiLCJDaGF0IiwibWFwU3RhdGVUb1Byb3BzIiwid2F0c29uUmVzcG9uc2UiLCJyZXNwb25zZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFtQjs7QUFDNUIsQUFBTyxBQUFVOzs7Ozs7QUFFakIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0Isc0JBQUE7TUFBQSxBQUFFLHNCQUFGLEFBQUU7U0FBcUIsRUFBRSxVQUFVLGVBQW5DLEFBQXVCLEFBQTJCO0FBQTFFOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztpQkFDZSxBQUFtQixtREFEbEMsQUFBTyxBQUNRLEFBQWdDLEFBRWhEO0FBSFEsQUFDTDtBQUZKLEFBTUE7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQXZCLEFBQWUsQUFBeUIsQUFBb0IiLCJmaWxlIjoiQ2hhdENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=