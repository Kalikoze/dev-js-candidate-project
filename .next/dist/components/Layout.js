'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/components/Layout.js';


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('section', { className: 'layout', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('video', { src: '../static/ambient-background.mp4', autoPlay: true, loop: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('audio', { src: '../static/ambiance.mp3', autoPlay: true, loop: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('section', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, children));
};

Layout.propTypes = {
  children: _propTypes2.default.array.isRequired
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBQ2hCLGNBQUEsYUFBUyxXQUFULEFBQW1CO2dCQUFuQjtrQkFBQSxBQUNFO0FBREY7R0FBQSwyQ0FDUyxLQUFQLEFBQVcsb0NBQW1DLFVBQTlDLE1BQXVELE1BQXZEO2dCQUFBO2tCQURGLEFBQ0UsQUFDQTtBQURBOytDQUNPLEtBQVAsQUFBVywwQkFBeUIsVUFBcEMsTUFBNkMsTUFBN0M7Z0JBQUE7a0JBRkYsQUFFRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxhQUFTLFdBQVQsQUFBbUI7Z0JBQW5CO2tCQUFBLEFBQ0c7QUFESDtLQUpXLEFBQ2IsQUFHRTtBQUpKOztBQVVBLE9BQUEsQUFBTztZQUNLLG9CQUFBLEFBQVUsTUFEdEIsQUFBbUIsQUFDUyxBQUc1QjtBQUptQixBQUNqQjs7a0JBR0YsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9