webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(240);

var _Header = __webpack_require__(117);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(120);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(121);

var _Listings2 = _interopRequireDefault(_Listings);

var _Details = __webpack_require__(119);

var _Details2 = _interopRequireDefault(_Details);

var _Category = __webpack_require__(118);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Jean'
    }, _this.clickedBtn = function () {
      console.log('swag');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:item', component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(114);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Joe'
    }, _this.clickedBtn = function () {
      console.log('swag');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'left-menu' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              'Craigslist'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city' },
              'Montreal',
              _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-menu' },
            _react2.default.createElement(
              'div',
              { className: 'user-img' },
              'img'
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-dropdown' },
              'my account',
              _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'post-btn' },
              'post to classifieds'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Category);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Category.__proto__ || Object.getPrototypeOf(Category)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Joe'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Category, [{
    key: 'render',
    value: function render() {
      // destructuring this.props object by creating variables
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'category' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          'category is ',
          match.params.category
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Gallery = __webpack_require__(122);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
    _inherits(Details, _Component);

    function Details() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Details);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Details.__proto__ || Object.getPrototypeOf(Details)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: 'Jean'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Details, [{
        key: 'render',
        value: function render() {
            // destructuring this.props object by creating variables
            var _props = this.props,
                match = _props.match,
                location = _props.location,
                history = _props.history;

            return _react2.default.createElement(
                'div',
                { className: 'details-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'white-box' },
                        _react2.default.createElement(
                            'section',
                            { className: 'sub-menu' },
                            _react2.default.createElement(
                                'div',
                                { className: 'direction' },
                                _react2.default.createElement(
                                    'a',
                                    { className: 'prev', href: '#' },
                                    'Prev'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { className: 'next', href: '#' },
                                    'Next'
                                )
                            ),
                            _react2.default.createElement(
                                'nav',
                                { className: 'sub-links' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'More Ads by User'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Print'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Share'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Contact Seller'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'content-area' },
                            _react2.default.createElement(
                                'div',
                                { className: 'display-column' },
                                _react2.default.createElement(_Gallery2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'detail-column' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'date-posted' },
                                    'Posted: Jan 12th'
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'title' },
                                    'Black 2016 BMW M'
                                ),
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'cost' },
                                    '$56,000'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'car-features' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Vin'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            'wueufhfhg'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Mileage'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            '5675'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Transmission'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            '6-Speed Automatic'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Vin'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            'wueufhfhg'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Mileage'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            '5675'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Transmission'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            '6-Speed Automatic'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Vin'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            'wueufhfhg'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Mileage'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            '5675'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info' },
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Transmission'
                                        ),
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            '6-Speed Automatic'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'description' },
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        'Description'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Lorem ipsum dolor amet la croix messenger bag seitan pabst polaroid sriracha skateboard cred succulents four loko woke paleo wolf gastropub. Yuccie flexitarian locavore DIY vinyl blog intelligentsia +1. Flannel beard hexagon truffaut vape hashtag, actually franzen jean shorts vinyl migas pop-up crucifix. Whatever raclette 3 wolf moon fanny pack ugh echo park succulents.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Lorem ipsum dolor amet la croix messenger bag seitan pabst polaroid sriracha skateboard cred succulents four loko woke paleo wolf gastropub. Yuccie flexitarian locavore DIY vinyl blog intelligentsia +1. Flannel beard hexagon truffaut vape hashtag, actually franzen jean shorts vinyl migas pop-up crucifix. Whatever raclette 3 wolf moon fanny pack ugh echo park succulents.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Lorem ipsum dolor amet la croix messenger bag seitan pabst polaroid sriracha skateboard cred succulents four loko woke paleo wolf gastropub. Yuccie flexitarian locavore DIY vinyl blog intelligentsia +1. Flannel beard hexagon truffaut vape hashtag, actually franzen jean shorts vinyl migas pop-up crucifix. Whatever raclette 3 wolf moon fanny pack ugh echo park succulents.'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: 'Jean'
        }, _this.loopCategories = function () {
            var testArray = [1, 2, 3, 4, 5, 6, 7];
            return testArray.map(function (category, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, className: 'categories' },
                    _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        'Community'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'links-group' },
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'General'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Community'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Activities'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Local News'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Events'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Pets'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Childcare'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Lost + Found'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Classes'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Musician'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Groups'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'link' },
                            'Artists'
                        )
                    )
                );
            });
        }, _this.loopTags = function () {
            var testTags = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
            return testTags.map(function (tag, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, className: 'tag' },
                    'Apple Macbook'
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Connecting people ',
                        _react2.default.createElement('br', null),
                        ' Everywhere'
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'links-listing' },
                        this.loopCategories()
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'trending' },
                        _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'trends-title' },
                            _react2.default.createElement('i', { className: 'far fa-clock' }),
                            'TRENDING NOW'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'trends-tags' },
                            this.loopTags()
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Listings);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Listings.__proto__ || Object.getPrototypeOf(Listings)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: 'Joe'
        }, _this.loopItems = function () {
            var testArray = [1, 2, 3, 4, 5, 6, 7, 8];
            return testArray.map(function (category, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'image' },
                        _react2.default.createElement(
                            'div',
                            { className: 'item-price' },
                            '$10.000'
                        ),
                        'Image'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'details' },
                        _react2.default.createElement('i', { className: 'far fa-star' }),
                        _react2.default.createElement(
                            'h5',
                            null,
                            '2017 BMW M'
                        ),
                        _react2.default.createElement(
                            'h6',
                            null,
                            'Toronto'
                        )
                    )
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Listings, [{
        key: 'render',
        value: function render() {
            // destructuring this.props object by creating variables
            var _props = this.props,
                match = _props.match,
                location = _props.location,
                history = _props.history;

            return _react2.default.createElement(
                'div',
                { className: 'listings-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'section',
                        { id: 'filters' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group price' },
                            _react2.default.createElement(
                                'label',
                                null,
                                'Price'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'min-max' },
                                _react2.default.createElement(
                                    'select',
                                    { name: 'min-price', className: 'min-price' },
                                    _react2.default.createElement(
                                        'option',
                                        { value: '0' },
                                        '0'
                                    )
                                ),
                                _react2.default.createElement(
                                    'select',
                                    { name: 'max-price', className: 'max-price' },
                                    _react2.default.createElement(
                                        'option',
                                        { value: '1000' },
                                        '1000'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group car-make' },
                            _react2.default.createElement(
                                'label',
                                null,
                                'Make'
                            ),
                            _react2.default.createElement(
                                'select',
                                { name: 'car-make', className: 'car-make' },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'bmw' },
                                    'bmw'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group car-model' },
                            _react2.default.createElement(
                                'label',
                                null,
                                'Model'
                            ),
                            _react2.default.createElement(
                                'select',
                                { name: 'car-model', className: 'car-model' },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'M6' },
                                    'M6'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group button' },
                            _react2.default.createElement(
                                'div',
                                { className: 'update-btn' },
                                'Update'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'reset-btn' },
                                'Reset'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'list-view' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'white-box' },
                            _react2.default.createElement(
                                'section',
                                { className: 'change-view' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group view-dropdown' },
                                    _react2.default.createElement(
                                        'select',
                                        { name: 'view-select', className: 'view-select' },
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'gallery' },
                                            'Gallery View'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'list' },
                                            'List View'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'thumb' },
                                            'Thumb View'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group sort-dropdown' },
                                    _react2.default.createElement(
                                        'select',
                                        { name: 'sort-dropdown', className: 'sort-dropdown' },
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'newest' },
                                            'Newest'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: 'all-items' },
                                this.loopItems()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
    _inherits(Gallery, _Component);

    function Gallery() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Gallery);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            allImages: '',
            currentImage: '',
            currentIndex: 0

        }, _this.loopCarImages = function () {
            console.log(_this.state.allImages);
            return _this.state.allImages.map(function (item, index) {
                return _react2.default.createElement('div', { key: index, onClick: _this.selectedImage.bind(null, index), className: 'thumbnail-img', style: {
                        "backgroundImage": 'url(\'' + item + '\')'
                    } });
            });
        }, _this.nextArrowBtn = function () {
            if (_this.state.currentIndex !== _this.state.allImages.length - 1) {
                _this.setState({
                    currentIndex: _this.state.currentIndex + 1
                });
            }
        }, _this.previousArrowBtn = function () {
            if (_this.state.currentIndex !== 0) {
                _this.setState({
                    currentIndex: _this.state.currentIndex - 1
                });
            }
        }, _this.selectedImage = function (index) {
            _this.setState({
                currentIndex: index
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Gallery, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var allImages = ['https://images.craigslist.org/00N0N_idugwYz2hRQ_600x450.jpg', 'https://images.craigslist.org/00101_7LFMtwt3nCq_50x50c.jpg', 'https://images.craigslist.org/00t0t_2mNCXwmIxBf_50x50c.jpg', 'https://images.craigslist.org/00Q0Q_bHIBhunOdcn_50x50c.jpg', 'https://images.craigslist.org/00u0u_h1lmzwHLqCO_50x50c.jpg', 'https://images.craigslist.org/00z0z_8M6oeQER2YP_50x50c.jpg'];

            this.setState({
                allImages: allImages,
                currentImage: allImages[this.state.currentIndex]
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // destructuring this.props object by creating individual variables
            var _props = this.props,
                match = _props.match,
                location = _props.location,
                history = _props.history;

            return _react2.default.createElement(
                'div',
                { className: 'display-gallery' },
                _react2.default.createElement(
                    'div',
                    { className: 'image-slider' },
                    _react2.default.createElement(
                        'div',
                        { className: 'main-image' },
                        _react2.default.createElement(
                            'div',
                            { className: 'arrows left-arrow-btn', onClick: this.previousArrowBtn },
                            _react2.default.createElement('i', { className: 'fas fa-chevron-left' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'arrows right-arrow-btn', onClick: this.nextArrowBtn },
                            _react2.default.createElement('i', { className: 'fas fa-chevron-right' })
                        ),
                        _react2.default.createElement('div', { className: 'image-1', style: {
                                "backgroundImage": 'url(\'' + this.state.allImages[this.state.currentIndex] + '\')'
                            } })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'thumbnails' },
                    this.loopCarImages()
                )
            );
        }
    }]);

    return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ })

},[116]);