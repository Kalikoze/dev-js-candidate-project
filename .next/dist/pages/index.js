'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Chat = require('../components/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _Message = require('../components/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _PlayControls = require('../components/PlayControls');

var _PlayControls2 = _interopRequireDefault(_PlayControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.state = {
      messages: []
    };
    _this.addMessage = _this.addMessage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var messages = this.state.messages;
      var message = this.props.message;

      if (this.props.message) {
        this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message, isUser: false }]) });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.convo.scrollTop = this.convo.scrollHeight;
    }
  }, {
    key: 'addMessage',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(message, intent) {
        var messages, _props$fetchJoke, fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke, jokeIntents, getJoke, index;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messages = this.state.messages;
                _props$fetchJoke = this.props.fetchJoke, fetchRandomJoke = _props$fetchJoke.fetchRandomJoke, fetchNerdyJoke = _props$fetchJoke.fetchNerdyJoke, fetchExplicitJoke = _props$fetchJoke.fetchExplicitJoke;
                jokeIntents = ['randomjoke', 'nerdyjoke', 'explicitjoke'];
                getJoke = [fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke];

                if (!jokeIntents.includes(intent)) {
                  _context.next = 9;
                  break;
                }

                index = jokeIntents.indexOf(intent);
                _context.next = 8;
                return getJoke[index]();

              case 8:
                return _context.abrupt('return', this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message + ' ' + this.props.currentJoke, isUser: !intent ? true : false }]) }));

              case 9:

                this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message, isUser: !intent ? true : false }]) });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addMessage(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return addMessage;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.state.messages;

      var conversation = messages.map(function (message, i) {
        return _react2.default.createElement(_Message2.default, { key: i, text: message.message, isUser: message.isUser, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        });
      });
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-394281418' + ' ' + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-394281418',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'SpruceBot'), _react2.default.createElement(_PlayControls2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement('section', { ref: function ref(node) {
          return _this2.convo = node;
        }, className: 'jsx-394281418' + ' ' + 'conversation',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, conversation), _react2.default.createElement(_Chat2.default, { addMessage: this.addMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '441107387',
        css: '.header.jsx-394281418{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#FFF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:\'Lato\',sans-serif;font-size:5vw;font-weight:700;height:20%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.conversation.jsx-394281418{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:65%;overflow-y:scroll;width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fb0IsQUFHZ0MsQUFZTiwwRUFDUyxtQkFaWCxXQUNFLGdEQVlGLFdBQ08sZUFaYSxHQWFyQixVQUNaLGlCQWJnQixjQUNFLGdCQUNMLFdBQ1ksbUdBQ1osV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UsIFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IENoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQbGF5Q29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5Q29udHJvbHMnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWRkTWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnksIHN0b3JlfSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoUmFuZG9tSm9rZSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaE5lcmR5Sm9rZSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaEV4cGxpY2l0Sm9rZSgpKTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZih0aGlzLnByb3BzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6IGZhbHNlfV19KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNvbnZvLnNjcm9sbFRvcCA9IHRoaXMuY29udm8uc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgYXN5bmMgYWRkTWVzc2FnZShtZXNzYWdlLCBpbnRlbnQpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UgfSA9IHRoaXMucHJvcHMuZmV0Y2hKb2tlO1xuICAgIGNvbnN0IGpva2VJbnRlbnRzID0gWydyYW5kb21qb2tlJywgJ25lcmR5am9rZScsICdleHBsaWNpdGpva2UnXTtcbiAgICBjb25zdCBnZXRKb2tlID0gW2ZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlXTtcblxuICAgIGlmKGpva2VJbnRlbnRzLmluY2x1ZGVzKGludGVudCkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gam9rZUludGVudHMuaW5kZXhPZihpbnRlbnQpO1xuICAgICAgYXdhaXQgZ2V0Sm9rZVtpbmRleF0oKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke3RoaXMucHJvcHMuY3VycmVudEpva2V9YCwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiA8TWVzc2FnZSBrZXk9e2l9IHRleHQ9e21lc3NhZ2UubWVzc2FnZX0gaXNVc2VyPXttZXNzYWdlLmlzVXNlcn0vPik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICA8aDE+U3BydWNlQm90PC9oMT5cbiAgICAgICAgICA8UGxheUNvbnRyb2xzIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb252ZXJzYXRpb24nIHJlZj17bm9kZSA9PiB0aGlzLmNvbnZvID0gbm9kZX0+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Q2hhdCBhZGRNZXNzYWdlPXt0aGlzLmFkZE1lc3NhZ2V9Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnZlcnNhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBuZXdKb2tlIH0pID0+ICh7IGN1cnJlbnRKb2tlOiBuZXdKb2tlLmN1cnJlbnRKb2tlIH0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgZmV0Y2hKb2tlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZSB9LCBkaXNwYXRjaCksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoU3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleCk7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3461491448',
        css: '*{box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGMkIsQUFHbUMsc0JBQ2IsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXNyb2xsaW5zL0NvZGUtQ2hhbGxlbmdlcy9zcHJ1Y2Vib3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZSwgU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFBsYXlDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL1BsYXlDb250cm9scyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5hZGRNZXNzYWdlID0gdGhpcy5hZGRNZXNzYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeSwgc3RvcmV9KSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hSYW5kb21Kb2tlKCkpO1xuICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoTmVyZHlKb2tlKCkpO1xuICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoRXhwbGljaXRKb2tlKCkpO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmKHRoaXMucHJvcHMubWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogZmFsc2V9XX0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuY29udm8uc2Nyb2xsVG9wID0gdGhpcy5jb252by5zY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBhc3luYyBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZSB9ID0gdGhpcy5wcm9wcy5mZXRjaEpva2U7XG4gICAgY29uc3Qgam9rZUludGVudHMgPSBbJ3JhbmRvbWpva2UnLCAnbmVyZHlqb2tlJywgJ2V4cGxpY2l0am9rZSddO1xuICAgIGNvbnN0IGdldEpva2UgPSBbZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2VdO1xuXG4gICAgaWYoam9rZUludGVudHMuaW5jbHVkZXMoaW50ZW50KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBqb2tlSW50ZW50cy5pbmRleE9mKGludGVudCk7XG4gICAgICBhd2FpdCBnZXRKb2tlW2luZGV4XSgpO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2U6IGAke21lc3NhZ2V9ICR7dGhpcy5wcm9wcy5jdXJyZW50Sm9rZX1gLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZSwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IDxNZXNzYWdlIGtleT17aX0gdGV4dD17bWVzc2FnZS5tZXNzYWdlfSBpc1VzZXI9e21lc3NhZ2UuaXNVc2VyfS8+KTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgIDxoMT5TcHJ1Y2VCb3Q8L2gxPlxuICAgICAgICAgIDxQbGF5Q29udHJvbHMgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnZlcnNhdGlvbicgcmVmPXtub2RlID0+IHRoaXMuY29udm8gPSBub2RlfT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxDaGF0IGFkZE1lc3NhZ2U9e3RoaXMuYWRkTWVzc2FnZX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udmVyc2F0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG5ld0pva2UgfSkgPT4gKHsgY3VycmVudEpva2U6IG5ld0pva2UuY3VycmVudEpva2UgfSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaEpva2U6IGJpbmRBY3Rpb25DcmVhdG9ycyh7IGZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlIH0sIGRpc3BhdGNoKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref2) {
        var query = _ref2.query,
            store = _ref2.store;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                store.dispatch((0, _store.fetchRandomJoke)());
                store.dispatch((0, _store.fetchNerdyJoke)());
                store.dispatch((0, _store.fetchExplicitJoke)());
                return _context2.abrupt('return', query);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x3) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref4) {
  var newJoke = _ref4.newJoke;
  return { currentJoke: newJoke.currentJoke };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchJoke: (0, _redux.bindActionCreators)({ fetchRandomJoke: _store.fetchRandomJoke, fetchNerdyJoke: _store.fetchNerdyJoke, fetchExplicitJoke: _store.fetchExplicitJoke }, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.Store, mapStateToProps, mapDispatchToProps)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJmZXRjaFJhbmRvbUpva2UiLCJmZXRjaE5lcmR5Sm9rZSIsImZldGNoRXhwbGljaXRKb2tlIiwiU3RvcmUiLCJ3aXRoUmVkdXgiLCJDaGF0IiwiTWVzc2FnZSIsIkxheW91dCIsIlBsYXlDb250cm9scyIsIkluZGV4Iiwic3RhdGUiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2UiLCJiaW5kIiwibWVzc2FnZSIsInByb3BzIiwic2V0U3RhdGUiLCJpc1VzZXIiLCJjb252byIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImludGVudCIsImZldGNoSm9rZSIsImpva2VJbnRlbnRzIiwiZ2V0Sm9rZSIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwiY3VycmVudEpva2UiLCJjb252ZXJzYXRpb24iLCJtYXAiLCJpIiwibm9kZSIsInF1ZXJ5Iiwic3RvcmUiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm5ld0pva2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQWlCLEFBQWdCLEFBQW1CLEFBQWE7O0FBQzFFLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWtCOzs7Ozs7Ozs7SSxBQUVuQjtpQ0FDSjs7bUJBQWM7d0NBQUE7OzhIQUVaOztVQUFBLEFBQUs7Z0JBQUwsQUFBYSxBQUNELEFBRVo7QUFIYSxBQUNYO1VBRUYsQUFBSyxhQUFhLE1BQUEsQUFBSyxXQUFMLEFBQWdCLEtBTHRCLEFBS1o7V0FDRDs7Ozs7d0NBU21CO1VBQUEsQUFDVixXQUFhLEtBREgsQUFDUSxNQURSLEFBQ1Y7VUFEVSxBQUVWLFVBQVksS0FGRixBQUVPLE1BRlAsQUFFVixBQUNSOztVQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsU0FBUyxBQUNyQjthQUFBLEFBQUssU0FBUyxFQUFDLHFEQUFBLEFBQWMsWUFBVSxFQUFDLFNBQUQsU0FBVSxRQUFqRCxBQUFjLEFBQUMsQUFBd0IsQUFBa0IsQUFDMUQ7QUFDRjs7Ozt5Q0FFb0IsQUFDbkI7V0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxBQUNuQzs7Ozs7MkcsQUFFZ0IsUyxBQUFTOzs7Ozs7bUJBQ2hCO0EsMkJBQWEsSyxBQUFLLE1BQWxCLEE7bUNBQ3VELEtBQUEsQUFBSyxNLEFBQU0sV0FBbEUsQSxtQ0FBQSxBLGlCQUFpQixBLGtDQUFBLEEsZ0JBQWdCLEEscUMsQUFBQSxBQUNuQztBLDhCQUFjLENBQUEsQUFBQyxjQUFELEFBQWUsYUFBZixBQUE0QixBLEFBQzFDO0EsMEJBQVUsQ0FBQSxBQUFDLGlCQUFELEFBQWtCLGdCQUFsQixBQUFrQyxBOztxQkFFL0MsWUFBQSxBQUFZLFNBQVosQSxBQUFxQjs7O0FBQ2hCOztBLHdCQUFRLFlBQUEsQUFBWSxRQUFaLEEsQUFBb0I7O3VCQUM1QixRQUFBLEFBQVEsQTs7O2lEQUVQLEtBQUEsQUFBSyxTQUFTLEVBQUMscURBQUEsQUFBYyxZQUFVLEVBQUMsU0FBQSxBQUFZLGdCQUFXLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxhQUFlLFFBQVEsQ0FBQSxBQUFDLFNBQUQsQUFBVSxPLEFBQTNHLEFBQWMsQUFBQyxBQUF3QixBQUEyRTs7bUJBRzNIOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxxREFBQSxBQUFjLFlBQVUsRUFBQyxTQUFELFNBQVUsUUFBUSxDQUFBLEFBQUMsU0FBRCxBQUFVLE9BQW5FLEFBQWMsQUFBQyxBQUF3QixBQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUduRTttQkFBQTs7VUFBQSxBQUNDLFdBQWEsS0FEZCxBQUNtQixNQURuQixBQUNDLEFBQ1I7O1VBQU0sd0JBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsR0FBVjsrQkFBZ0IsQUFBQyxtQ0FBUSxLQUFULEFBQWMsR0FBRyxNQUFNLFFBQXZCLEFBQStCLFNBQVMsUUFBUSxRQUFoRCxBQUF3RDtzQkFBeEQ7d0JBQWhCLEFBQWdCO0FBQUE7U0FBQTtBQUFsRCxBQUFxQixBQUNyQixPQURxQjs2QkFFbkIsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzJDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLEFBQUM7O29CQUFEO3NCQUhKLEFBQ0UsQUFFRSxBQUVGO0FBRkU7QUFBQSwyQkFFRixjQUFBLGFBQWtDLEtBQUssbUJBQUE7aUJBQVEsT0FBQSxBQUFLLFFBQWIsQUFBcUI7QUFBNUQsOENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNHO0FBREg7U0FMRixBQUtFLEFBR0EsK0JBQUEsQUFBQyxnQ0FBSyxZQUFZLEtBQWxCLEFBQXVCO29CQUF2QjtzQkFSRixBQVFFO0FBQUE7O2lCQVJGO2FBQUE7QUFBQTtpQkFBQTthQURGLEFBQ0UsQUF1Q0g7QUF2Q0c7Ozs7OztZQXZDMEIsQSxjQUFBLEE7WUFBTyxBLGMsQUFBQTs7OzttQkFDbkM7c0JBQUEsQUFBTSxTQUFOLEFBQWUsQUFDZjtzQkFBQSxBQUFNLFNBQU4sQUFBZSxBQUNmO3NCQUFBLEFBQU0sU0FBTixBQUFlO2tEQUNSLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQWJTOztBQTBGcEIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7U0FBZSxFQUFFLGFBQWEsUUFBakMsQUFBa0IsQUFBdUI7QUFBakU7O0FBRUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQVksQUFDckM7O2VBQ2EsK0JBQW1CLEVBQUEsQUFBRSx5Q0FBRixBQUFtQix1Q0FBdEMsQUFBbUIsQUFBbUMsK0NBRG5FLEFBQU8sQUFDTSxBQUEyRSxBQUV6RjtBQUhRLEFBQ0w7QUFGSixBQU1BOztrQkFBZSxBQUFVLDhDQUFWLEFBQWlCLGlCQUFqQixBQUFrQyxvQkFBakQsQUFBZSxBQUFzRCIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=