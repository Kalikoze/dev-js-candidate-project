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

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/components/Layout.js';


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('section', {
    className: 'jsx-2146746531' + ' ' + 'layout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('video', { src: '../static/ambient-background.mp4', autoPlay: true, loop: true, className: 'jsx-2146746531',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('audio', { src: '../static/ambiance.mp3', autoPlay: true, loop: true, className: 'jsx-2146746531',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('section', {
    className: 'jsx-2146746531' + ' ' + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: '2146746531',
    css: '.layout.jsx-2146746531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;width:100%;}video.jsx-2146746531{height:100%;object-fit:fill;width:100%;}.container.jsx-2146746531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQixBQUdzQixBQU1ELEFBTUMsWUFMRyxnQkFDTCxXQUNiLG1DQVJlLEFBWUUsYUFYSixXQUNiLGlDQVdlLGFBQ1UsbUdBQ0wsa0JBQ1AsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPSdsYXlvdXQnPlxuICAgIDx2aWRlbyBzcmM9Jy4uL3N0YXRpYy9hbWJpZW50LWJhY2tncm91bmQubXA0JyBhdXRvUGxheSBsb29wIC8+XG4gICAgPGF1ZGlvIHNyYz0nLi4vc3RhdGljL2FtYmlhbmNlLm1wMycgYXV0b1BsYXkgbG9vcC8+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGF5b3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIHZpZGVvIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=components/Layout.js */'
  }));
};

Layout.propTypes = {
  children: _propTypes2.default.array.isRequired
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBO3dDQUFBLEFBQW1COztnQkFBbkI7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSwyQ0FDUyxLQUFQLEFBQVcsb0NBQW1DLFVBQTlDLE1BQXVELE1BQXZELGlCQUFBOztnQkFBQTtrQkFERixBQUNFLEFBQ0E7QUFEQTsrQ0FDTyxLQUFQLEFBQVcsMEJBQXlCLFVBQXBDLE1BQTZDLE1BQTdDLGlCQUFBOztnQkFBQTtrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBO3dDQUFBLEFBQW1COztnQkFBbkI7a0JBQUEsQUFDRztBQURIO0FBQUEsS0FIRixBQUdFO2FBSEY7U0FEYSxBQUNiO0FBQUE7QUFERjs7QUFnQ0EsT0FBQSxBQUFPO1lBQ0ssb0JBQUEsQUFBVSxNQUR0QixBQUFtQixBQUNTLEFBRzVCO0FBSm1CLEFBQ2pCOztrQkFHRixBQUFlIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=