'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.storeRandomJoke = exports.fetchRandomJoke = exports.randomJoke = undefined;

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

var randomJoke = exports.randomJoke = function randomJoke() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'RANDOM_JOKE':
      return { randomJoke: action.joke };
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

var storeRandomJoke = exports.storeRandomJoke = function storeRandomJoke(joke) {
  return {
    type: 'RANDOM_JOKE',
    joke: joke
  };
};

var Store = exports.Store = function Store() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(randomJoke, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsInJhbmRvbUpva2UiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJqb2tlIiwiZmV0Y2hSYW5kb21Kb2tlIiwiZGlzcGF0Y2giLCJmZXRjaCIsInJlcyIsImpzb24iLCJ2YWx1ZSIsInN0b3JlUmFuZG9tSm9rZSIsIlN0b3JlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7QUFFUCxBQUVBOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGFBQXdCO01BQXZCLEFBQXVCLDRFQUFmLEFBQWU7TUFBWCxBQUFXLG1CQUNoRDs7VUFBTyxPQUFQLEFBQWMsQUFDZDtTQUFBLEFBQUssQUFDSDthQUFPLEVBQUUsWUFBWSxPQUFyQixBQUFPLEFBQXFCLEFBQzlCO0FBQ0U7YUFKRixBQUlFLEFBQU8sQUFFVjs7QUFQTTs7QUFTUCxBQUVBOztBQUFPLElBQU0sNENBQWtCLFNBQWxCLEFBQWtCLGtCQUFBO3FCQUFBO3dGQUFNLGlCQUFBLEFBQU0sVUFBTjtlQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNqQixNQURpQixBQUNqQixBQUFNOztpQkFBbEI7QUFENkIsNkJBQUE7OEJBQUE7cUJBRWhCLElBRmdCLEFBRWhCLEFBQUk7O2lCQUFqQjtBQUY2Qiw4QkFJbkM7O3VCQUFTLEVBQUMsTUFBRCxBQUFPLGVBQWUsTUFBTSxLQUFBLEFBQUssTUFKUCxBQUluQyxBQUFTLEFBQXVDOztpQkFKYjtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBQUFOOzswQkFBQTs4QkFBQTtBQUFBO0FBQUE7QUFBeEIsQUFPUDs7QUFBTyxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixzQkFBQTs7VUFBUyxBQUNoQyxBQUNOO1VBRjZCLEFBQVM7QUFBQSxBQUN0QztBQURLLEFBS1A7O0FBQU8sSUFBTSx3QkFBUSxTQUFSLEFBQVEsUUFBd0I7TUFBdkIsQUFBdUIsbUZBQVIsQUFBUSxBQUMzQzs7U0FBTyx3QkFBQSxBQUFZLFlBQVosQUFBd0IsY0FBYyxpREFBN0MsQUFBTyxBQUFzQyxBQUFvQixBQUFnQixBQUNsRjtBQUZNIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXNyb2xsaW5zL0NvZGUtQ2hhbGxlbmdlcy9zcHJ1Y2Vib3QifQ==