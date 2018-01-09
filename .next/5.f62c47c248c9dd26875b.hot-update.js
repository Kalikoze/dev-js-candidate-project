webpackHotUpdate(5,{

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/components/PlayControls.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/components/PlayControls.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNjJjNDdjMjQ4YzlkZDI2ODc1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5Q29udHJvbHMuanM/OTc4YzAxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cmFjazogMSxcbiAgICAgIGlzUGxheWluZzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmF1ZGlvLnZvbHVtZSA9IDAuNjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYWNrLCBpc1BsYXlpbmcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwbGF5LWNvbnRyb2xzJz5cbiAgICAgICAgPGF1ZGlvIHNyYz17YC4uL3N0YXRpYy9tdXNpYy90cmFjayR7dHJhY2t9Lm1wM2B9IHJlZj17bm9kZSA9PiB0aGlzLmF1ZGlvID0gbm9kZX0gYXV0b1BsYXkgbG9vcCAvPlxuICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3BsYXktY29udHJvbHMvcmV3aW5kLnN2ZydcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZih0cmFjayA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHRyYWNrOiA0LCBpc1BsYXlpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0cmFjazogdHJhY2sgLSAxLCBpc1BsYXlpbmc6IHRydWV9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpc1BsYXlpbmcgPyAnLi4vc3RhdGljL3BsYXktY29udHJvbHMvcGF1c2UtYnV0dG9uLnN2ZycgOiAnLi4vc3RhdGljL3BsYXktY29udHJvbHMvcGxheS1idXR0b24uc3ZnJ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoaXNQbGF5aW5nID8gdGhpcy5hdWRpby5wYXVzZSgpIDogdGhpcy5hdWRpby5wbGF5KCksIHRoaXMuc2V0U3RhdGUoeyBpc1BsYXlpbmc6ICFpc1BsYXlpbmcgfSkpfVxuICAgICAgICAvPlxuICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3BsYXktY29udHJvbHMvZmFzdC1mb3J3YXJkLnN2ZydcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZih0cmFjayA9PT0gNCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHRyYWNrOiAxLCBpc1BsYXlpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0cmFjazogdHJhY2sgKyAxLCBpc1BsYXlpbmc6IHRydWV9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBsYXktY29udHJvbHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZzpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZzphY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBR0E7Ozs7O0FBR0E7QUFBQTs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFBQTs7QUFBQTtBQVFBO0FBUkE7O0FBU0E7QUFDQTtBQUFBO0FBRkE7QUFBQTs7QUFBQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFkQTtBQStDQTtBQS9DQTs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==