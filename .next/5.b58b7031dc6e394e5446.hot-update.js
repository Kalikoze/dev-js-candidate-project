webpackHotUpdate(5,{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.fetchExplicitJoke = exports.explicitJoke = exports.fetchNerdyJoke = exports.nerdyJoke = exports.fetchRandomJoke = exports.randomJoke = exports.postMessage = exports.message = exports.watsonResponse = exports.newJoke = undefined;

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(427);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _redux = __webpack_require__(391);

var _reduxDevtoolsExtension = __webpack_require__(429);

var _reduxThunk = __webpack_require__(430);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// Reducers

var newJoke = exports.newJoke = function newJoke() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'RANDOM_JOKE':
      return { currentJoke: action.joke };
    case 'NERDY_JOKE':
      return { currentJoke: action.joke };
    case 'EXPLICIT_JOKE':
      return { currentJoke: action.joke };
    default:
      return state;
  }
};

var watsonResponse = exports.watsonResponse = function watsonResponse() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'POST_MESSAGE':
      return { response: { message: action.message, intent: action.intent } };
    default:
      return state;
  }
};

var rootReducer = (0, _redux.combineReducers)({
  watsonResponse: watsonResponse,
  newJoke: newJoke
});

// Actions

var message = exports.message = function message(_ref) {
  var message = _ref.message,
      intent = _ref.intent;
  return {
    type: 'POST_MESSAGE',
    message: message,
    intent: intent
  };
};

var postMessage = exports.postMessage = function postMessage(input) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var res, reply;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/api/v1/message', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)({ message: input }) });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              reply = _context.sent;

              dispatch(message(reply));

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var randomJoke = exports.randomJoke = function randomJoke(joke) {
  return {
    type: 'RANDOM_JOKE',
    joke: joke
  };
};

var fetchRandomJoke = exports.fetchRandomJoke = function fetchRandomJoke() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var res, joke;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch('http://api.icndb.com/jokes/random/?escape=javascript');

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              joke = _context2.sent;

              dispatch(randomJoke(joke.value.joke));

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var nerdyJoke = exports.nerdyJoke = function nerdyJoke(joke) {
  return {
    type: 'NERDY_JOKE',
    joke: joke
  };
};

