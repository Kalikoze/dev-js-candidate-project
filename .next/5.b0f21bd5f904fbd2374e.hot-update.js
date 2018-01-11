webpackHotUpdate(5,{

/***/ 454:
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

var _style = __webpack_require__(392);

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
      }), _react2.default.createElement('img', {
        src: '../static/play-controls/rewind.svg',
        onClick: function onClick() {
          return track === 1 ? _this2.setState({ track: 4, isPlaying: true }) : _this2.setState({ track: track - 1, isPlaying: true });
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
          lineNumber: 26
        }
      }), _react2.default.createElement('img', {
        src: '../static/play-controls/fast-forward.svg',
        onClick: function onClick() {
          return track === 4 ? _this2.setState({ track: 1, isPlaying: true }) : _this2.setState({ track: track + 1, isPlaying: true });
        },
        className: 'jsx-3144229325',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3144229325',
        css: '.play-controls.jsx-3144229325{position:absolute;right:20px;top:10px;}img.jsx-3144229325{cursor:pointer;height:40px;margin:20px;opacity:0.7;width:40px;}img.jsx-3144229325:hover{opacity:1;}img.jsx-3144229325:active{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDb0IsQUFHK0IsQUFNSCxBQVFMLEFBSVcsVUFIdkIsS0FSYyxHQU5ELFNBT0MsRUFOSCxTQUNYLENBTWMsWUFDRCxXQUNiLGFBUUEiLCJmaWxlIjoiY29tcG9uZW50cy9QbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWNrOiAxLFxuICAgICAgaXNQbGF5aW5nOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXVkaW8udm9sdW1lID0gMC42O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhY2ssIGlzUGxheWluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BsYXktY29udHJvbHMnPlxuICAgICAgICA8YXVkaW8gc3JjPXtgLi4vc3RhdGljL211c2ljL3RyYWNrJHt0cmFja30ubXAzYH0gcmVmPXtub2RlID0+IHRoaXMuYXVkaW8gPSBub2RlfSBhdXRvUGxheSBsb29wIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9wbGF5LWNvbnRyb2xzL3Jld2luZC5zdmcnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdHJhY2sgPT09IDEgPyB0aGlzLnNldFN0YXRlKHsgdHJhY2s6IDQsIGlzUGxheWluZzogdHJ1ZSB9KSA6IHRoaXMuc2V0U3RhdGUoe3RyYWNrOiB0cmFjayAtIDEsIGlzUGxheWluZzogdHJ1ZX0pfVxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpc1BsYXlpbmcgPyAnLi4vc3RhdGljL3BsYXktY29udHJvbHMvcGF1c2UtYnV0dG9uLnN2ZycgOiAnLi4vc3RhdGljL3BsYXktY29udHJvbHMvcGxheS1idXR0b24uc3ZnJ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoaXNQbGF5aW5nID8gdGhpcy5hdWRpby5wYXVzZSgpIDogdGhpcy5hdWRpby5wbGF5KCksIHRoaXMuc2V0U3RhdGUoeyBpc1BsYXlpbmc6ICFpc1BsYXlpbmcgfSkpfVxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPScuLi9zdGF0aWMvcGxheS1jb250cm9scy9mYXN0LWZvcndhcmQuc3ZnJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRyYWNrID09PSA0ID8gdGhpcy5zZXRTdGF0ZSh7IHRyYWNrOiAxLCBpc1BsYXlpbmc6IHRydWUgfSkgOiB0aGlzLnNldFN0YXRlKHt0cmFjazogdHJhY2sgKyAxLCBpc1BsYXlpbmc6IHRydWV9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wbGF5LWNvbnRyb2xzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWc6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWc6YWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/PlayControls.js */'
      }));
    }
  }]);

  return PlayControls;
}(_react.Component);

