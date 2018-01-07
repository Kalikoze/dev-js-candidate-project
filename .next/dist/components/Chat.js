'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/components/Chat.js';


var Chat = function (_Component) {
  (0, _inherits3.default)(Chat, _Component);

  function Chat() {
    (0, _classCallCheck3.default)(this, Chat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).call(this));

    _this.state = {
      input: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Chat, [{
    key: 'submit',
    value: function submit(e) {
      var _this2 = this;

      if (e.keyCode === 13) {
        var input = this.state.input;

        this.props.addMessage(input, true);
        (0, _isomorphicUnfetch2.default)('/api/v1/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: (0, _stringify2.default)({ message: input })
        }).then(function (response) {
          return response.json();
        }).then(function (response) {
          return _this2.props.addMessage(response.message, false);
        });
        this.setState({ input: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var input = this.state.input;

      return _react2.default.createElement('section', {
        className: 'jsx-1773448173' + ' ' + 'input-section',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('input', {
        placeholder: 'Chat with SpruceBot here...',
        value: input,
        onChange: function onChange(e) {
          return _this3.setState({ input: e.target.value });
        },
        onKeyDown: function onKeyDown(e) {
          return _this3.submit(e);
        },
        className: 'jsx-1773448173',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1773448173',
        css: '.input-section.jsx-1773448173{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15%;width:60%;}input.jsx-1773448173{border:none;border-radius:20px;font-family:\'Lato\',sans-serif;font-size:2vw;height:50px;padding-left:25px;width:100%;}input.jsx-1773448173:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q29CLEFBR2dDLEFBT1AsQUFVQyxZQVRNLENBVXJCLGtCQVRpQyw4QkFDakIsY0FDRixZQUNNLE1BWEwsWUFZRixXQUNiLG1EQVphLFdBQ0QsVUFDWiIsImZpbGUiOiJjb21wb25lbnRzL0NoYXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogJydcbiAgICB9O1xuICB9XG5cbiAgc3VibWl0KGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgdGhpcy5wcm9wcy5hZGRNZXNzYWdlKGlucHV0LCB0cnVlKTtcbiAgICAgIGZldGNoKCcvYXBpL3YxL21lc3NhZ2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTogaW5wdXR9KVxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMucHJvcHMuYWRkTWVzc2FnZShyZXNwb25zZS5tZXNzYWdlLCBmYWxzZSkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6ICcnfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5wdXQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naW5wdXQtc2VjdGlvbic+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdDaGF0IHdpdGggU3BydWNlQm90IGhlcmUuLi4nXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2lucHV0OiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLnN1Ym1pdChlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pbnB1dC1zZWN0aW9uIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQ2hhdC5wcm9wVHlwZXMgPSB7XG4gIGFkZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIl19 */\n/*@ sourceURL=components/Chat.js */'
      }));
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;


Chat.propTypes = {
  addMessage: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZldGNoIiwiUHJvcFR5cGVzIiwiQ2hhdCIsInN0YXRlIiwiaW5wdXQiLCJlIiwia2V5Q29kZSIsInByb3BzIiwiYWRkTWVzc2FnZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwibWVzc2FnZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwic3VibWl0IiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7Z0NBQ25COztrQkFBYzt3Q0FBQTs7NEhBRVo7O1VBQUEsQUFBSzthQUZPLEFBRVosQUFBYSxBQUNKO0FBREksQUFDWDtXQUVIOzs7OzsyQkFFTSxBLEdBQUc7bUJBQ1I7O1VBQUksRUFBQSxBQUFFLFlBQU4sQUFBa0IsSUFBSTtZQUFBLEFBQ1osUUFBVSxLQURFLEFBQ0csTUFESCxBQUNaLEFBRVI7O2FBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixPQUF0QixBQUE2QixBQUM3Qjt5Q0FBQSxBQUFNO2tCQUFtQixBQUNmLEFBQ1I7OzRCQUZ1QixBQUVkLEFBQ1MsQUFFbEI7QUFIUyxBQUNQO2dCQUVJLHlCQUFlLEVBQUMsU0FMeEIsQUFBeUIsQUFLakIsQUFBZSxBQUFVO0FBTFIsQUFDdkIsV0FERixBQU1HLEtBQUssb0JBQUE7aUJBQVksU0FBWixBQUFZLEFBQVM7QUFON0IsV0FBQSxBQU9HLEtBQUssb0JBQUE7aUJBQVksT0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLFNBQXRCLEFBQStCLFNBQTNDLEFBQVksQUFBd0M7QUFQNUQsQUFRQTthQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFRLEFBQ3ZCO0FBQ0Y7Ozs7NkJBRVE7bUJBQUE7O1VBQUEsQUFDQyxRQUFVLEtBRFgsQUFDZ0IsTUFEaEIsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQTtxQkFDRSxBQUNjLEFBQ1o7ZUFGRixBQUVTLEFBQ1A7a0JBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUEsQUFBRSxPQUE3QixBQUFLLEFBQWMsQUFBaUI7QUFIaEQsQUFJRTttQkFBVyxzQkFBQTtpQkFBSyxPQUFBLEFBQUssT0FBVixBQUFLLEFBQVk7QUFKOUI7bUJBQUE7O29CQUFBO3NCQURGLEFBQ0U7QUFBQTtBQUNFO2lCQUZKO2FBREYsQUFDRSxBQStCSDtBQS9CRzs7Ozs7QUE1QjRCLEE7O2tCQUFiLEE7OztBQThEckIsS0FBQSxBQUFLO2NBQ1Msb0JBQUEsQUFBVSxLQUR4QixBQUFpQixBQUNZO0FBRFosQUFDZiIsImZpbGUiOiJDaGF0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXNyb2xsaW5zL0NvZGUtQ2hhbGxlbmdlcy9zcHJ1Y2Vib3QifQ==