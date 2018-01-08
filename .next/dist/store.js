'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.fetchExplicitJoke = exports.fetchNerdyJoke = exports.fetchRandomJoke = exports.newJoke = undefined;

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
      return { currentJoke: action.joke };
    case 'NERDY_JOKE':
      return { currentJoke: action.joke };
    case 'EXPLICIT_JOKE':
      return { currentJoke: action.joke };
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

var fetchExplicitJoke = exports.fetchExplicitJoke = function fetchExplicitJoke() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var res, joke;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch('http://api.icndb.com/jokes/random?limitTo=[explicit]');

            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return res.json();

            case 5:
              joke = _context3.sent;

              dispatch({ type: 'EXPLICIT_JOKE', joke: joke.value.joke });

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var Store = exports.Store = function Store() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(newJoke, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsIm5ld0pva2UiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjdXJyZW50Sm9rZSIsImpva2UiLCJmZXRjaFJhbmRvbUpva2UiLCJkaXNwYXRjaCIsImZldGNoIiwicmVzIiwianNvbiIsInZhbHVlIiwiZmV0Y2hOZXJkeUpva2UiLCJmZXRjaEV4cGxpY2l0Sm9rZSIsIlN0b3JlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBc0IsQUFBdEI7O0FBQ0EsQUFBUyxBQUFUOztBQUNBLEFBQU8sQUFBUDs7Ozs7Ozs7QUFFQSxBQUVBOztBQUFPLElBQU0sNEJBQVUsU0FBVixBQUFVLFVBQXdCO01BQXZCLEFBQXVCLDRFQUFmLEFBQWU7TUFBWCxBQUFXLG1CQUM3Qzs7VUFBTyxPQUFPLEFBQWQsQUFDQTtTQUFLLEFBQUwsQUFDRTthQUFPLEVBQUUsYUFBYSxPQUFPLEFBQXRCLEFBQVAsQUFDRjtTQUFLLEFBQUwsQUFDRTthQUFPLEVBQUUsYUFBYSxPQUFPLEFBQXRCLEFBQVAsQUFDRjtTQUFLLEFBQUwsQUFDRTthQUFPLEVBQUUsYUFBYSxPQUFPLEFBQXRCLEFBQVAsQUFDRjtBQUNFO2FBQU8sQUFBUCxBQVJGLEFBVUQ7O0FBWE07O0FBYVAsQUFFQTs7QUFBTyxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixrQkFBQTtxQkFBQTt3RkFBTSxpQkFBTSxBQUFOLFVBQUE7ZUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDakIsTUFBTSxBQUFOLEFBRGlCOztpQkFDN0I7QUFENkIsNkJBQUE7OEJBQUE7cUJBRWhCLElBQUksQUFBSixBQUZnQjs7aUJBRTdCO0FBRjZCLDhCQUluQzs7dUJBQVMsRUFBQyxNQUFNLEFBQVAsZUFBc0IsTUFBTSxLQUFLLEFBQUwsTUFBVyxBQUF2QyxBQUFULEFBSm1DOztpQkFBQTtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBQUFOOzswQkFBQTs4QkFBQTtBQUFBO0FBQUE7QUFBeEIsQUFPUDs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixpQkFBQTtxQkFBQTt5RkFBTSxrQkFBTSxBQUFOLFVBQUE7ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDaEIsTUFBTSxBQUFOLEFBRGdCOztpQkFDNUI7QUFENEIsOEJBQUE7K0JBQUE7cUJBRWYsSUFBSSxBQUFKLEFBRmU7O2lCQUU1QjtBQUY0QiwrQkFJbEM7O3VCQUFTLEVBQUMsTUFBTSxBQUFQLGNBQXFCLE1BQU0sS0FBSyxBQUFMLE1BQVcsQUFBdEMsQUFBVCxBQUprQzs7aUJBQUE7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QUFBTjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQXZCLEFBT1A7O0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isb0JBQUE7cUJBQUE7eUZBQU0sa0JBQU0sQUFBTixVQUFBO2VBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7cUJBQ25CLE1BQU0sQUFBTixBQURtQjs7aUJBQy9CO0FBRCtCLDhCQUFBOytCQUFBO3FCQUVsQixJQUFJLEFBQUosQUFGa0I7O2lCQUUvQjtBQUYrQiwrQkFJckM7O3VCQUFTLEVBQUMsTUFBTSxBQUFQLGlCQUF3QixNQUFNLEtBQUssQUFBTCxNQUFXLEFBQXpDLEFBQVQsQUFKcUM7O2lCQUFBO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUExQixBQU9QOztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLFFBQXdCO01BQXZCLEFBQXVCLG1GQUFSLEFBQVEsQUFDM0M7O1NBQU8sd0JBQVksQUFBWixTQUFxQixBQUFyQixjQUFtQyxpREFBb0IsQUFBZ0IsQUFBaEIsQUFBcEIsQUFBbkMsQUFBUCxBQUNEO0FBRk0iLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9