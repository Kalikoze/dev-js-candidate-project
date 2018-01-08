webpackHotUpdate(5,{

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.fetchNerdyJoke = exports.fetchRandomJoke = exports.newJoke = undefined;

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _redux = __webpack_require__(392);

var _reduxDevtoolsExtension = __webpack_require__(425);

var _reduxThunk = __webpack_require__(426);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// Reducers

var newJoke = exports.newJoke = function newJoke() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'RANDOM_JOKE':
      return { randomJoke: action.joke };
    case 'NERDY_JOKE':
      return { nerdyJoke: action.joke };
    default:
      return state;
  }
};

// Actions

var fetchRandomJoke = exports.fetchRandomJoke = function fetchRandomJoke() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var res, joke;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('http://api.icndb.com/jokes/random/?escape=javascript');

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              joke = _context.sent;

              dispatch({ type: 'RANDOM_JOKE', joke: joke.value.joke });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchNerdyJoke = exports.fetchNerdyJoke = function fetchNerdyJoke() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var res, joke;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              joke = _context2.sent;

              dispatch({ type: 'NERDY_JOKE', joke: joke.value.joke });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var Store = exports.Store = function Store() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(newJoke, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsIm5ld0pva2UiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyYW5kb21Kb2tlIiwiam9rZSIsIm5lcmR5Sm9rZSIsImZldGNoUmFuZG9tSm9rZSIsImRpc3BhdGNoIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwidmFsdWUiLCJmZXRjaE5lcmR5Sm9rZSIsIlN0b3JlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBc0IsQUFBdEI7O0FBQ0EsQUFBUyxBQUFUOztBQUNBLEFBQU8sQUFBUDs7Ozs7Ozs7QUFFQSxBQUVBOztBQUFPLElBQU0sNEJBQVUsU0FBVixBQUFVLFVBQXdCO01BQXZCLEFBQXVCLDRFQUFmLEFBQWU7TUFBWCxBQUFXLG1CQUM3Qzs7VUFBTyxPQUFPLEFBQWQsQUFDQTtTQUFLLEFBQUwsQUFDRTthQUFPLEVBQUUsWUFBWSxPQUFPLEFBQXJCLEFBQVAsQUFDRjtTQUFLLEFBQUwsQUFDRTthQUFPLEVBQUUsV0FBVyxPQUFPLEFBQXBCLEFBQVAsQUFDRjtBQUNFO2FBQU8sQUFBUCxBQU5GLEFBUUQ7O0FBVE07O0FBV1AsQUFFQTs7QUFBTyxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixrQkFBQTtxQkFBQTt3RkFBTSxpQkFBTSxBQUFOLFVBQUE7ZUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDakIsTUFBTSxBQUFOLEFBRGlCOztpQkFDN0I7QUFENkIsNkJBQUE7OEJBQUE7cUJBRWhCLElBQUksQUFBSixBQUZnQjs7aUJBRTdCO0FBRjZCLDhCQUluQzs7dUJBQVMsRUFBQyxNQUFNLEFBQVAsZUFBc0IsTUFBTSxLQUFLLEFBQUwsTUFBVyxBQUF2QyxBQUFULEFBSm1DOztpQkFBQTtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBQUFOOzswQkFBQTs4QkFBQTtBQUFBO0FBQUE7QUFBeEIsQUFPUDs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixpQkFBQTtxQkFBQTt5RkFBTSxrQkFBTSxBQUFOLFVBQUE7ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDaEIsTUFBTSxBQUFOLEFBRGdCOztpQkFDNUI7QUFENEIsOEJBQUE7K0JBQUE7cUJBRWYsSUFBSSxBQUFKLEFBRmU7O2lCQUU1QjtBQUY0QiwrQkFJbEM7O3VCQUFTLEVBQUMsTUFBTSxBQUFQLGNBQXFCLE1BQU0sS0FBSyxBQUFMLE1BQVcsQUFBdEMsQUFBVCxBQUprQzs7aUJBQUE7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QUFBTjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQXZCLEFBT1A7O0FBQU8sSUFBTSx3QkFBUSxTQUFSLEFBQVEsUUFBd0I7TUFBdkIsQUFBdUIsbUZBQVIsQUFBUSxBQUMzQzs7U0FBTyx3QkFBWSxBQUFaLFNBQXFCLEFBQXJCLGNBQW1DLGlEQUFvQixBQUFnQixBQUFoQixBQUFwQixBQUFuQyxBQUFQLEFBQ0Q7QUFGTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/store.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/store.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMWY2NzAzOTVhNTFjODQ4OThjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/MjFmMzc5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuLy8gUmVkdWNlcnNcblxuZXhwb3J0IGNvbnN0IG5ld0pva2UgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICBjYXNlICdSQU5ET01fSk9LRSc6XG4gICAgcmV0dXJuIHsgcmFuZG9tSm9rZTogYWN0aW9uLmpva2UgfTtcbiAgY2FzZSAnTkVSRFlfSk9LRSc6XG4gICAgcmV0dXJuIHsgbmVyZHlKb2tlOiBhY3Rpb24uam9rZSB9O1xuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gQWN0aW9uc1xuXG5leHBvcnQgY29uc3QgZmV0Y2hSYW5kb21Kb2tlID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tLz9lc2NhcGU9amF2YXNjcmlwdCcpO1xuICBjb25zdCBqb2tlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBkaXNwYXRjaCh7dHlwZTogJ1JBTkRPTV9KT0tFJywgam9rZTogam9rZS52YWx1ZS5qb2tlIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTmVyZHlKb2tlID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tP2xpbWl0VG89W25lcmR5XScpO1xuICBjb25zdCBqb2tlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBkaXNwYXRjaCh7dHlwZTogJ05FUkRZX0pPS0UnLCBqb2tlOiBqb2tlLnZhbHVlLmpva2UgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSAoaW5pdGlhbFN0YXRlID0geyB9KSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShuZXdKb2tlLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBVEE7QUFDQTtBQVlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=