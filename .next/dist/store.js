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
      return { randomJoke: action.joke };
    case 'NERDY_JOKE':
      return { nerdyJoke: action.joke };
    case 'EXPLICIT_JOKE':
      return { explicitJoke: action.joke };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsIm5ld0pva2UiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyYW5kb21Kb2tlIiwiam9rZSIsIm5lcmR5Sm9rZSIsImV4cGxpY2l0Sm9rZSIsImZldGNoUmFuZG9tSm9rZSIsImRpc3BhdGNoIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwidmFsdWUiLCJmZXRjaE5lcmR5Sm9rZSIsImZldGNoRXhwbGljaXRKb2tlIiwiU3RvcmUiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUFzQixBQUF0Qjs7QUFDQSxBQUFTLEFBQVQ7O0FBQ0EsQUFBTyxBQUFQOzs7Ozs7OztBQUVBLEFBRUE7O0FBQU8sSUFBTSw0QkFBVSxTQUFWLEFBQVUsVUFBd0I7TUFBdkIsQUFBdUIsNEVBQWYsQUFBZTtNQUFYLEFBQVcsbUJBQzdDOztVQUFPLE9BQU8sQUFBZCxBQUNBO1NBQUssQUFBTCxBQUNFO2FBQU8sRUFBRSxZQUFZLE9BQU8sQUFBckIsQUFBUCxBQUNGO1NBQUssQUFBTCxBQUNFO2FBQU8sRUFBRSxXQUFXLE9BQU8sQUFBcEIsQUFBUCxBQUNGO1NBQUssQUFBTCxBQUNFO2FBQU8sRUFBRSxjQUFjLE9BQU8sQUFBdkIsQUFBUCxBQUNGO0FBQ0U7YUFBTyxBQUFQLEFBUkYsQUFVRDs7QUFYTTs7QUFhUCxBQUVBOztBQUFPLElBQU0sNENBQWtCLFNBQWxCLEFBQWtCLGtCQUFBO3FCQUFBO3dGQUFNLGlCQUFNLEFBQU4sVUFBQTtlQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNqQixNQUFNLEFBQU4sQUFEaUI7O2lCQUM3QjtBQUQ2Qiw2QkFBQTs4QkFBQTtxQkFFaEIsSUFBSSxBQUFKLEFBRmdCOztpQkFFN0I7QUFGNkIsOEJBSW5DOzt1QkFBUyxFQUFDLE1BQU0sQUFBUCxlQUFzQixNQUFNLEtBQUssQUFBTCxNQUFXLEFBQXZDLEFBQVQsQUFKbUM7O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQU47OzBCQUFBOzhCQUFBO0FBQUE7QUFBQTtBQUF4QixBQU9QOztBQUFPLElBQU0sMENBQWlCLFNBQWpCLEFBQWlCLGlCQUFBO3FCQUFBO3lGQUFNLGtCQUFNLEFBQU4sVUFBQTtlQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBO3FCQUNoQixNQUFNLEFBQU4sQUFEZ0I7O2lCQUM1QjtBQUQ0Qiw4QkFBQTsrQkFBQTtxQkFFZixJQUFJLEFBQUosQUFGZTs7aUJBRTVCO0FBRjRCLCtCQUlsQzs7dUJBQVMsRUFBQyxNQUFNLEFBQVAsY0FBcUIsTUFBTSxLQUFLLEFBQUwsTUFBVyxBQUF0QyxBQUFULEFBSmtDOztpQkFBQTtpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBQUFOOzswQkFBQTsrQkFBQTtBQUFBO0FBQUE7QUFBdkIsQUFPUDs7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixvQkFBQTtxQkFBQTt5RkFBTSxrQkFBTSxBQUFOLFVBQUE7ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDbkIsTUFBTSxBQUFOLEFBRG1COztpQkFDL0I7QUFEK0IsOEJBQUE7K0JBQUE7cUJBRWxCLElBQUksQUFBSixBQUZrQjs7aUJBRS9CO0FBRitCLCtCQUlyQzs7dUJBQVMsRUFBQyxNQUFNLEFBQVAsaUJBQXdCLE1BQU0sS0FBSyxBQUFMLE1BQVcsQUFBekMsQUFBVCxBQUpxQzs7aUJBQUE7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QUFBTjs7MEJBQUE7K0JBQUE7QUFBQTtBQUFBO0FBQTFCLEFBT1A7O0FBQU8sSUFBTSx3QkFBUSxTQUFSLEFBQVEsUUFBd0I7TUFBdkIsQUFBdUIsbUZBQVIsQUFBUSxBQUMzQzs7U0FBTyx3QkFBWSxBQUFaLFNBQXFCLEFBQXJCLGNBQW1DLGlEQUFvQixBQUFnQixBQUFoQixBQUFwQixBQUFuQyxBQUFQLEFBQ0Q7QUFGTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=