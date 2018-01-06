'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chat = require('../components/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _Message = require('../components/Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.state = {
      messages: []
    };
    _this.addMessage = _this.addMessage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'addMessage',
    value: function addMessage(message) {
      var messages = this.state.messages;

      this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [message]) });
    }
  }, {
    key: 'render',
    value: function render() {
      var messages = this.state.messages;

      var conversation = messages.map(function (message, i) {
        return _react2.default.createElement(_Message2.default, { key: i, text: message, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        });
      });

      return _react2.default.createElement('section', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'SpruceBot'), _react2.default.createElement('section', { className: 'conversation', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, conversation), _react2.default.createElement(_Chat2.default, { addMessage: this.addMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2hhdCIsIk1lc3NhZ2UiLCJJbmRleCIsInN0YXRlIiwibWVzc2FnZXMiLCJhZGRNZXNzYWdlIiwiYmluZCIsIm1lc3NhZ2UiLCJzZXRTdGF0ZSIsImNvbnZlcnNhdGlvbiIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVDO2lDQUNuQjs7bUJBQWM7d0NBQUE7OzhIQUVaOztVQUFBLEFBQUs7Z0JBQUwsQUFBYSxBQUNELEFBRVo7QUFIYSxBQUNYO1VBRUYsQUFBSyxhQUFhLE1BQUEsQUFBSyxXQUFMLEFBQWdCLEtBTHRCLEFBS1o7V0FDRDs7Ozs7K0IsQUFFVSxTQUFTO1VBQUEsQUFDVixXQUFhLEtBREgsQUFDUSxNQURSLEFBQ1YsQUFDUjs7V0FBQSxBQUFLLFNBQVMsRUFBQyxxREFBQSxBQUFjLFlBQTdCLEFBQWMsQUFBQyxBQUF3QixBQUN4Qzs7Ozs2QkFFUTtVQUFBLEFBQ0MsV0FBYSxLQURkLEFBQ21CLE1BRG5CLEFBQ0MsQUFDUjs7VUFBTSx3QkFBZSxBQUFTLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxHQUFWOytCQUFnQixBQUFDLG1DQUFRLEtBQVQsQUFBYyxHQUFHLE1BQWpCLEFBQXVCO3NCQUF2Qjt3QkFBaEIsQUFBZ0I7QUFBQTtTQUFBO0FBQWxELEFBQXFCLEFBRXJCLE9BRnFCOzs2QkFHbkIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsOEJBQUEsY0FBQSxhQUFTLFdBQVQsQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0c7QUFESDtTQUZGLEFBRUUsQUFHQSwrQkFBQSxBQUFDLGdDQUFLLFlBQVksS0FBbEIsQUFBdUI7b0JBQXZCO3NCQU5KLEFBQ0UsQUFLRSxBQUdMO0FBSEs7Ozs7OztBQXhCMkIsQTs7a0JBQWQsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=