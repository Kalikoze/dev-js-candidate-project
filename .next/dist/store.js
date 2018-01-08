'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.fetchNerdyJoke = exports.fetchRandomJoke = exports.newJoke = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

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