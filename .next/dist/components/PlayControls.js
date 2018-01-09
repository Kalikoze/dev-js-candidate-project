'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/components/PlayControls.js';


var PlayControls = function (_Component) {
  (0, _inherits3.default)(PlayControls, _Component);

  function PlayControls() {
    (0, _classCallCheck3.default)(this, PlayControls);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PlayControls.__proto__ || (0, _getPrototypeOf2.default)(PlayControls)).call(this));

    _this.state = {
      track: 1,
      isPlaying: true
    };
    return _this;
  }

  (0, _createClass3.default)(PlayControls, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          track = _state.track,
          isPlaying = _state.isPlaying;

      var audio = ['../static/track1.mp3'];

      return _react2.default.createElement('section', {
        className: 'jsx-814015524' + ' ' + 'play-controls',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('audio', { src: '../static/music/track' + track + '.mp3', ref: function ref(node) {
          return _this2.audio = node;
        }, autoPlay: true, loop: true, className: 'jsx-814015524',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('img', { src: '../static/play-controls/rewind.svg',
        onClick: function onClick() {
          if (track === 1) {
            return _this2.setState({ track: 4 });
          }
          _this2.setState({ track: track - 1 });
        },
        className: 'jsx-814015524',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('img', {
        src: isPlaying ? '../static/play-controls/pause-button.svg' : '../static/play-controls/play-button.svg',
        onClick: function onClick() {
          return isPlaying ? _this2.audio.pause() : _this2.audio.play(), _this2.setState({ isPlaying: !isPlaying });
        },
        className: 'jsx-814015524',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('img', { src: '../static/play-controls/fast-forward.svg',
        onClick: function onClick() {
          if (track === 4) {
            return _this2.setState({ track: 1 });
          }
          _this2.setState({ track: track + 1 });
        },
        className: 'jsx-814015524',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '814015524',
        css: '.play-controls.jsx-814015524{position:absolute;right:20px;top:0;}img.jsx-814015524{cursor:pointer;height:40px;margin:20px;opacity:0.7;width:40px;}img.jsx-814015524:hover{opacity:1;}img.jsx-814015524:active{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHK0IsQUFNSCxBQVFMLEFBSVcsVUFIdkIsS0FSYyxHQU5ELFNBT0MsRUFOTixNQUNSLElBTWMsWUFDRCxXQUNiLGFBUUEiLCJmaWxlIjoiY29tcG9uZW50cy9QbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWNrOiAxLFxuICAgICAgaXNQbGF5aW5nOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYWNrLCBpc1BsYXlpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXVkaW8gPSBbJy4uL3N0YXRpYy90cmFjazEubXAzJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwbGF5LWNvbnRyb2xzJz5cbiAgICAgICAgPGF1ZGlvIHNyYz17YC4uL3N0YXRpYy9tdXNpYy90cmFjayR7dHJhY2t9Lm1wM2B9IHJlZj17bm9kZSA9PiB0aGlzLmF1ZGlvID0gbm9kZX0gYXV0b1BsYXkgbG9vcCAvPlxuICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3BsYXktY29udHJvbHMvcmV3aW5kLnN2ZydcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZih0cmFjayA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHRyYWNrOiA0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dHJhY2s6IHRyYWNrIC0gMX0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2lzUGxheWluZyA/ICcuLi9zdGF0aWMvcGxheS1jb250cm9scy9wYXVzZS1idXR0b24uc3ZnJyA6ICcuLi9zdGF0aWMvcGxheS1jb250cm9scy9wbGF5LWJ1dHRvbi5zdmcnfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChpc1BsYXlpbmcgPyB0aGlzLmF1ZGlvLnBhdXNlKCkgOiB0aGlzLmF1ZGlvLnBsYXkoKSwgdGhpcy5zZXRTdGF0ZSh7IGlzUGxheWluZzogIWlzUGxheWluZyB9KSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcGxheS1jb250cm9scy9mYXN0LWZvcndhcmQuc3ZnJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmKHRyYWNrID09PSA0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgdHJhY2s6IDEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0cmFjazogdHJhY2sgKyAxfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wbGF5LWNvbnRyb2xzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWc6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWc6YWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/PlayControls.js */'
      }));
    }
  }]);

  return PlayControls;
}(_react.Component);

exports.default = PlayControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGxheUNvbnRyb2xzIiwic3RhdGUiLCJ0cmFjayIsImlzUGxheWluZyIsImF1ZGlvIiwibm9kZSIsInNldFN0YXRlIiwicGF1c2UiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVLLEE7d0NBQ25COzswQkFBYzt3Q0FBQTs7NElBRVo7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtpQkFKVSxBQUVaLEFBQWEsQUFFQTtBQUZBLEFBQ1g7V0FHSDs7Ozs7NkJBRVE7bUJBQUE7O21CQUNzQixLQUR0QixBQUMyQjtVQUQzQixBQUNDLGVBREQsQUFDQztVQURELEFBQ1EsbUJBRFIsQUFDUSxBQUNmOztVQUFNLFFBQVEsQ0FBZCxBQUFjLEFBQUMsQUFFZjs7NkJBQ0UsY0FBQTsyQ0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsMkNBQ1MsK0JBQUEsQUFBNkIsUUFBcEMsUUFBaUQsS0FBSyxtQkFBQTtpQkFBUSxPQUFBLEFBQUssUUFBYixBQUFxQjtBQUEzRSxXQUFpRixVQUFqRixNQUEwRixNQUExRixpQkFBQTs7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7aURBQ0ssS0FBTCxBQUFTLEFBQ1A7aUJBQVMsbUJBQU0sQUFDYjtjQUFHLFVBQUgsQUFBYSxHQUFHLEFBQ2Q7bUJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUF2QixBQUFPLEFBQWMsQUFBUyxBQUMvQjtBQUNEO2lCQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sUUFBdEIsQUFBYyxBQUFnQixBQUMvQjtBQU5IO21CQUFBOztvQkFBQTtzQkFGRixBQUVFLEFBUUE7QUFSQTs7YUFTTyxZQUFBLEFBQVksNkNBRG5CLEFBQ2dFLEFBQzlEO2lCQUFTLG1CQUFBO2lCQUFPLFlBQVksT0FBQSxBQUFLLE1BQWpCLEFBQVksQUFBVyxVQUFVLE9BQUEsQUFBSyxNQUF0QyxBQUFpQyxBQUFXLFFBQVEsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLENBQXRGLEFBQTJELEFBQWMsQUFBYztBQUZsRzttQkFBQTs7b0JBQUE7c0JBVkYsQUFVRSxBQUlBO0FBSkE7QUFDRSxpREFHRyxLQUFMLEFBQVMsQUFDUDtpQkFBUyxtQkFBTSxBQUNiO2NBQUcsVUFBSCxBQUFhLEdBQUcsQUFDZDttQkFBTyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQXZCLEFBQU8sQUFBYyxBQUFTLEFBQy9CO0FBQ0Q7aUJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxRQUF0QixBQUFjLEFBQWdCLEFBQy9CO0FBTkg7bUJBQUE7O29CQUFBO3NCQWRGLEFBY0U7QUFBQTs7aUJBZEY7YUFERixBQUNFLEFBK0NIO0FBL0NHOzs7OztBQWRvQyxBOztrQkFBckIsQSIsImZpbGUiOiJQbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9