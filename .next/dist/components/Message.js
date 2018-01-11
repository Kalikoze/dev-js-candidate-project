'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/components/Message.js';


var Message = function Message(_ref) {
  var text = _ref.text,
      isUser = _ref.isUser;
  return _react2.default.createElement('section', {
    className: 'jsx-2578047880' + ' ' + ((isUser ? 'message' : 'message watson') || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('p', {
    className: 'jsx-2578047880',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, text), _react2.default.createElement(_style2.default, {
    styleId: '2578047880',
    css: '.message.jsx-2578047880{background:rgba(255,255,255,0.8);border-radius:.6em;font-family:\'Lato\',sans-serif;font-size:1.5em;height:auto;margin:20px;padding:25px;position:relative;width:70%;}.message.jsx-2578047880:after{border:10px solid transparent;border-right-color:rgba(255,255,255,0.8);border-bottom:0;border-left:0;content:\'\';height:0;left:0;margin-left:-10px;position:absolute;top:70%;width:0;}.watson.jsx-2578047880{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;color:#FFF;background:rgba(95,140,200,0.8);}.watson.jsx-2578047880:after{border:10px solid transparent;border-left-color:rgba(95,140,200,0.8);border-right:0;border-bottom:0;left:auto;margin-right:-10px;right:0;}@media (max-width:950px){.message.jsx-2578047880{font-size:16px;width:90%;}}@media (max-width:600px){.message.jsx-2578047880{font-size:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZ0IsQUF3RDZDLEFBWU4sQUFjVixBQU1VLEFBV2IsQUFNUSxlQUxiLEFBS2MsVUFKMUIsS0FoQzRDLEFBb0JGLEdBaEN2QixtQkFDWSxpQkFnQ2hCLEVBcEJDLENBYUwsVUF4QkssQ0F5Qm1CLENBT25CLEdBcEJGLFdBWEYsRUFnQ0YsQ0FwQkMsU0FYQyxBQWdDTyxFQXBCVixHQVlYLE1BWFMsQ0FaTSxNQWFLLENBbUJYLE1BL0JXLEVBZ0NwQixTQW5Cb0IsT0FaUixVQUNaLENBWVUsUUFDQSxRQUNWIiwiZmlsZSI6ImNvbXBvbmVudHMvTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IE1lc3NhZ2UgPSAoeyB0ZXh0LCBpc1VzZXIgfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2lzVXNlciA/ICdtZXNzYWdlJyA6ICdtZXNzYWdlIHdhdHNvbid9PlxuICAgIDxwPnsgdGV4dCB9PC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNmVtO1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuXG4gICAgICAubWVzc2FnZTphZnRlciB7XG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA3MCU7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAud2F0c29uIHtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk1LCAxNDAsIDIwMCwgMC44KTtcbiAgICAgIH1cblxuICAgICAgLndhdHNvbjphZnRlciB7XG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoOTUsIDE0MCwgMjAwLCAwLjgpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgICBcdHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAubWVzc2FnZSB7IGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNVc2VyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiJdfQ== */\n/*@ sourceURL=components/Message.js */'
  }));
};

Message.propTypes = {
  text: _propTypes2.default.string.isRequired,
  isUser: _propTypes2.default.bool.isRequired
};

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIk1lc3NhZ2UiLCJ0ZXh0IiwiaXNVc2VyIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxVQUFVLFNBQVYsQUFBVSxjQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7TUFBSCxBQUFTLGNBQVQsQUFBUzt5QkFDdkIsY0FBQTswQ0FBb0IsU0FBQSxBQUFTLFlBQTdCLEFBQXlDLHFCQUF6Qzs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBREYsQUFDRTthQURGO1NBRGMsQUFDZDtBQUFBO0FBREY7O0FBNERBLFFBQUEsQUFBUTtRQUNBLG9CQUFBLEFBQVUsT0FERSxBQUNLLEFBQ3ZCO1VBQVEsb0JBQUEsQUFBVSxLQUZwQixBQUFvQixBQUVLLEFBR3pCO0FBTG9CLEFBQ2xCOztrQkFJRixBQUFlIiwiZmlsZSI6Ik1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9