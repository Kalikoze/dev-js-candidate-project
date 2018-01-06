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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

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
            lineNumber: 22
          }
        });
      });

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'SpruceBot'), _react2.default.createElement('section', { className: 'conversation', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, conversation), _react2.default.createElement(_Chat2.default, { addMessage: this.addMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2hhdCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJJbmRleCIsInN0YXRlIiwibWVzc2FnZXMiLCJhZGRNZXNzYWdlIiwiYmluZCIsIm1lc3NhZ2UiLCJzZXRTdGF0ZSIsImNvbnZlcnNhdGlvbiIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRUUsQTtpQ0FDbkI7O21CQUFjO3dDQUFBOzs4SEFFWjs7VUFBQSxBQUFLO2dCQUFMLEFBQWEsQUFDRCxBQUVaO0FBSGEsQUFDWDtVQUVGLEFBQUssYUFBYSxNQUFBLEFBQUssV0FBTCxBQUFnQixLQUx0QixBQUtaO1dBQ0Q7Ozs7OytCQUVVLEEsU0FBUztVQUFBLEFBQ1YsV0FBYSxLQURILEFBQ1EsTUFEUixBQUNWLEFBQ1I7O1dBQUEsQUFBSyxTQUFTLEVBQUMscURBQUEsQUFBYyxZQUE3QixBQUFjLEFBQUMsQUFBd0IsQUFDeEM7Ozs7NkJBRVE7VUFBQSxBQUNDLFdBQWEsS0FEZCxBQUNtQixNQURuQixBQUNDLEFBQ1I7O1VBQU0sd0JBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsR0FBVjsrQkFBZ0IsQUFBQyxtQ0FBUSxLQUFULEFBQWMsR0FBRyxNQUFqQixBQUF1QjtzQkFBdkI7d0JBQWhCLEFBQWdCO0FBQUE7U0FBQTtBQUFsRCxBQUFxQixBQUVyQixPQUZxQjs7NkJBR25CLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLGNBQUEsYUFBUyxXQUFULEFBQW1CO29CQUFuQjtzQkFBQSxBQUNHO0FBREg7U0FGRixBQUVFLEFBR0EsK0JBQUEsQUFBQyxnQ0FBSyxZQUFZLEtBQWxCLEFBQXVCO29CQUF2QjtzQkFOSixBQUNFLEFBS0UsQUFHTDtBQUhLOzs7Ozs7QUF4QjJCLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9