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
            return _this2.setState({ track: 4 });
          }
          _this2.setState({ track: track - 1 });
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
            return _this2.setState({ track: 1 });
          }
          _this2.setState({ track: track + 1 });
        },
        className: 'jsx-3144229325',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3144229325',
        css: '.play-controls.jsx-3144229325{position:absolute;right:20px;top:10px;}img.jsx-3144229325{cursor:pointer;height:40px;margin:20px;opacity:0.7;width:40px;}img.jsx-3144229325:hover{opacity:1;}img.jsx-3144229325:active{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHK0IsQUFNSCxBQVFMLEFBSVcsVUFIdkIsS0FSYyxHQU5ELFNBT0MsRUFOSCxTQUNYLENBTWMsWUFDRCxXQUNiLGFBUUEiLCJmaWxlIjoiY29tcG9uZW50cy9QbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWNrOiAxLFxuICAgICAgaXNQbGF5aW5nOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXVkaW8udm9sdW1lID0gMC42O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhY2ssIGlzUGxheWluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BsYXktY29udHJvbHMnPlxuICAgICAgICA8YXVkaW8gc3JjPXtgLi4vc3RhdGljL211c2ljL3RyYWNrJHt0cmFja30ubXAzYH0gcmVmPXtub2RlID0+IHRoaXMuYXVkaW8gPSBub2RlfSBhdXRvUGxheSBsb29wIC8+XG4gICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcGxheS1jb250cm9scy9yZXdpbmQuc3ZnJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmKHRyYWNrID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgdHJhY2s6IDQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0cmFjazogdHJhY2sgLSAxfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aXNQbGF5aW5nID8gJy4uL3N0YXRpYy9wbGF5LWNvbnRyb2xzL3BhdXNlLWJ1dHRvbi5zdmcnIDogJy4uL3N0YXRpYy9wbGF5LWNvbnRyb2xzL3BsYXktYnV0dG9uLnN2Zyd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gKGlzUGxheWluZyA/IHRoaXMuYXVkaW8ucGF1c2UoKSA6IHRoaXMuYXVkaW8ucGxheSgpLCB0aGlzLnNldFN0YXRlKHsgaXNQbGF5aW5nOiAhaXNQbGF5aW5nIH0pKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9wbGF5LWNvbnRyb2xzL2Zhc3QtZm9yd2FyZC5zdmcnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYodHJhY2sgPT09IDQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyB0cmFjazogMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RyYWNrOiB0cmFjayArIDF9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBsYXktY29udHJvbHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZzpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZzphY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/PlayControls.js */'
      }));
    }
  }]);

  return PlayControls;
}(_react.Component);

exports.default = PlayControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGxheUNvbnRyb2xzIiwic3RhdGUiLCJ0cmFjayIsImlzUGxheWluZyIsImF1ZGlvIiwidm9sdW1lIiwibm9kZSIsInNldFN0YXRlIiwicGF1c2UiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRUs7d0NBQ25COzswQkFBYzt3Q0FBQTs7NElBRVo7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtpQkFKVSxBQUVaLEFBQWEsQUFFQTtBQUZBLEFBQ1g7V0FHSDs7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjs7Ozs2QkFFUTttQkFBQTs7bUJBQ3NCLEtBRHRCLEFBQzJCO1VBRDNCLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSxtQkFEUixBQUNRLEFBRWY7OzZCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDJDQUNTLCtCQUFBLEFBQTZCLFFBQXBDLFFBQWlELEtBQUssbUJBQUE7aUJBQVEsT0FBQSxBQUFLLFFBQWIsQUFBcUI7QUFBM0UsV0FBaUYsVUFBakYsTUFBMEYsTUFBMUYsaUJBQUE7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNLLEtBQUwsQUFBUyxBQUNQO2lCQUFTLG1CQUFNLEFBQ2I7Y0FBRyxVQUFILEFBQWEsR0FBRyxBQUNkO21CQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBdkIsQUFBTyxBQUFjLEFBQVMsQUFDL0I7QUFDRDtpQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLFFBQXRCLEFBQWMsQUFBZ0IsQUFDL0I7QUFOSDttQkFBQTs7b0JBQUE7c0JBRkYsQUFFRSxBQVFBO0FBUkE7O2FBU08sWUFBQSxBQUFZLDZDQURuQixBQUNnRSxBQUM5RDtpQkFBUyxtQkFBQTtpQkFBTyxZQUFZLE9BQUEsQUFBSyxNQUFqQixBQUFZLEFBQVcsVUFBVSxPQUFBLEFBQUssTUFBdEMsQUFBaUMsQUFBVyxRQUFRLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxDQUF0RixBQUEyRCxBQUFjLEFBQWM7QUFGbEc7bUJBQUE7O29CQUFBO3NCQVZGLEFBVUUsQUFJQTtBQUpBO0FBQ0UsaURBR0csS0FBTCxBQUFTLEFBQ1A7aUJBQVMsbUJBQU0sQUFDYjtjQUFHLFVBQUgsQUFBYSxHQUFHLEFBQ2Q7bUJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUF2QixBQUFPLEFBQWMsQUFBUyxBQUMvQjtBQUNEO2lCQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sUUFBdEIsQUFBYyxBQUFnQixBQUMvQjtBQU5IO21CQUFBOztvQkFBQTtzQkFkRixBQWNFO0FBQUE7O2lCQWRGO2FBREYsQUFDRSxBQStDSDtBQS9DRzs7Ozs7QUFqQm9DLEE7O2tCQUFyQixBIiwiZmlsZSI6IlBsYXlDb250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=