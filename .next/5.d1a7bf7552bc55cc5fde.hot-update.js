webpackHotUpdate(5,{

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(395);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _redux = __webpack_require__(392);

var _store = __webpack_require__(424);

var _nextReduxWrapper = __webpack_require__(427);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Chat = __webpack_require__(446);

var _Chat2 = _interopRequireDefault(_Chat);

var _Message = __webpack_require__(449);

var _Message2 = _interopRequireDefault(_Message);

var _Layout = __webpack_require__(450);

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
            lineNumber: 56
          }
        });
      });
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-578239612',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'SpruceBot'), _react2.default.createElement('section', { ref: function ref(node) {
          return _this2.convo = node;
        }, className: 'jsx-578239612' + ' ' + 'conversation',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, conversation), _react2.default.createElement(_Chat2.default, { addMessage: this.addMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '797805421',
        css: 'h1.jsx-578239612{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#FFF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:\'Lato\',sans-serif;font-size:5vw;font-weight:700;height:20%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.conversation.jsx-578239612{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:65%;overflow-y:scroll;width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEb0IsQUFHZ0MsQUFZTiwwRUFDUyxtQkFaWCxXQUNFLGdEQVlGLFdBQ08sZUFaYSxHQWFyQixVQUNaLGlCQWJnQixjQUNFLGdCQUNMLFdBQ1ksbUdBQ1osV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UsIFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IENoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlczogW10sXG4gICAgfTtcbiAgICB0aGlzLmFkZE1lc3NhZ2UgPSB0aGlzLmFkZE1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5LCBzdG9yZX0pIHtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaFJhbmRvbUpva2UoKSk7XG4gICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hOZXJkeUpva2UoKSk7XG4gICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hFeHBsaWNpdEpva2UoKSk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYodGhpcy5wcm9wcy5tZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZSwgaXNVc2VyOiBmYWxzZX1dfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jb252by5zY3JvbGxUb3AgPSB0aGlzLmNvbnZvLnNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIGFzeW5jIGFkZE1lc3NhZ2UobWVzc2FnZSwgaW50ZW50KSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlIH0gPSB0aGlzLnByb3BzLmZldGNoSm9rZTtcbiAgICBjb25zdCBqb2tlSW50ZW50cyA9IFsncmFuZG9tam9rZScsICduZXJkeWpva2UnLCAnZXhwbGljaXRqb2tlJ107XG4gICAgY29uc3QgZ2V0Sm9rZSA9IFtmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZV07XG5cbiAgICBpZihqb2tlSW50ZW50cy5pbmNsdWRlcyhpbnRlbnQpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGpva2VJbnRlbnRzLmluZGV4T2YoaW50ZW50KTtcbiAgICAgIGF3YWl0IGdldEpva2VbaW5kZXhdKCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZTogYCR7bWVzc2FnZX0gJHt0aGlzLnByb3BzLmN1cnJlbnRKb2tlfWAsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gPE1lc3NhZ2Uga2V5PXtpfSB0ZXh0PXttZXNzYWdlLm1lc3NhZ2V9IGlzVXNlcj17bWVzc2FnZS5pc1VzZXJ9Lz4pO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+U3BydWNlQm90PC9oMT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb252ZXJzYXRpb24nIHJlZj17bm9kZSA9PiB0aGlzLmNvbnZvID0gbm9kZX0+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Q2hhdCBhZGRNZXNzYWdlPXt0aGlzLmFkZE1lc3NhZ2V9Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb252ZXJzYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgY3VycmVudEpva2U6IHN0YXRlLmN1cnJlbnRKb2tlXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaEpva2U6IGJpbmRBY3Rpb25DcmVhdG9ycyh7IGZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlIH0sIGRpc3BhdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoU3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleClcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3461491448',
        css: '*{box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9GMkIsQUFHbUMsc0JBQ2IsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXNyb2xsaW5zL0NvZGUtQ2hhbGxlbmdlcy9zcHJ1Y2Vib3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZSwgU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWRkTWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnksIHN0b3JlfSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoUmFuZG9tSm9rZSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaE5lcmR5Sm9rZSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaEV4cGxpY2l0Sm9rZSgpKTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZih0aGlzLnByb3BzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6IGZhbHNlfV19KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNvbnZvLnNjcm9sbFRvcCA9IHRoaXMuY29udm8uc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgYXN5bmMgYWRkTWVzc2FnZShtZXNzYWdlLCBpbnRlbnQpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UgfSA9IHRoaXMucHJvcHMuZmV0Y2hKb2tlO1xuICAgIGNvbnN0IGpva2VJbnRlbnRzID0gWydyYW5kb21qb2tlJywgJ25lcmR5am9rZScsICdleHBsaWNpdGpva2UnXTtcbiAgICBjb25zdCBnZXRKb2tlID0gW2ZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlXTtcblxuICAgIGlmKGpva2VJbnRlbnRzLmluY2x1ZGVzKGludGVudCkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gam9rZUludGVudHMuaW5kZXhPZihpbnRlbnQpO1xuICAgICAgYXdhaXQgZ2V0Sm9rZVtpbmRleF0oKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke3RoaXMucHJvcHMuY3VycmVudEpva2V9YCwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiA8TWVzc2FnZSBrZXk9e2l9IHRleHQ9e21lc3NhZ2UubWVzc2FnZX0gaXNVc2VyPXttZXNzYWdlLmlzVXNlcn0vPik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5TcHJ1Y2VCb3Q8L2gxPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnZlcnNhdGlvbicgcmVmPXtub2RlID0+IHRoaXMuY29udm8gPSBub2RlfT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxDaGF0IGFkZE1lc3NhZ2U9e3RoaXMuYWRkTWVzc2FnZX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnZlcnNhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBjdXJyZW50Sm9rZTogc3RhdGUuY3VycmVudEpva2Vcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZldGNoSm9rZTogYmluZEFjdGlvbkNyZWF0b3JzKHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UgfSwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentJoke: state.currentJoke
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchJoke: (0, _redux.bindActionCreators)({ fetchRandomJoke: _store.fetchRandomJoke, fetchNerdyJoke: _store.fetchNerdyJoke, fetchExplicitJoke: _store.fetchExplicitJoke }, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.Store, mapStateToProps, mapDispatchToProps)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJmZXRjaFJhbmRvbUpva2UiLCJmZXRjaE5lcmR5Sm9rZSIsImZldGNoRXhwbGljaXRKb2tlIiwiU3RvcmUiLCJ3aXRoUmVkdXgiLCJDaGF0IiwiTWVzc2FnZSIsIkxheW91dCIsIkluZGV4Iiwic3RhdGUiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2UiLCJiaW5kIiwibWVzc2FnZSIsInByb3BzIiwic2V0U3RhdGUiLCJpc1VzZXIiLCJjb252byIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImludGVudCIsImZldGNoSm9rZSIsImpva2VJbnRlbnRzIiwiZ2V0Sm9rZSIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwiY3VycmVudEpva2UiLCJjb252ZXJzYXRpb24iLCJtYXAiLCJpIiwibm9kZSIsInF1ZXJ5Iiwic3RvcmUiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBaUIsQUFBZ0IsQUFBbUIsQUFBYTs7QUFDMUUsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViO2lDQUNKOzttQkFBYzt3Q0FBQTs7OEhBRVo7O1VBQUEsQUFBSztnQkFBTCxBQUFhLEFBQ0QsQUFFWjtBQUhhLEFBQ1g7VUFFRixBQUFLLGFBQWEsTUFBQSxBQUFLLFdBQUwsQUFBZ0IsS0FMdEIsQUFLWjtXQUNEOzs7Ozt3Q0FTbUI7VUFBQSxBQUNWLFdBQWEsS0FESCxBQUNRLE1BRFIsQUFDVjtVQURVLEFBRVYsVUFB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMWE3YmY3NTUyYmM1NWNjNWZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/Njc2MjE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZSwgU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWRkTWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnksIHN0b3JlfSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoUmFuZG9tSm9rZSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaE5lcmR5Sm9rZSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChmZXRjaEV4cGxpY2l0Sm9rZSgpKTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZih0aGlzLnByb3BzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6IGZhbHNlfV19KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNvbnZvLnNjcm9sbFRvcCA9IHRoaXMuY29udm8uc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgYXN5bmMgYWRkTWVzc2FnZShtZXNzYWdlLCBpbnRlbnQpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UgfSA9IHRoaXMucHJvcHMuZmV0Y2hKb2tlO1xuICAgIGNvbnN0IGpva2VJbnRlbnRzID0gWydyYW5kb21qb2tlJywgJ25lcmR5am9rZScsICdleHBsaWNpdGpva2UnXTtcbiAgICBjb25zdCBnZXRKb2tlID0gW2ZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlXTtcblxuICAgIGlmKGpva2VJbnRlbnRzLmluY2x1ZGVzKGludGVudCkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gam9rZUludGVudHMuaW5kZXhPZihpbnRlbnQpO1xuICAgICAgYXdhaXQgZ2V0Sm9rZVtpbmRleF0oKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke3RoaXMucHJvcHMuY3VycmVudEpva2V9YCwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiA8TWVzc2FnZSBrZXk9e2l9IHRleHQ9e21lc3NhZ2UubWVzc2FnZX0gaXNVc2VyPXttZXNzYWdlLmlzVXNlcn0vPik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5TcHJ1Y2VCb3Q8L2gxPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnZlcnNhdGlvbicgcmVmPXtub2RlID0+IHRoaXMuY29udm8gPSBub2RlfT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxDaGF0IGFkZE1lc3NhZ2U9e3RoaXMuYWRkTWVzc2FnZX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnZlcnNhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBjdXJyZW50Sm9rZTogc3RhdGUuY3VycmVudEpva2Vcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZldGNoSm9rZTogYmluZEFjdGlvbkNyZWF0b3JzKHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UgfSwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBOzs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUFBO0FBb0NBO0FBcENBOzs7Ozs7Ozs7OztBQXRDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQTs7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBOztBQUVBO0FBQUE7QUFJQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==