var fetchNerdyJoke = exports.fetchNerdyJoke = function fetchNerdyJoke() {
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var res, joke;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch('http://api.icndb.com/jokes/random?escape=javascript&limitTo=[nerdy]');

            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return res.json();

            case 5:
              joke = _context3.sent;

              dispatch(nerdyJoke(joke.value.joke));

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var explicitJoke = exports.explicitJoke = function explicitJoke(joke) {
  return {
    type: 'EXPLICIT_JOKE',
    joke: joke
  };
};

var fetchExplicitJoke = exports.fetchExplicitJoke = function fetchExplicitJoke() {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch) {
      var res, joke;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch('http://api.icndb.com/jokes/random?escape=javascript&limitTo=[explicit]');

            case 2:
              res = _context4.sent;
              _context4.next = 5;
              return res.json();

            case 5:
              joke = _context4.sent;

              dispatch(explicitJoke(joke.value.joke));

            case 7:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var Store = exports.Store = function Store() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(rootReducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsIm5ld0pva2UiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjdXJyZW50Sm9rZSIsImpva2UiLCJ3YXRzb25SZXNwb25zZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImludGVudCIsInJvb3RSZWR1Y2VyIiwicG9zdE1lc3NhZ2UiLCJkaXNwYXRjaCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJpbnB1dCIsInJlcyIsImpzb24iLCJyZXBseSIsInJhbmRvbUpva2UiLCJmZXRjaFJhbmRvbUpva2UiLCJ2YWx1ZSIsIm5lcmR5Sm9rZSIsImZldGNoTmVyZHlKb2tlIiwiZXhwbGljaXRKb2tlIiwiZmV0Y2hFeHBsaWNpdEpva2UiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBYSxBQUFpQjs7QUFDdkMsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7OztBQUVQLEFBRUE7O0FBQU8sSUFBTSw0QkFBVSxTQUFWLEFBQVUsVUFBd0I7TUFBdkIsQUFBdUIsNEVBQWYsQUFBZTtNQUFYLEFBQVcsbUJBQzdDOztVQUFPLE9BQVAsQUFBYyxBQUNkO1NBQUEsQUFBSyxBQUNIO2FBQU8sRUFBRSxhQUFhLE9BQXRCLEFBQU8sQUFBc0IsQUFDL0I7U0FBQSxBQUFLLEFBQ0g7YUFBTyxFQUFFLGFBQWEsT0FBdEIsQUFBTyxBQUFzQixBQUMvQjtTQUFBLEFBQUssQUFDSDthQUFPLEVBQUUsYUFBYSxPQUF0QixBQUFPLEFBQXNCLEFBQy9CO0FBQ0U7YUFSRixBQVFFLEFBQU8sQUFFVjs7QUFYTSxBQWFQOztBQUFPLElBQU0sMENBQWlCLFNBQWpCLEFBQWlCLGlCQUF3QjtNQUF2QixBQUF1Qiw0RUFBZixBQUFlO01BQVgsQUFBVyxtQkFDcEQ7O1VBQU8sT0FBUCxBQUFjLEFBQ2Q7U0FBQSxBQUFLLEFBQ0g7YUFBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLE9BQVgsQUFBa0IsU0FBUyxRQUFRLE9BQXRELEFBQU8sQUFBWSxBQUEwQyxBQUMvRDtBQUNFO2FBSkYsQUFJRSxBQUFPLEFBRVY7O0FBUE07O0FBU1AsSUFBTTtrQkFBOEIsQUFFbEM7V0FGRixBQUFvQixBQUFnQjtBQUFBLEFBQ2xDLENBRGtCOztBQUtwQixBQUVBOztBQUFPLElBQU0sNEJBQVUsdUJBQUE7TUFBQSxBQUFFLGVBQUYsQUFBRTtNQUFGLEFBQVcsY0FBWCxBQUFXOztVQUFhLEFBQ3ZDLEFBQ047YUFGNkMsQUFHN0M7WUFIcUIsQUFBd0I7QUFBQSxBQUM3QztBQURLLEFBTVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsbUJBQUE7cUJBQUE7eUZBQVMsaUJBQUEsQUFBTSxVQUFOO2VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ2hCLE1BQUEsQUFBTTt3QkFBbUIsQUFDakMsQUFDUjs7a0NBRnlDLEFBRWhDLEFBQ1MsQUFFbEI7QUFIUyxBQUNQLGlCQUh1QyxBQUN6QztzQkFJTSx5QkFBZSxFQUFDLFNBTlUsQUFDaEIsQUFBeUIsQUFLbkMsQUFBZSxBQUFVOztpQkFMM0I7QUFENEIsNkJBQUE7OEJBQUE7cUJBT2QsSUFQYyxBQU9kLEFBQUk7O2lCQUFsQjtBQVA0QiwrQkFTbEM7O3VCQUFTLFFBVHlCLEFBU2xDLEFBQVMsQUFBUTs7aUJBVGlCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQVQ7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFwQixBQVlQOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGlCQUFBOztVQUFTLEFBQzNCLEFBQ047VUFGd0IsQUFBUztBQUFBLEFBQ2pDO0FBREssQUFLUDs7QUFBTyxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixrQkFBQTtxQkFBQTt5RkFBTSxrQkFBQSxBQUFNLFVBQU47ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDakIsTUFEaUIsQUFDakIsQUFBTTs7aUJBQWxCO0FBRDZCLDhCQUFBOytCQUFBO3FCQUVoQixJQUZnQixBQUVoQixBQUFJOztpQkFBakI7QUFGNkIsK0JBSW5DOzt1QkFBUyxXQUFXLEtBQUEsQUFBSyxNQUpVLEFBSW5DLEFBQVMsQUFBc0I7O2lCQUpJO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF4QixBQU9QOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLGdCQUFBOztVQUFTLEFBQzFCLEFBQ047VUFGdUIsQUFBUztBQUFBLEFBQ2hDO0FBREssQUFLUDs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixpQkFBQTtxQkFBQTt5RkFBTSxrQkFBQSxBQUFNLFVBQU47ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDaEIsTUFEZ0IsQUFDaEIsQUFBTTs7aUJBQWxCO0FBRDRCLDhCQUFBOytCQUFBO3FCQUVmLElBRmUsQUFFZixBQUFJOztpQkFBakI7QUFGNEIsK0JBSWxDOzt1QkFBUyxVQUFVLEtBQUEsQUFBSyxNQUpVLEFBSWxDLEFBQVMsQUFBcUI7O2lCQUpJO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF2QixBQU9QOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLG1CQUFBOztVQUFTLEFBQzdCLEFBQ047VUFGMEIsQUFBUztBQUFBLEFBQ25DO0FBREssQUFLUDs7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixvQkFBQTtxQkFBQTt5RkFBTSxrQkFBQSxBQUFNLFVBQU47ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDbkIsTUFEbUIsQUFDbkIsQUFBTTs7aUJBQWxCO0FBRCtCLDhCQUFBOytCQUFBO3FCQUVsQixJQUZrQixBQUVsQixBQUFJOztpQkFBakI7QUFGK0IsK0JBSXJDOzt1QkFBUyxhQUFhLEtBQUEsQUFBSyxNQUpVLEFBSXJDLEFBQVMsQUFBd0I7O2lCQUpJO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUExQixBQU9QOztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLFFBQXdCO01BQXZCLEFBQXVCLG1GQUFSLEFBQVEsQUFDM0M7O1NBQU8sd0JBQUEsQUFBWSxhQUFaLEFBQXlCLGNBQWMsaURBQTlDLEFBQU8sQUFBdUMsQUFBb0IsQUFBZ0IsQUFDbkY7QUFGTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/store.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/store.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iNThiNzAzMWRjNmUzOTRlNTQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/NzU2NDQ0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG4vLyBSZWR1Y2Vyc1xuXG5leHBvcnQgY29uc3QgbmV3Sm9rZSA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgJ1JBTkRPTV9KT0tFJzpcbiAgICByZXR1cm4geyBjdXJyZW50Sm9rZTogYWN0aW9uLmpva2UgfTtcbiAgY2FzZSAnTkVSRFlfSk9LRSc6XG4gICAgcmV0dXJuIHsgY3VycmVudEpva2U6IGFjdGlvbi5qb2tlIH07XG4gIGNhc2UgJ0VYUExJQ0lUX0pPS0UnOlxuICAgIHJldHVybiB7IGN1cnJlbnRKb2tlOiBhY3Rpb24uam9rZSB9O1xuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdhdHNvblJlc3BvbnNlID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSAnUE9TVF9NRVNTQUdFJzpcbiAgICByZXR1cm4geyByZXNwb25zZTogeyBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSwgaW50ZW50OiBhY3Rpb24uaW50ZW50IH19O1xuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB3YXRzb25SZXNwb25zZSxcbiAgbmV3Sm9rZSxcbn0pO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlID0gKHttZXNzYWdlLCBpbnRlbnR9KSA9PiAoe1xuICB0eXBlOiAnUE9TVF9NRVNTQUdFJyxcbiAgbWVzc2FnZSxcbiAgaW50ZW50XG59KTtcblxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlID0gaW5wdXQgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS92MS9tZXNzYWdlJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlOiBpbnB1dH0pfSk7XG4gIGNvbnN0IHJlcGx5ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBkaXNwYXRjaChtZXNzYWdlKHJlcGx5KSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tSm9rZSA9IGpva2UgPT4gKHtcbiAgdHlwZTogJ1JBTkRPTV9KT0tFJyxcbiAgam9rZVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJhbmRvbUpva2UgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLmljbmRiLmNvbS9qb2tlcy9yYW5kb20vP2VzY2FwZT1qYXZhc2NyaXB0Jyk7XG4gIGNvbnN0IGpva2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGRpc3BhdGNoKHJhbmRvbUpva2Uoam9rZS52YWx1ZS5qb2tlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbmVyZHlKb2tlID0gam9rZSA9PiAoe1xuICB0eXBlOiAnTkVSRFlfSk9LRScsXG4gIGpva2Vcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hOZXJkeUpva2UgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLmljbmRiLmNvbS9qb2tlcy9yYW5kb20/ZXNjYXBlPWphdmFzY3JpcHQmbGltaXRUbz1bbmVyZHldJyk7XG4gIGNvbnN0IGpva2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGRpc3BhdGNoKG5lcmR5Sm9rZShqb2tlLnZhbHVlLmpva2UpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHBsaWNpdEpva2UgPSBqb2tlID0+ICh7XG4gIHR5cGU6ICdFWFBMSUNJVF9KT0tFJyxcbiAgam9rZVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEV4cGxpY2l0Sm9rZSA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbT9lc2NhcGU9amF2YXNjcmlwdCZsaW1pdFRvPVtleHBsaWNpdF0nKTtcbiAgY29uc3Qgam9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgZGlzcGF0Y2goZXhwbGljaXRKb2tlKGpva2UudmFsdWUuam9rZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHsgfSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBUEE7QUFDQTtBQVFBO0FBRUE7QUFGQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFOQTtBQURBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQVZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQURBOztBQUVBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTs7QUFFQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7O0FBRUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==