exports.default = PlayControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheUNvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGxheUNvbnRyb2xzIiwic3RhdGUiLCJ0cmFjayIsImlzUGxheWluZyIsImF1ZGlvIiwidm9sdW1lIiwibm9kZSIsInNldFN0YXRlIiwicGF1c2UiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRUs7d0NBQ25COzswQkFBYzt3Q0FBQTs7NElBRVo7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtpQkFKVSxBQUVaLEFBQWEsQUFFQTtBQUZBLEFBQ1g7V0FHSDs7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjs7Ozs2QkFFUTttQkFBQTs7bUJBQ3NCLEtBRHRCLEFBQzJCO1VBRDNCLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSxtQkFEUixBQUNRLEFBRWY7OzZCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDJDQUNTLCtCQUFBLEFBQTZCLFFBQXBDLFFBQWlELEtBQUssbUJBQUE7aUJBQVEsT0FBQSxBQUFLLFFBQWIsQUFBcUI7QUFBM0UsV0FBaUYsVUFBakYsTUFBMEYsTUFBMUYsaUJBQUE7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzthQUNBLEFBQ00sQUFDSjtpQkFBUyxtQkFBQTtpQkFBTSxVQUFBLEFBQVUsSUFBSSxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQUYsQUFBUyxHQUFHLFdBQXhDLEFBQWMsQUFBYyxBQUF1QixVQUFVLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxRQUFSLEFBQWdCLEdBQUcsV0FBcEcsQUFBbUUsQUFBYyxBQUE4QjtBQUYxSDttQkFBQTs7b0JBQUE7c0JBRkYsQUFFRSxBQUlBO0FBSkE7QUFDRTthQUlLLFlBQUEsQUFBWSw2Q0FEbkIsQUFDZ0UsQUFDOUQ7aUJBQVMsbUJBQUE7aUJBQU8sWUFBWSxPQUFBLEFBQUssTUFBakIsQUFBWSxBQUFXLFVBQVUsT0FBQSxBQUFLLE1BQXRDLEFBQWlDLEFBQVcsUUFBUSxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsQ0FBdEYsQUFBMkQsQUFBYyxBQUFjO0FBRmxHO21CQUFBOztvQkFBQTtzQkFORixBQU1FLEFBSUE7QUFKQTtBQUNFO2FBR0YsQUFDTSxBQUNKO2lCQUFTLG1CQUFBO2lCQUFNLFVBQUEsQUFBVSxJQUFJLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBRixBQUFTLEdBQUcsV0FBeEMsQUFBYyxBQUFjLEFBQXVCLFVBQVUsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLFFBQVIsQUFBZ0IsR0FBRyxXQUFwRyxBQUFtRSxBQUFjLEFBQThCO0FBRjFIO21CQUFBOztvQkFBQTtzQkFWRixBQVVFO0FBQUE7QUFDRTtpQkFYSjthQURGLEFBQ0UsQUF1Q0g7QUF2Q0c7Ozs7O0FBakJvQyxBOztrQkFBckIsQSIsImZpbGUiOiJQbGF5Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/components/PlayControls.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/components/PlayControls.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iMGYyMWJkNWY5MDRmYmQyMzc0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5Q29udHJvbHMuanM/MTE4Yjk5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cmFjazogMSxcbiAgICAgIGlzUGxheWluZzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmF1ZGlvLnZvbHVtZSA9IDAuNjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYWNrLCBpc1BsYXlpbmcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwbGF5LWNvbnRyb2xzJz5cbiAgICAgICAgPGF1ZGlvIHNyYz17YC4uL3N0YXRpYy9tdXNpYy90cmFjayR7dHJhY2t9Lm1wM2B9IHJlZj17bm9kZSA9PiB0aGlzLmF1ZGlvID0gbm9kZX0gYXV0b1BsYXkgbG9vcCAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPScuLi9zdGF0aWMvcGxheS1jb250cm9scy9yZXdpbmQuc3ZnJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRyYWNrID09PSAxID8gdGhpcy5zZXRTdGF0ZSh7IHRyYWNrOiA0LCBpc1BsYXlpbmc6IHRydWUgfSkgOiB0aGlzLnNldFN0YXRlKHt0cmFjazogdHJhY2sgLSAxLCBpc1BsYXlpbmc6IHRydWV9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aXNQbGF5aW5nID8gJy4uL3N0YXRpYy9wbGF5LWNvbnRyb2xzL3BhdXNlLWJ1dHRvbi5zdmcnIDogJy4uL3N0YXRpYy9wbGF5LWNvbnRyb2xzL3BsYXktYnV0dG9uLnN2Zyd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gKGlzUGxheWluZyA/IHRoaXMuYXVkaW8ucGF1c2UoKSA6IHRoaXMuYXVkaW8ucGxheSgpLCB0aGlzLnNldFN0YXRlKHsgaXNQbGF5aW5nOiAhaXNQbGF5aW5nIH0pKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3BsYXktY29udHJvbHMvZmFzdC1mb3J3YXJkLnN2ZydcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0cmFjayA9PT0gNCA/IHRoaXMuc2V0U3RhdGUoeyB0cmFjazogMSwgaXNQbGF5aW5nOiB0cnVlIH0pIDogdGhpcy5zZXRTdGF0ZSh7dHJhY2s6IHRyYWNrICsgMSwgaXNQbGF5aW5nOiB0cnVlfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucGxheS1jb250cm9scyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nOmFjdGl2ZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QbGF5Q29udHJvbHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFHQTtBQUFBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUFBO0FBRkE7QUFBQTs7QUFBQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7O0FBQUE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFGQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWEE7QUF1Q0E7QUF2Q0E7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=