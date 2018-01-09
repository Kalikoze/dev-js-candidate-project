'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.fetchExplicitJoke = exports.explicitJoke = exports.fetchNerdyJoke = exports.nerdyJoke = exports.fetchRandomJoke = exports.randomJoke = exports.postMessage = exports.message = exports.watsonResponse = exports.newJoke = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
              return fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');

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
              return fetch('http://api.icndb.com/jokes/random?limitTo=[explicit]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsIm5ld0pva2UiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjdXJyZW50Sm9rZSIsImpva2UiLCJ3YXRzb25SZXNwb25zZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImludGVudCIsInJvb3RSZWR1Y2VyIiwicG9zdE1lc3NhZ2UiLCJkaXNwYXRjaCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJpbnB1dCIsInJlcyIsImpzb24iLCJyZXBseSIsInJhbmRvbUpva2UiLCJmZXRjaFJhbmRvbUpva2UiLCJ2YWx1ZSIsIm5lcmR5Sm9rZSIsImZldGNoTmVyZHlKb2tlIiwiZXhwbGljaXRKb2tlIiwiZmV0Y2hFeHBsaWNpdEpva2UiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBYSxBQUFpQjs7QUFDdkMsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7OztBQUVQLEFBRUE7O0FBQU8sSUFBTSw0QkFBVSxTQUFWLEFBQVUsVUFBd0I7TUFBdkIsQUFBdUIsNEVBQWYsQUFBZTtNQUFYLEFBQVcsbUJBQzdDOztVQUFPLE9BQVAsQUFBYyxBQUNaO1NBQUEsQUFBSyxBQUNIO2FBQU8sRUFBRSxhQUFhLE9BQXRCLEFBQU8sQUFBc0IsQUFDL0I7U0FBQSxBQUFLLEFBQ0g7YUFBTyxFQUFFLGFBQWEsT0FBdEIsQUFBTyxBQUFzQixBQUMvQjtTQUFBLEFBQUssQUFDSDthQUFPLEVBQUUsYUFBYSxPQUF0QixBQUFPLEFBQXNCLEFBQy9CO0FBQ0U7YUFSSixBQVFJLEFBQU8sQUFFWjs7QUFYTSxBQWFQOztBQUFPLElBQU0sMENBQWlCLFNBQWpCLEFBQWlCLGlCQUF3QjtNQUF2QixBQUF1Qiw0RUFBZixBQUFlO01BQVgsQUFBVyxtQkFDcEQ7O1VBQU8sT0FBUCxBQUFjLEFBQ1o7U0FBQSxBQUFLLEFBQ0g7YUFBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLE9BQVgsQUFBa0IsU0FBUyxRQUFRLE9BQXRELEFBQU8sQUFBWSxBQUEwQyxBQUMvRDtBQUNFO2FBSkosQUFJSSxBQUFPLEFBRVo7O0FBUE07O0FBU1AsSUFBTTtrQkFBOEIsQUFFbEM7V0FGRixBQUFvQixBQUFnQjtBQUFBLEFBQ2xDLENBRGtCOztBQUtwQixBQUVBOztBQUFPLElBQU0sNEJBQVUsdUJBQUE7TUFBQSxBQUFFLGVBQUYsQUFBRTtNQUFGLEFBQVcsY0FBWCxBQUFXOztVQUFhLEFBQ3ZDLEFBQ047YUFGNkMsQUFHN0M7WUFIcUIsQUFBd0I7QUFBQSxBQUM3QztBQURLLEFBTVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsbUJBQUE7cUJBQUE7eUZBQVMsaUJBQUEsQUFBTSxVQUFOO2VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ2hCLE1BQUEsQUFBTTt3QkFBbUIsQUFDakMsQUFDUjs7a0NBRnlDLEFBRWhDLEFBQ1MsQUFFbEI7QUFIUyxBQUNQLGlCQUh1QyxBQUN6QztzQkFJTSx5QkFBZSxFQUFDLFNBTlUsQUFDaEIsQUFBeUIsQUFLbkMsQUFBZSxBQUFVOztpQkFMM0I7QUFENEIsNkJBQUE7OEJBQUE7cUJBT2QsSUFQYyxBQU9kLEFBQUk7O2lCQUFsQjtBQVA0QiwrQkFTbEM7O3VCQUFTLFFBVHlCLEFBU2xDLEFBQVMsQUFBUTs7aUJBVGlCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQVQ7OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUFwQixBQVlQOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGlCQUFBOztVQUFTLEFBQzNCLEFBQ047VUFGd0IsQUFBUztBQUFBLEFBQ2pDO0FBREssQUFLUDs7QUFBTyxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixrQkFBQTtxQkFBQTt5RkFBTSxrQkFBQSxBQUFNLFVBQU47ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDakIsTUFEaUIsQUFDakIsQUFBTTs7aUJBQWxCO0FBRDZCLDhCQUFBOytCQUFBO3FCQUVoQixJQUZnQixBQUVoQixBQUFJOztpQkFBakI7QUFGNkIsK0JBSW5DOzt1QkFBUyxXQUFXLEtBQUEsQUFBSyxNQUpVLEFBSW5DLEFBQVMsQUFBc0I7O2lCQUpJO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF4QixBQU9QOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLGdCQUFBOztVQUFTLEFBQzFCLEFBQ047VUFGdUIsQUFBUztBQUFBLEFBQ2hDO0FBREssQUFLUDs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixpQkFBQTtxQkFBQTt5RkFBTSxrQkFBQSxBQUFNLFVBQU47ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDaEIsTUFEZ0IsQUFDaEIsQUFBTTs7aUJBQWxCO0FBRDRCLDhCQUFBOytCQUFBO3FCQUVmLElBRmUsQUFFZixBQUFJOztpQkFBakI7QUFGNEIsK0JBSWxDOzt1QkFBUyxVQUFVLEtBQUEsQUFBSyxNQUpVLEFBSWxDLEFBQVMsQUFBcUI7O2lCQUpJO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUF2QixBQU9QOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLG1CQUFBOztVQUFTLEFBQzdCLEFBQ047VUFGMEIsQUFBUztBQUFBLEFBQ25DO0FBREssQUFLUDs7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixvQkFBQTtxQkFBQTt5RkFBTSxrQkFBQSxBQUFNLFVBQU47ZUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDbkIsTUFEbUIsQUFDbkIsQUFBTTs7aUJBQWxCO0FBRCtCLDhCQUFBOytCQUFBO3FCQUVsQixJQUZrQixBQUVsQixBQUFJOztpQkFBakI7QUFGK0IsK0JBSXJDOzt1QkFBUyxhQUFhLEtBQUEsQUFBSyxNQUpVLEFBSXJDLEFBQVMsQUFBd0I7O2lCQUpJO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0FBQU47OzBCQUFBOytCQUFBO0FBQUE7QUFBQTtBQUExQixBQU9QOztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLFFBQXdCO01BQXZCLEFBQXVCLG1GQUFSLEFBQVEsQUFDM0M7O1NBQU8sd0JBQUEsQUFBWSxhQUFaLEFBQXlCLGNBQWMsaURBQTlDLEFBQU8sQUFBdUMsQUFBb0IsQUFBZ0IsQUFDbkY7QUFGTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=