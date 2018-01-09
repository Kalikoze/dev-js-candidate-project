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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.audio.volume = 0.6;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          track = _state.track,
          isPlaying = _state.isPlaying;

      return _react2.default.createElement('section', {
        className: 'jsx-3144229325' + ' ' + 'play-controls',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('audio', { src: '../static/music/track' + track + '.mp3', ref: function ref(node) {
          return _this2.audio = node;
        }, autoPlay: true, loop: true, className: 'jsx-3144229325',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('img', { src: '../static/play-controls/rewind.svg',
        onClick: function onClick() {
          if (track === 1) {
            return _this2.setState({ track: 4, isPlaying: true });
          }
          _this2.setState({ track: track - 1, isPlaying: true });
        },
        className: 'jsx-3144229325',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('img', {
        src: isPlaying ? '../static/play-controls/pause-button.svg' : '../static/play-controls/play-button.svg',
        onClick: function onClick() {
          return isPlaying ? _this2.audio.pause() : _this2.audio.play(), _this2.setState({ isPlaying: !isPlaying });
        },
        className: 'jsx-3144229325',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('img', { src: '../static/play-controls/fast-forward.svg',
        onClick: function onClick() {
          if (track === 4) {
            return _this2.setState({ track: 1, isPlaying: true });
          }
          _this2.setState({ track: track + 1, isPlaying: true });
        },
        className: 'jsx-3144229325',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3144229325',
        css: '.play-controls.jsx-3144229325{position:absolute;right:20px;top:10px;}img.jsx-3144229325{cursor:pointer;height:40px;margin:20px;opacity:0.7;width:40px;}img.jsx-3144229325:hover{opacity:1;}img.jsx-3144229325:active{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHK0IsQUFNSCxBQVFMLEFBSVcsVUFIdkIsS0FSYyxHQU5ELFNBT0MsRUFOSCxTQUNYLENBTWMsWUFDRCxXQUNiLGFBUUEiLCJmaWxlIjoiY29tcG9uZW50cy9QbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWNrOiAxLFxuICAgICAgaXNQbGF5aW5nOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXVkaW8udm9sdW1lID0gMC42O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhY2ssIGlzUGxheWluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BsYXktY29udHJvbHMnPlxuICAgICAgICA8YXVkaW8gc3JjPXtgLi4vc3RhdGljL211c2ljL3RyYWNrJHt0cmFja30ubXAzYH0gcmVmPXtub2RlID0+IHRoaXMuYXVkaW8gPSBub2RlfSBhdXRvUGxheSBsb29wIC8+XG4gICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcGxheS1jb250cm9scy9yZXdpbmQuc3ZnJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmKHRyYWNrID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgdHJhY2s6IDQsIGlzUGxheWluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RyYWNrOiB0cmFjayAtIDEsIGlzUGxheWluZzogdHJ1ZX0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2lzUGxheWluZyA/ICcuLi9zdGF0aWMvcGxheS1jb250cm9scy9wYXVzZS1idXR0b24uc3ZnJyA6ICcuLi9zdGF0aWMvcGxheS1jb250cm9scy9wbGF5LWJ1dHRvbi5zdmcnfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChpc1BsYXlpbmcgPyB0aGlzLmF1ZGlvLnBhdXNlKCkgOiB0aGlzLmF1ZGlvLnBsYXkoKSwgdGhpcy5zZXRTdGF0ZSh7IGlzUGxheWluZzogIWlzUGxheWluZyB9KSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcGxheS1jb250cm9scy9mYXN0LWZvcndhcmQuc3ZnJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmKHRyYWNrID09PSA0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgdHJhY2s6IDEsIGlzUGxheWluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RyYWNrOiB0cmFjayArIDEsIGlzUGxheWluZzogdHJ1ZX0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucGxheS1jb250cm9scyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nOmFjdGl2ZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/PlayControls.js */'
      }));
    }
  }]);

  return PlayControls;
}(_react.Component);

exports.default = PlayControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGxheUNvbnRyb2xzIiwic3RhdGUiLCJ0cmFjayIsImlzUGxheWluZyIsImF1ZGlvIiwidm9sdW1lIiwibm9kZSIsInNldFN0YXRlIiwicGF1c2UiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVLLEE7d0NBQ25COzswQkFBYzt3Q0FBQTs7NElBRVo7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtpQkFKVSxBQUVaLEFBQWEsQUFFQTtBQUZBLEFBQ1g7V0FHSDs7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjs7Ozs2QkFFUTttQkFBQTs7bUJBQ3NCLEtBRHRCLEFBQzJCO1VBRDNCLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSxtQkFEUixBQUNRLEFBRWY7OzZCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDJDQUNTLCtCQUFBLEFBQTZCLFFBQXBDLFFBQWlELEtBQUssbUJBQUE7aUJBQVEsT0FBQSxBQUFLLFFBQWIsQUFBcUI7QUFBM0UsV0FBaUYsVUFBakYsTUFBMEYsTUFBMUYsaUJBQUE7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNLLEtBQUwsQUFBUyxBQUNQO2lCQUFTLG1CQUFNLEFBQ2I7Y0FBRyxVQUFILEFBQWEsR0FBRyxBQUNkO21CQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBRixBQUFTLEdBQUcsV0FBakMsQUFBTyxBQUFjLEFBQXVCLEFBQzdDO0FBQ0Q7aUJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxRQUFSLEFBQWdCLEdBQUcsV0FBakMsQUFBYyxBQUE4QixBQUM3QztBQU5IO21CQUFBOztvQkFBQTtzQkFGRixBQUVFLEFBUUE7QUFSQTs7YUFTTyxZQUFBLEFBQVksNkNBRG5CLEFBQ2dFLEFBQzlEO2lCQUFTLG1CQUFBO2lCQUFPLFlBQVksT0FBQSxBQUFLLE1BQWpCLEFBQVksQUFBVyxVQUFVLE9BQUEsQUFBSyxNQUF0QyxBQUFpQyxBQUFXLFFBQVEsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLENBQXRGLEFBQTJELEFBQWMsQUFBYztBQUZsRzttQkFBQTs7b0JBQUE7c0JBVkYsQUFVRSxBQUlBO0FBSkE7QUFDRSxpREFHRyxLQUFMLEFBQVMsQUFDUDtpQkFBUyxtQkFBTSxBQUNiO2NBQUcsVUFBSCxBQUFhLEdBQUcsQUFDZDttQkFBTyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQUYsQUFBUyxHQUFHLFdBQWpDLEFBQU8sQUFBYyxBQUF1QixBQUM3QztBQUNEO2lCQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sUUFBUixBQUFnQixHQUFHLFdBQWpDLEFBQWMsQUFBOEIsQUFDN0M7QUFOSDttQkFBQTs7b0JBQUE7c0JBZEYsQUFjRTtBQUFBOztpQkFkRjthQURGLEFBQ0UsQUErQ0g7QUEvQ0c7Ozs7O0FBakJvQyxBOztrQkFBckIsQSIsImZpbGUiOiJQbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9