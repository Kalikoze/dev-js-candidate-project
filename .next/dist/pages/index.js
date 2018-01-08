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
        var messages, _fetchRandomJoke, _fetchNerdyJoke;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messages = this.state.messages;

                if (!(intent === 'randomjoke')) {
                  _context.next = 6;
                  break;
                }

                _fetchRandomJoke = this.props.fetchJoke.fetchRandomJoke;
                _context.next = 5;
                return _fetchRandomJoke();

              case 5:
                return _context.abrupt('return', this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message + ' ' + this.props.randomJoke, isUser: !intent ? true : false }]) }));

              case 6:
                if (!(intent === 'nerdyjoke')) {
                  _context.next = 11;
                  break;
                }

                _fetchNerdyJoke = this.props.fetchJoke.fetchNerdyJoke;
                _context.next = 10;
                return _fetchNerdyJoke();

              case 10:
                return _context.abrupt('return', this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message + ' ' + this.props.nerdyJoke, isUser: !intent ? true : false }]) }));

              case 11:

                this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message, isUser: !intent ? true : false }]) });

              case 12:
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
            lineNumber: 59
          }
        });
      });
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-578239612',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'SpruceBot'), _react2.default.createElement('section', { ref: function ref(node) {
          return _this2.convo = node;
        }, className: 'jsx-578239612' + ' ' + 'conversation',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, conversation), _react2.default.createElement(_Chat2.default, { addMessage: this.addMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '797805421',
        css: 'h1.jsx-578239612{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#FFF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:\'Lato\',sans-serif;font-size:5vw;font-weight:700;height:20%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.conversation.jsx-578239612{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:65%;overflow-y:scroll;width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFb0IsQUFHZ0MsQUFZTiwwRUFDUyxtQkFaWCxXQUNFLGdEQVlGLFdBQ08sZUFaYSxHQWFyQixVQUNaLGlCQWJnQixjQUNFLGdCQUNMLFdBQ1ksbUdBQ1osV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWRkTWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnksIHN0b3JlfSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoUmFuZG9tSm9rZSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaE5lcmR5Sm9rZSgpKTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZih0aGlzLnByb3BzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6IGZhbHNlfV19KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNvbnZvLnNjcm9sbFRvcCA9IHRoaXMuY29udm8uc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgYXN5bmMgYWRkTWVzc2FnZShtZXNzYWdlLCBpbnRlbnQpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGludGVudCA9PT0gJ3JhbmRvbWpva2UnKSB7XG4gICAgICBjb25zdCB7IGZldGNoUmFuZG9tSm9rZSB9ID0gdGhpcy5wcm9wcy5mZXRjaEpva2U7XG4gICAgICBhd2FpdCBmZXRjaFJhbmRvbUpva2UoKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke3RoaXMucHJvcHMucmFuZG9tSm9rZX1gLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KVxuICAgIH1cblxuICAgIGlmIChpbnRlbnQgPT09ICduZXJkeWpva2UnKSB7XG4gICAgICBjb25zdCB7IGZldGNoTmVyZHlKb2tlIH0gPSB0aGlzLnByb3BzLmZldGNoSm9rZTtcbiAgICAgIGF3YWl0IGZldGNoTmVyZHlKb2tlKCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZTogYCR7bWVzc2FnZX0gJHt0aGlzLnByb3BzLm5lcmR5Sm9rZX1gLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gPE1lc3NhZ2Uga2V5PXtpfSB0ZXh0PXttZXNzYWdlLm1lc3NhZ2V9IGlzVXNlcj17bWVzc2FnZS5pc1VzZXJ9Lz4pO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+U3BydWNlQm90PC9oMT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb252ZXJzYXRpb24nIHJlZj17bm9kZSA9PiB0aGlzLmNvbnZvID0gbm9kZX0+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Q2hhdCBhZGRNZXNzYWdlPXt0aGlzLmFkZE1lc3NhZ2V9Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb252ZXJzYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcmFuZG9tSm9rZTogc3RhdGUucmFuZG9tSm9rZSxcbiAgbmVyZHlKb2tlOiBzdGF0ZS5uZXJkeUpva2Vcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZldGNoSm9rZTogYmluZEFjdGlvbkNyZWF0b3JzKHtmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlfSwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3461491448',
        css: '*{box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGMkIsQUFHbUMsc0JBQ2IsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXNyb2xsaW5zL0NvZGUtQ2hhbGxlbmdlcy9zcHJ1Y2Vib3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBDaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdCc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2UnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5hZGRNZXNzYWdlID0gdGhpcy5hZGRNZXNzYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeSwgc3RvcmV9KSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hSYW5kb21Kb2tlKCkpO1xuICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoTmVyZHlKb2tlKCkpO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmKHRoaXMucHJvcHMubWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogZmFsc2V9XX0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuY29udm8uc2Nyb2xsVG9wID0gdGhpcy5jb252by5zY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBhc3luYyBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoaW50ZW50ID09PSAncmFuZG9tam9rZScpIHtcbiAgICAgIGNvbnN0IHsgZmV0Y2hSYW5kb21Kb2tlIH0gPSB0aGlzLnByb3BzLmZldGNoSm9rZTtcbiAgICAgIGF3YWl0IGZldGNoUmFuZG9tSm9rZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2U6IGAke21lc3NhZ2V9ICR7dGhpcy5wcm9wcy5yYW5kb21Kb2tlfWAsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pXG4gICAgfVxuXG4gICAgaWYgKGludGVudCA9PT0gJ25lcmR5am9rZScpIHtcbiAgICAgIGNvbnN0IHsgZmV0Y2hOZXJkeUpva2UgfSA9IHRoaXMucHJvcHMuZmV0Y2hKb2tlO1xuICAgICAgYXdhaXQgZmV0Y2hOZXJkeUpva2UoKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke3RoaXMucHJvcHMubmVyZHlKb2tlfWAsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiA8TWVzc2FnZSBrZXk9e2l9IHRleHQ9e21lc3NhZ2UubWVzc2FnZX0gaXNVc2VyPXttZXNzYWdlLmlzVXNlcn0vPik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5TcHJ1Y2VCb3Q8L2gxPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnZlcnNhdGlvbicgcmVmPXtub2RlID0+IHRoaXMuY29udm8gPSBub2RlfT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxDaGF0IGFkZE1lc3NhZ2U9e3RoaXMuYWRkTWVzc2FnZX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnZlcnNhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICByYW5kb21Kb2tlOiBzdGF0ZS5yYW5kb21Kb2tlLFxuICBuZXJkeUpva2U6IHN0YXRlLm5lcmR5Sm9rZVxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmV0Y2hKb2tlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoe2ZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2V9LCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KFN0b3JlLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5kZXgpXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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
                return _context2.abrupt('return', query);

              case 3:
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    randomJoke: state.randomJoke,
    nerdyJoke: state.nerdyJoke
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchJoke: (0, _redux.bindActionCreators)({ fetchRandomJoke: _store.fetchRandomJoke, fetchNerdyJoke: _store.fetchNerdyJoke }, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.Store, mapStateToProps, mapDispatchToProps)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJmZXRjaFJhbmRvbUpva2UiLCJmZXRjaE5lcmR5Sm9rZSIsIlN0b3JlIiwid2l0aFJlZHV4IiwiQ2hhdCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJJbmRleCIsInN0YXRlIiwibWVzc2FnZXMiLCJhZGRNZXNzYWdlIiwiYmluZCIsIm1lc3NhZ2UiLCJwcm9wcyIsInNldFN0YXRlIiwiaXNVc2VyIiwiY29udm8iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJpbnRlbnQiLCJmZXRjaEpva2UiLCJyYW5kb21Kb2tlIiwibmVyZHlKb2tlIiwiY29udmVyc2F0aW9uIiwibWFwIiwiaSIsIm5vZGUiLCJxdWVyeSIsInN0b3JlIiwiZGlzcGF0Y2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQWlCLEFBQWdCLEFBQWE7O0FBQ3ZELEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTtpQ0FDSjs7bUJBQWM7d0NBQUE7OzhIQUVaOztVQUFBLEFBQUs7Z0JBQUwsQUFBYSxBQUNELEFBRVo7QUFIYSxBQUNYO1VBRUYsQUFBSyxhQUFhLE1BQUEsQUFBSyxXQUFMLEFBQWdCLEtBTHRCLEFBS1o7V0FDRDs7Ozs7d0NBUW1CO1VBQUEsQUFDVixXQUFhLEtBREgsQUFDUSxNQURSLEFBQ1Y7VUFEVSxBQUVWLFVBQVksS0FGRixBQUVPLE1BRlAsQUFFVixBQUNSOztVQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsU0FBUyxBQUNyQjthQUFBLEFBQUssU0FBUyxFQUFDLHFEQUFBLEFBQWMsWUFBVSxFQUFDLFNBQUQsU0FBVSxRQUFqRCxBQUFjLEFBQUMsQUFBd0IsQUFBa0IsQUFDMUQ7QUFDRjs7Ozt5Q0FFb0IsQUFDbkI7V0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxBQUNuQzs7Ozs7MkcsQUFFZ0IsUyxBQUFTOzs7Ozs7bUJBQ2hCO0EsMkJBQWEsS0FBSyxBLE0sQUFBbEI7O3NCQUVKLFcsQUFBVzs7O0FBQ0w7O0EsbUNBQW9CLEtBQUEsQUFBSyxNQUFNLEEsVSxBQUEvQjs7dUJBQ0YsQTs7O2lEQUVDLEtBQUEsQUFBSyxTQUFTLEVBQUMscURBQUEsQUFBYyxZQUFVLEVBQUMsU0FBQSxBQUFZLGdCQUFXLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxZQUFjLFFBQVEsQ0FBQSxBQUFDLFNBQUQsQUFBVSxPQUExRyxBQUFjLEFBQUMsQSxBQUF3QixBQUEwRTs7O3NCQUd0SCxXLEFBQVc7OztBQUNMOztBLGtDQUFtQixLQUFBLEFBQUssTUFBTSxBLFVBQTlCLEE7O3VCQUNGLEE7OztpREFFQyxLQUFBLEFBQUssU0FBUyxFQUFDLHFEQUFBLEFBQWMsWUFBVSxFQUFDLFNBQUEsQUFBWSxnQkFBVyxLQUFBLEFBQUssTUFBN0IsQUFBbUMsV0FBYSxRQUFRLENBQUEsQUFBQyxTQUFELEFBQVUsTyxBQUF6RyxBQUFjLEFBQUMsQUFBd0IsQUFBeUU7O21CQUd6SDs7cUJBQUEsQUFBSyxTQUFTLEVBQUMscURBQUEsQUFBYyxZQUFVLEVBQUMsU0FBRCxTQUFVLFFBQVEsQ0FBQSxBQUFDLFNBQUQsQUFBVSxPQUFuRSxBQUFjLEFBQUMsQUFBd0IsQUFBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHbkU7bUJBQUE7O1VBQUEsQUFDQyxXQUFhLEtBRGQsQUFDbUIsTUFEbkIsQUFDQyxBQUNSOztVQUFNLHdCQUFlLEFBQVMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLEdBQVY7K0JBQWdCLEFBQUMsbUNBQVEsS0FBVCxBQUFjLEdBQUcsTUFBTSxRQUF2QixBQUErQixTQUFTLFFBQVEsUUFBaEQsQUFBd0Q7c0JBQXhEO3dCQUFoQixBQUFnQjtBQUFBO1NBQUE7QUFBbEQsQUFBcUIsQUFDckIsT0FEcUI7NkJBRW5CLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLGNBQUEsYUFBa0MsS0FBSyxtQkFBQTtpQkFBUSxPQUFBLEFBQUssUUFBYixBQUFxQjtBQUE1RCw4Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0c7QUFESDtTQUZGLEFBRUUsQUFHQSwrQkFBQSxBQUFDLGdDQUFLLFlBQVksS0FBbEIsQUFBdUI7b0JBQXZCO3NCQUxGLEFBS0U7QUFBQTs7aUJBTEY7YUFBQTtBQUFBO2lCQUFBO2FBREYsQUFDRSxBQW9DSDtBQXBDRzs7Ozs7O1lBMUMwQixBLGMsQUFBQTtZLEFBQU8sYyxBQUFBOzs7O21CQUNuQztzQkFBQSxBQUFNLFNBQU4sQUFBZSxBQUNmO3NCQUFBLEFBQU0sU0FBTixBQUFlO2tEQUNSLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaUyxBOztBQTBGcEIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQUE7O2dCQUNWLE1BRG9CLEFBQ2QsQUFDbEI7ZUFBVyxNQUZXLEFBQVUsQUFFZjtBQUZlLEFBQ2hDO0FBREY7O0FBS0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztlQUNhLCtCQUFtQixFQUFBLEFBQUMseUNBQXBCLEFBQW1CLEFBQWtCLHlDQURsRCxBQUFPLEFBQ00sQUFBc0QsQUFFcEU7QUFIUSxBQUNMO0FBRkosQUFNQTs7a0JBQWUsQUFBVSw4Q0FBVixBQUFpQixpQkFBakIsQUFBa0Msb0JBQWpELEFBQWUsQUFBc0QiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9