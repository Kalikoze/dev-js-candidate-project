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
        className: 'jsx-1701706752' + ' ' + 'play-controls',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('audio', { src: '../static/music/track' + track + '.mp3', ref: function ref(node) {
          return _this2.audio = node;
        }, autoPlay: true, loop: true, className: 'jsx-1701706752',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('img', {
        src: '../static/play-controls/rewind.svg',
        onClick: function onClick() {
          return track === 1 ? _this2.setState({ track: 4, isPlaying: true }) : _this2.setState({ track: track - 1, isPlaying: true });
        },
        className: 'jsx-1701706752',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('img', {
        src: isPlaying ? '../static/play-controls/pause-button.svg' : '../static/play-controls/play-button.svg',
        onClick: function onClick() {
          return isPlaying ? _this2.audio.pause() : _this2.audio.play(), _this2.setState({ isPlaying: !isPlaying });
        },
        className: 'jsx-1701706752',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('img', {
        src: '../static/play-controls/fast-forward.svg',
        onClick: function onClick() {
          return track === 4 ? _this2.setState({ track: 1, isPlaying: true }) : _this2.setState({ track: track + 1, isPlaying: true });
        },
        className: 'jsx-1701706752',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1701706752',
        css: '.play-controls.jsx-1701706752{position:absolute;right:20px;top:10px;}img.jsx-1701706752{cursor:pointer;height:40px;margin:20px;opacity:0.7;}img.jsx-1701706752:hover{opacity:1;}img.jsx-1701706752:active{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}@media (max-width:950px){img.jsx-1701706752{height:25px;}}@media (max-width:700px){.play-controls.jsx-1701706752{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;left:0;margin:auto;right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDb0IsQUFHK0IsQUFNSCxBQU9MLEFBSVcsQUFLUCxBQU1PLFVBZHZCLEVBU0UsR0FoQlksR0FORCxTQU9DLEVBTkgsU0FDWCxDQU1jLFlBQ2Qsd0JBUUEsa0JBV2lCLDBFQUNVLG1HQUNoQixPQUNLLFlBQ0osUUFDViIsImZpbGUiOiJjb21wb25lbnRzL1BsYXlDb250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhY2s6IDEsXG4gICAgICBpc1BsYXlpbmc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hdWRpby52b2x1bWUgPSAwLjY7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmFjaywgaXNQbGF5aW5nIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGxheS1jb250cm9scyc+XG4gICAgICAgIDxhdWRpbyBzcmM9e2AuLi9zdGF0aWMvbXVzaWMvdHJhY2ske3RyYWNrfS5tcDNgfSByZWY9e25vZGUgPT4gdGhpcy5hdWRpbyA9IG5vZGV9IGF1dG9QbGF5IGxvb3AgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3BsYXktY29udHJvbHMvcmV3aW5kLnN2ZydcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0cmFjayA9PT0gMSA/IHRoaXMuc2V0U3RhdGUoeyB0cmFjazogNCwgaXNQbGF5aW5nOiB0cnVlIH0pIDogdGhpcy5zZXRTdGF0ZSh7dHJhY2s6IHRyYWNrIC0gMSwgaXNQbGF5aW5nOiB0cnVlfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2lzUGxheWluZyA/ICcuLi9zdGF0aWMvcGxheS1jb250cm9scy9wYXVzZS1idXR0b24uc3ZnJyA6ICcuLi9zdGF0aWMvcGxheS1jb250cm9scy9wbGF5LWJ1dHRvbi5zdmcnfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChpc1BsYXlpbmcgPyB0aGlzLmF1ZGlvLnBhdXNlKCkgOiB0aGlzLmF1ZGlvLnBsYXkoKSwgdGhpcy5zZXRTdGF0ZSh7IGlzUGxheWluZzogIWlzUGxheWluZyB9KSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9wbGF5LWNvbnRyb2xzL2Zhc3QtZm9yd2FyZC5zdmcnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdHJhY2sgPT09IDQgPyB0aGlzLnNldFN0YXRlKHsgdHJhY2s6IDEsIGlzUGxheWluZzogdHJ1ZSB9KSA6IHRoaXMuc2V0U3RhdGUoe3RyYWNrOiB0cmFjayArIDEsIGlzUGxheWluZzogdHJ1ZX0pfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBsYXktY29udHJvbHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWc6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWc6YWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIC5wbGF5LWNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/PlayControls.js */'
      }));
    }
  }]);

  return PlayControls;
}(_react.Component);

exports.default = PlayControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGxheUNvbnRyb2xzIiwic3RhdGUiLCJ0cmFjayIsImlzUGxheWluZyIsImF1ZGlvIiwidm9sdW1lIiwibm9kZSIsInNldFN0YXRlIiwicGF1c2UiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRUs7d0NBQ25COzswQkFBYzt3Q0FBQTs7NElBRVo7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtpQkFKVSxBQUVaLEFBQWEsQUFFQTtBQUZBLEFBQ1g7V0FHSDs7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjs7Ozs2QkFFUTttQkFBQTs7bUJBQ3NCLEtBRHRCLEFBQzJCO1VBRDNCLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSxtQkFEUixBQUNRLEFBRWY7OzZCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDJDQUNTLCtCQUFBLEFBQTZCLFFBQXBDLFFBQWlELEtBQUssbUJBQUE7aUJBQVEsT0FBQSxBQUFLLFFBQWIsQUFBcUI7QUFBM0UsV0FBaUYsVUFBakYsTUFBMEYsTUFBMUYsaUJBQUE7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzthQUNBLEFBQ00sQUFDSjtpQkFBUyxtQkFBQTtpQkFBTSxVQUFBLEFBQVUsSUFBSSxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQUYsQUFBUyxHQUFHLFdBQXhDLEFBQWMsQUFBYyxBQUF1QixVQUFVLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxRQUFSLEFBQWdCLEdBQUcsV0FBcEcsQUFBbUUsQUFBYyxBQUE4QjtBQUYxSDttQkFBQTs7b0JBQUE7c0JBRkYsQUFFRSxBQUlBO0FBSkE7QUFDRTthQUlLLFlBQUEsQUFBWSw2Q0FEbkIsQUFDZ0UsQUFDOUQ7aUJBQVMsbUJBQUE7aUJBQU8sWUFBWSxPQUFBLEFBQUssTUFBakIsQUFBWSxBQUFXLFVBQVUsT0FBQSxBQUFLLE1BQXRDLEFBQWlDLEFBQVcsUUFBUSxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsQ0FBdEYsQUFBMkQsQUFBYyxBQUFjO0FBRmxHO21CQUFBOztvQkFBQTtzQkFORixBQU1FLEFBSUE7QUFKQTtBQUNFO2FBR0YsQUFDTSxBQUNKO2lCQUFTLG1CQUFBO2lCQUFNLFVBQUEsQUFBVSxJQUFJLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBRixBQUFTLEdBQUcsV0FBeEMsQUFBYyxBQUFjLEFBQXVCLFVBQVUsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLFFBQVIsQUFBZ0IsR0FBRyxXQUFwRyxBQUFtRSxBQUFjLEFBQThCO0FBRjFIO21CQUFBOztvQkFBQTtzQkFWRixBQVVFO0FBQUE7QUFDRTtpQkFYSjthQURGLEFBQ0UsQUF1REg7QUF2REc7Ozs7O0FBakJvQyxBOztrQkFBckIsQSIsImZpbGUiOiJQbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9