webpackHotUpdate(5,{

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.fetchExplicitJoke = exports.explicitJoke = exports.fetchNerdyJoke = exports.nerdyJoke = exports.fetchRandomJoke = exports.randomJoke = exports.postMessage = exports.message = exports.watsonResponse = exports.newJoke = undefined;

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(426);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _redux = __webpack_require__(392);

var _reduxDevtoolsExtension = __webpack_require__(428);

var _reduxThunk = __webpack_require__(429);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/store.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/store.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wODRlYjg0ODk0M2NjOTM2OGRkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/ZTczNDc0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG4vLyBSZWR1Y2Vyc1xuXG5leHBvcnQgY29uc3QgbmV3Sm9rZSA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUkFORE9NX0pPS0UnOlxuICAgICAgcmV0dXJuIHsgY3VycmVudEpva2U6IGFjdGlvbi5qb2tlIH07XG4gICAgY2FzZSAnTkVSRFlfSk9LRSc6XG4gICAgICByZXR1cm4geyBjdXJyZW50Sm9rZTogYWN0aW9uLmpva2UgfTtcbiAgICBjYXNlICdFWFBMSUNJVF9KT0tFJzpcbiAgICAgIHJldHVybiB7IGN1cnJlbnRKb2tlOiBhY3Rpb24uam9rZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3YXRzb25SZXNwb25zZSA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUE9TVF9NRVNTQUdFJzpcbiAgICAgIHJldHVybiB7IHJlc3BvbnNlOiB7IG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLCBpbnRlbnQ6IGFjdGlvbi5pbnRlbnQgfX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHdhdHNvblJlc3BvbnNlLFxuICBuZXdKb2tlLFxufSlcblxuLy8gQWN0aW9uc1xuXG5leHBvcnQgY29uc3QgbWVzc2FnZSA9ICh7bWVzc2FnZSwgaW50ZW50fSkgPT4gKHtcbiAgdHlwZTogJ1BPU1RfTUVTU0FHRScsXG4gIG1lc3NhZ2UsXG4gIGludGVudFxufSk7XG5cbmV4cG9ydCBjb25zdCBwb3N0TWVzc2FnZSA9IGlucHV0ID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvdjEvbWVzc2FnZScsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTogaW5wdXR9KX0pO1xuICBjb25zdCByZXBseSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgZGlzcGF0Y2gobWVzc2FnZShyZXBseSkpXG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21Kb2tlID0gam9rZSA9PiAoe1xuICB0eXBlOiAnUkFORE9NX0pPS0UnLFxuICBqb2tlXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUmFuZG9tSm9rZSA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbS8/ZXNjYXBlPWphdmFzY3JpcHQnKTtcbiAgY29uc3Qgam9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgZGlzcGF0Y2gocmFuZG9tSm9rZShqb2tlLnZhbHVlLmpva2UpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXJkeUpva2UgPSBqb2tlID0+ICh7XG4gIHR5cGU6ICdORVJEWV9KT0tFJyxcbiAgam9rZVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE5lcmR5Sm9rZSA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbT9saW1pdFRvPVtuZXJkeV0nKTtcbiAgY29uc3Qgam9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgZGlzcGF0Y2gobmVyZHlKb2tlKGpva2UudmFsdWUuam9rZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cGxpY2l0Sm9rZSA9IGpva2UgPT4gKHtcbiAgdHlwZTogJ0VYUExJQ0lUX0pPS0UnLFxuICBqb2tlXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXhwbGljaXRKb2tlID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tP2xpbWl0VG89W2V4cGxpY2l0XScpO1xuICBjb25zdCBqb2tlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBkaXNwYXRjaChleHBsaWNpdEpva2Uoam9rZS52YWx1ZS5qb2tlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSAoaW5pdGlhbFN0YXRlID0geyB9KSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7QUFQQTtBQUNBO0FBUUE7QUFFQTtBQUZBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFHQTtBQUZBO0FBRUE7QUFDQTtBQU5BO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBVkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBREE7O0FBRUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBOztBQUVBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTs7QUFFQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9