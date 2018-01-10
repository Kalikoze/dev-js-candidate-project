'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Index = require('../components/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var newJoke = _ref.newJoke;
  return { currentJoke: newJoke.currentJoke };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchJoke: (0, _redux.bindActionCreators)({ fetchRandomJoke: _store.fetchRandomJoke, fetchNerdyJoke: _store.fetchNerdyJoke, fetchExplicitJoke: _store.fetchExplicitJoke }, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.Store, mapStateToProps, mapDispatchToProps)(_Index2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvSW5kZXhDb250YWluZXIuanMiXSwibmFtZXMiOlsiYmluZEFjdGlvbkNyZWF0b3JzIiwiZmV0Y2hSYW5kb21Kb2tlIiwiZmV0Y2hOZXJkeUpva2UiLCJmZXRjaEV4cGxpY2l0Sm9rZSIsIlN0b3JlIiwid2l0aFJlZHV4IiwiSW5kZXgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuZXdKb2tlIiwiY3VycmVudEpva2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmZXRjaEpva2UiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQWlCLEFBQWdCLEFBQW1CLEFBQWE7O0FBQzFFLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7OztBQUVsQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixzQkFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO1NBQWUsRUFBRSxhQUFhLFFBQWpDLEFBQWtCLEFBQXVCO0FBQWpFOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztlQUNhLCtCQUFtQixFQUFBLEFBQUUseUNBQUYsQUFBbUIsdUNBQXRDLEFBQW1CLEFBQW1DLCtDQURuRSxBQUFPLEFBQ00sQUFBMkUsQUFFekY7QUFIUSxBQUNMO0FBRkosQUFNQTs7a0JBQWUsQUFBVSw4Q0FBVixBQUFpQixpQkFBaEMsQUFBZSxBQUFrQyxBQUFvQiIsImZpbGUiOiJJbmRleENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=