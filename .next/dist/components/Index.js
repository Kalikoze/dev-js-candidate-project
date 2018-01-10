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

var _ChatContainer = require('../containers/ChatContainer');

var _ChatContainer2 = _interopRequireDefault(_ChatContainer);

var _store = require('../store');

var _Message = require('../components/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _PlayControls = require('../components/PlayControls');

var _PlayControls2 = _interopRequireDefault(_PlayControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/components/Index.js';


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
            lineNumber: 52
          }
        });
      });
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-3139470545' + ' ' + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-3139470545',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'SpruceBot'), _react2.default.createElement(_PlayControls2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement('section', { ref: function ref(node) {
          return _this2.convo = node;
        }, className: 'jsx-3139470545' + ' ' + 'conversation',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, conversation), _react2.default.createElement(_ChatContainer2.default, { addMessage: this.addMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1910840448',
        css: '.header.jsx-3139470545{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#FFF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:\'Lato\',sans-serif;font-size:72px;font-weight:700;height:20%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.conversation.jsx-3139470545{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:65%;overflow-y:scroll;width:70%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERvQixBQUdnQyxBQVlOLDBFQUNTLG1CQVpYLFdBQ0UsZ0RBWUYsV0FDTyxlQVphLEdBYXJCLFVBQ1osaUJBYmlCLGVBQ0MsZ0JBQ0wsV0FDWSxtR0FDWixXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvSW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBDaGF0Q29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ2hhdENvbnRhaW5lcic7XG5pbXBvcnQgeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQbGF5Q29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5Q29udHJvbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWRkTWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZih0aGlzLnByb3BzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6IGZhbHNlfV19KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNvbnZvLnNjcm9sbFRvcCA9IHRoaXMuY29udm8uc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgYXN5bmMgYWRkTWVzc2FnZShtZXNzYWdlLCBpbnRlbnQpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2UgfSA9IHRoaXMucHJvcHMuZmV0Y2hKb2tlO1xuICAgIGNvbnN0IGpva2VJbnRlbnRzID0gWydyYW5kb21qb2tlJywgJ25lcmR5am9rZScsICdleHBsaWNpdGpva2UnXTtcbiAgICBjb25zdCBnZXRKb2tlID0gW2ZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlXTtcblxuICAgIGlmKGpva2VJbnRlbnRzLmluY2x1ZGVzKGludGVudCkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gam9rZUludGVudHMuaW5kZXhPZihpbnRlbnQpO1xuICAgICAgYXdhaXQgZ2V0Sm9rZVtpbmRleF0oKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke3RoaXMucHJvcHMuY3VycmVudEpva2V9YCwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogIWludGVudCA/IHRydWUgOiBmYWxzZSB9XX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiA8TWVzc2FnZSBrZXk9e2l9IHRleHQ9e21lc3NhZ2UubWVzc2FnZX0gaXNVc2VyPXttZXNzYWdlLmlzVXNlcn0vPik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICA8aDE+U3BydWNlQm90PC9oMT5cbiAgICAgICAgICA8UGxheUNvbnRyb2xzIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb252ZXJzYXRpb24nIHJlZj17bm9kZSA9PiB0aGlzLmNvbnZvID0gbm9kZX0+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Q2hhdENvbnRhaW5lciBhZGRNZXNzYWdlPXt0aGlzLmFkZE1lc3NhZ2V9Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDcycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb252ZXJzYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Index.js */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3461491448',
        css: '*{box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUYyQixBQUdtQyxzQkFDYixTQUNDLFVBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9JbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IENoYXRDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9DaGF0Q29udGFpbmVyJztcbmltcG9ydCB7IGZldGNoUmFuZG9tSm9rZSwgZmV0Y2hOZXJkeUpva2UsIGZldGNoRXhwbGljaXRKb2tlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFBsYXlDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL1BsYXlDb250cm9scyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5hZGRNZXNzYWdlID0gdGhpcy5hZGRNZXNzYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmKHRoaXMucHJvcHMubWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogZmFsc2V9XX0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuY29udm8uc2Nyb2xsVG9wID0gdGhpcy5jb252by5zY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBhc3luYyBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmZXRjaFJhbmRvbUpva2UsIGZldGNoTmVyZHlKb2tlLCBmZXRjaEV4cGxpY2l0Sm9rZSB9ID0gdGhpcy5wcm9wcy5mZXRjaEpva2U7XG4gICAgY29uc3Qgam9rZUludGVudHMgPSBbJ3JhbmRvbWpva2UnLCAnbmVyZHlqb2tlJywgJ2V4cGxpY2l0am9rZSddO1xuICAgIGNvbnN0IGdldEpva2UgPSBbZmV0Y2hSYW5kb21Kb2tlLCBmZXRjaE5lcmR5Sm9rZSwgZmV0Y2hFeHBsaWNpdEpva2VdO1xuXG4gICAgaWYoam9rZUludGVudHMuaW5jbHVkZXMoaW50ZW50KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBqb2tlSW50ZW50cy5pbmRleE9mKGludGVudCk7XG4gICAgICBhd2FpdCBnZXRKb2tlW2luZGV4XSgpO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2U6IGAke21lc3NhZ2V9ICR7dGhpcy5wcm9wcy5jdXJyZW50Sm9rZX1gLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZSwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IDxNZXNzYWdlIGtleT17aX0gdGV4dD17bWVzc2FnZS5tZXNzYWdlfSBpc1VzZXI9e21lc3NhZ2UuaXNVc2VyfS8+KTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgIDxoMT5TcHJ1Y2VCb3Q8L2gxPlxuICAgICAgICAgIDxQbGF5Q29udHJvbHMgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnZlcnNhdGlvbicgcmVmPXtub2RlID0+IHRoaXMuY29udm8gPSBub2RlfT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxDaGF0Q29udGFpbmVyIGFkZE1lc3NhZ2U9e3RoaXMuYWRkTWVzc2FnZX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnZlcnNhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Index.js */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref2) {
        var query = _ref2.query;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', query);

              case 1:
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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmZXRjaCIsIkNoYXRDb250YWluZXIiLCJmZXRjaFJhbmRvbUpva2UiLCJmZXRjaE5lcmR5Sm9rZSIsImZldGNoRXhwbGljaXRKb2tlIiwiTWVzc2FnZSIsIkxheW91dCIsIlBsYXlDb250cm9scyIsIkluZGV4Iiwic3RhdGUiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2UiLCJiaW5kIiwibWVzc2FnZSIsInByb3BzIiwic2V0U3RhdGUiLCJpc1VzZXIiLCJjb252byIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImludGVudCIsImZldGNoSm9rZSIsImpva2VJbnRlbnRzIiwiZ2V0Sm9rZSIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwiY3VycmVudEpva2UiLCJjb252ZXJzYXRpb24iLCJtYXAiLCJpIiwibm9kZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBUyxBQUFpQixBQUFnQixBQUF5Qjs7QUFDbkUsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWtCOzs7Ozs7Ozs7SSxBQUVKO2lDQUNuQjs7bUJBQWM7d0NBQUE7OzhIQUVaOztVQUFBLEFBQUs7Z0JBQUwsQUFBYSxBQUNELEFBRVo7QUFIYSxBQUNYO1VBRUYsQUFBSyxhQUFhLE1BQUEsQUFBSyxXQUFMLEFBQWdCLEtBTHRCLEFBS1o7V0FDRDs7Ozs7d0NBTW1CO1VBQUEsQUFDVixXQUFhLEtBREgsQUFDUSxNQURSLEFBQ1Y7VUFEVSxBQUVWLFVBQVksS0FGRixBQUVPLE1BRlAsQUFFVixBQUNSOztVQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsU0FBUyxBQUNyQjthQUFBLEFBQUssU0FBUyxFQUFDLHFEQUFBLEFBQWMsWUFBVSxFQUFDLFNBQUQsU0FBVSxRQUFqRCxBQUFjLEFBQUMsQUFBd0IsQUFBa0IsQUFDMUQ7QUFDRjs7Ozt5Q0FFb0IsQUFDbkI7V0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxBQUNuQzs7Ozs7MkcsQUFFZ0IsU0FBUyxBOzs7Ozs7bUJBQ2hCO0EsMkJBQWEsSyxBQUFLLE1BQWxCLEE7bUNBQ3VELEtBQUEsQUFBSyxNQUFNLEEsV0FBbEUsQSxtQ0FBQSxBLGlCQUFpQixBLGtDQUFBLEEsZ0JBQWdCLEEscUMsQUFBQSxBQUNuQztBLDhCQUFjLENBQUEsQUFBQyxjQUFELEFBQWUsYUFBZixBQUE0QixBLEFBQzFDO0EsMEJBQVUsQ0FBQSxBQUFDLGlCQUFELEFBQWtCLGdCQUFsQixBQUFrQyxBOztxQkFFL0MsWUFBQSxBQUFZLFMsQUFBWixBQUFxQjs7O0FBQ2hCOztBLHdCQUFRLFlBQUEsQUFBWSxRQUFaLEFBQW9CLEE7O3VCQUM1QixRQUFBLEEsQUFBUTs7O2lEQUVQLEtBQUEsQUFBSyxTQUFTLEVBQUMscURBQUEsQUFBYyxZQUFVLEVBQUMsU0FBQSxBQUFZLGdCQUFXLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxhQUFlLFFBQVEsQ0FBQSxBQUFDLFNBQUQsQUFBVSxPQUEzRyxBQUFjLEFBQUMsQSxBQUF3QixBQUEyRTs7bUJBRzNIOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxxREFBQSxBQUFjLFlBQVUsRUFBQyxTQUFELFNBQVUsUUFBUSxDQUFBLEFBQUMsU0FBRCxBQUFVLE9BQW5FLEFBQWMsQUFBQyxBQUF3QixBQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUduRTttQkFBQTs7VUFBQSxBQUNDLFdBQWEsS0FEZCxBQUNtQixNQURuQixBQUNDLEFBQ1I7O1VBQU0sd0JBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsR0FBVjsrQkFBZ0IsQUFBQyxtQ0FBUSxLQUFULEFBQWMsR0FBRyxNQUFNLFFBQXZCLEFBQStCLFNBQVMsUUFBUSxRQUFoRCxBQUF3RDtzQkFBeEQ7d0JBQWhCLEFBQWdCO0FBQUE7U0FBQTtBQUFsRCxBQUFxQixBQUNyQixPQURxQjs2QkFFbkIsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLEFBQUM7O29CQUFEO3NCQUhKLEFBQ0UsQUFFRSxBQUVGO0FBRkU7QUFBQSwyQkFFRixjQUFBLGFBQWtDLEtBQUssbUJBQUE7aUJBQVEsT0FBQSxBQUFLLFFBQWIsQUFBcUI7QUFBNUQsK0NBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNHO0FBREg7U0FMRixBQUtFLEFBR0EsK0JBQUEsQUFBQyx5Q0FBYyxZQUFZLEtBQTNCLEFBQWdDO29CQUFoQztzQkFSRixBQVFFO0FBQUE7O2lCQVJGO2FBQUE7QUFBQTtpQkFBQTthQURGLEFBQ0UsQUF1Q0g7QUF2Q0c7Ozs7OztZLEFBcEMyQixjQUFBLEE7Ozs7O2tELEFBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVndCLEE7O2tCQUFkLEEiLCJmaWxlIjoiSW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9