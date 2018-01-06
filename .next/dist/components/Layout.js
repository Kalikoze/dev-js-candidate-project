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
    className: 'jsx-3591313506' + ' ' + 'layout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('video', { src: '../static/ambient-background.mp4', autoPlay: true, loop: true, className: 'jsx-3591313506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('audio', { src: '../static/ambiance.mp3', autoPlay: true, loop: true, className: 'jsx-3591313506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('section', {
    className: 'jsx-3591313506' + ' ' + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: '3591313506',
    css: '.layout.jsx-3591313506{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;width:100%;}video.jsx-3591313506{height:100%;object-fit:fill;width:100%;}.container.jsx-3591313506{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQixBQUdzQixBQU1ELEFBTUMsWUFMRyxDQU1ILGVBTEYsV0FDYixtQ0FSZSxhQUNGLEFBWUksV0FYakIsOENBWXlCLG1HQUNMLGtCQUNQLFdBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT0nbGF5b3V0Jz5cbiAgICA8dmlkZW8gc3JjPScuLi9zdGF0aWMvYW1iaWVudC1iYWNrZ3JvdW5kLm1wNCcgYXV0b1BsYXkgbG9vcCAvPlxuICAgIDxhdWRpbyBzcmM9Jy4uL3N0YXRpYy9hbWJpYW5jZS5tcDMnIGF1dG9QbGF5IGxvb3AvPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICB2aWRlbyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=components/Layout.js */'
  }));
};

Layout.propTypes = {
  children: _propTypes2.default.array.isRequired
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBO3dDQUFBLEFBQW1COztnQkFBbkI7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSwyQ0FDUyxLQUFQLEFBQVcsb0NBQW1DLFVBQTlDLE1BQXVELE1BQXZELGlCQUFBOztnQkFBQTtrQkFERixBQUNFLEFBQ0E7QUFEQTsrQ0FDTyxLQUFQLEFBQVcsMEJBQXlCLFVBQXBDLE1BQTZDLE1BQTdDLGlCQUFBOztnQkFBQTtrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBO3dDQUFBLEFBQW1COztnQkFBbkI7a0JBQUEsQUFDRztBQURIO0FBQUEsS0FIRixBQUdFO2FBSEY7U0FEYSxBQUNiO0FBQUE7QUFERjs7QUFnQ0EsT0FBQSxBQUFPO1lBQ0ssb0JBQUEsQUFBVSxNQUR0QixBQUFtQixBQUNTLEFBRzVCO0FBSm1CLEFBQ2pCOztrQkFHRixBQUFlIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=