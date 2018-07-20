webpackJsonp([0],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(41);

var _Header = __webpack_require__(143);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(146);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(147);

var _Listings2 = _interopRequireDefault(_Listings);

var _Details = __webpack_require__(145);

var _Details2 = _interopRequireDefault(_Details);

var _Category = __webpack_require__(144);

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
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:city', component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:item', component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(123);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(41);

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

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
      cityDropDownMenu: false,
      selectedCity: 'Montreal',
      citiesData: []
    }, _this.CityDropDownBtn = function () {
      var cityDropDownMenu = _this.state.cityDropDownMenu;

      _this.setState({
        cityDropDownMenu: !cityDropDownMenu
      });
    }, _this.selectACity = function (city) {
      _this.setState({
        selectedCity: city
      }, function () {
        var citiesData = _this.state.citiesData;

        var city = citiesData.filter(function (item) {
          return item.title === _this.state.selectedCity;
        });
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push('/' + city[0].slug);
        document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(52,69,247,.8) 0%, \n            rgba(160,39,230,.8) 100%), url(' + city[0].img + ')', 'width: 100%';
      });
    }, _this.citiesLoop = function () {
      var citiesData = _this.state.citiesData;

      return citiesData.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            onClick: _this.selectACity.bind(null, item.title) },
          item.title
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // Make a request for a user with a given ID
      _axios2.default.get('/api/cities').then(function (response) {
        var _props = _this2.props,
            match = _props.match,
            history = _props.history;

        var city = response.data.filter(function (item) {
          return item.slug == match.params.city;
        });
        _this2.setState({
          citiesData: response.data,
          selectedCity: city[0].title
        }, function () {
          document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(52,69,247,.8) 0%, \n                rgba(160,39,230,.8) 100%), url(' + city[0].img + ')', 'width: 100%';
          // console.log(this.state.citiesData)
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          history = _props2.history;
      var _state = this.state,
          cityDropDownMenu = _state.cityDropDownMenu,
          selectedCity = _state.selectedCity;

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
              _reactRouterDom.Link,
              { to: '/' + match.params.city, className: 'logo' },
              'Craigslist'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city-dropdown', onClick: this.CityDropDownBtn },
              selectedCity,
              _react2.default.createElement('i', { className: 'fas fa-chevron-down ' + (cityDropDownMenu ? 'fa-chevron-up' : 'fa-chevron-down') }),
              _react2.default.createElement(
                'div',
                { className: 'scroll-area ' + (cityDropDownMenu ? 'active' : '') },
                _react2.default.createElement(
                  'ul',
                  null,
                  this.citiesLoop()
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-menu' },
            _react2.default.createElement(
              'div',
              { className: 'user-img' },
              _react2.default.createElement('i', { className: 'far fa-user' })
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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(41);

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(180);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            min_price: 0,
            max_price: 100000,
            sort_dropdown: 'newest',
            view_select: 'gallery',
            car_make: 'bmw',
            car_model: 'm6'
        }, _this.loopItems = function () {
            var _this$props = _this.props,
                match = _this$props.match,
                location = _this$props.location,
                history = _this$props.history;

            if (_this.state.itemsData != undefined) {
                return _this.state.itemsData.map(function (item, index) {
                    console.log(_this.state.itemsData);
                    return _react2.default.createElement(
                        'a',
                        { key: index, className: 'item' },
                        _react2.default.createElement(
                            'div',
                            { className: 'image', style: {
                                    backgroundImage: 'url(\'' + item.images[0] + '\')'
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'item-price' },
                                '$',
                                item.price
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
                                item.title
                            ),
                            _react2.default.createElement(
                                'h6',
                                null,
                                item.city
                            )
                        )
                    );
                });
            }
        }, _this.showMakeAndModelDropDown = function () {
            // destructuring this.props object by creating variables
            var _this$props2 = _this.props,
                match = _this$props2.match,
                location = _this$props2.location,
                history = _this$props2.history;

            if (match.params.listings == 'cars-and-trucks') {
                return _react2.default.createElement(
                    'div',
                    { className: 'make-model-component' },
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
                            { name: 'car_make', value: _this.state.car_make, className: 'car-make', onChange: _this.handleChange },
                            _react2.default.createElement(
                                'option',
                                { value: 'bmw' },
                                'bmw'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'mercedes' },
                                'mercedes'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'nissan' },
                                'nissan'
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
                            { name: 'car_model', value: _this.state.car_model, className: 'car-model', onChange: _this.handleChange },
                            _react2.default.createElement(
                                'option',
                                { value: 'm6' },
                                'm6'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'x6' },
                                'x6'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'x3' },
                                'x3'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'amg300' },
                                'amg300'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'altima' },
                                'altima'
                            )
                        )
                    )
                );
            }
        }, _this.handleChange = function (e) {
            var name = e.target.name;
            var value = e.target.type == 'checkbox' ? e.target.checked : e.target.value;

            _this.setState(_defineProperty({}, name, value), function () {
                console.log(_this.state);
            });
        }, _this.submitFilters = function () {
            var _this$props3 = _this.props,
                match = _this$props3.match,
                location = _this$props3.location,
                history = _this$props3.history;
            var _this$state = _this.state,
                min_price = _this$state.min_price,
                max_price = _this$state.max_price,
                sort_dropdown = _this$state.sort_dropdown,
                view_select = _this$state.view_select,
                car_make = _this$state.car_make,
                car_model = _this$state.car_model;
            // history.push(`/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort_dropdown=${sort_dropdown}&view_select=${view_select}`)

            var queryParams = _queryString2.default.parse(_this.props.location.search);
            document.location.href = '/' + match.params.city + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&sort_dropdown=' + sort_dropdown + '&view_select=' + view_select + '&car_make=' + car_make + '&car_model=' + car_model;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Category, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var _props = this.props,
                match = _props.match,
                history = _props.history;

            var queryParams = _queryString2.default.parse(this.props.location.search);
            var min_price = queryParams.min_price,
                max_price = queryParams.max_price,
                sort_dropdown = queryParams.sort_dropdown,
                view_select = queryParams.view_select,
                car_make = queryParams.car_make,
                car_model = queryParams.car_model;


            if (queryParams.min_price != undefined) {
                // Get request comes from URL after destructuring queryParams object above
                _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&sort_dropdown=' + sort_dropdown + '&view_select=' + view_select + '&car_make=' + car_make + '&car_model=' + car_model).then(function (response) {
                    _this2.setState({
                        itemsData: response.data
                    }, function () {
                        console.log(_this2.state);
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                // Make a request for a user with a given ID
                _axios2.default.get('/api/' + match.params.city + '/' + match.params.category).then(function (response) {
                    _this2.setState({
                        itemsData: response.data
                    }, function () {
                        console.log(_this2.state);
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // destructuring this.props object by creating variables
            var _props2 = this.props,
                match = _props2.match,
                location = _props2.location,
                history = _props2.history;

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
                                    { name: 'min_price', value: this.state.min_price, className: 'min-price', onChange: this.handleChange },
                                    _react2.default.createElement(
                                        'option',
                                        { value: '0' },
                                        '0'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '5000' },
                                        '5000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '10000' },
                                        '10000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '20000' },
                                        '20000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '30000' },
                                        '30000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '40000' },
                                        '40000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '50000' },
                                        '50000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '60000' },
                                        '60000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '70000' },
                                        '70000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '80000' },
                                        '80000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '90000' },
                                        '90000'
                                    )
                                ),
                                _react2.default.createElement(
                                    'select',
                                    { name: 'max_price', value: this.state.max_price, className: 'max-price', onChange: this.handleChange },
                                    _react2.default.createElement(
                                        'option',
                                        { value: '5000' },
                                        '5000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '10000' },
                                        '10000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '20000' },
                                        '20000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '30000' },
                                        '30000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '40000' },
                                        '40000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '50000' },
                                        '50000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '60000' },
                                        '60000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '70000' },
                                        '70000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '80000' },
                                        '80000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '90000' },
                                        '90000'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: '100000' },
                                        '100000'
                                    )
                                )
                            )
                        ),
                        this.showMakeAndModelDropDown(),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group button' },
                            _react2.default.createElement(
                                'div',
                                { className: 'update-btn', onClick: this.submitFilters },
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
                                        { name: 'view_select', value: this.state.view_select, className: 'view-select', onChange: this.handleChange },
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
                                        { name: 'sort_dropdown', value: this.state.sort_dropdown, className: 'sort-dropdown', onChange: this.handleChange },
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'newest' },
                                            'Newest'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'oldest' },
                                            'Oldest'
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

    return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Gallery = __webpack_require__(148);

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
            name: 'jean'
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
                            _react2.default.createElement('div', { className: 'direction' }),
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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(41);

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

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
            categoriesData: ''

            // setting up initial setting on pageload/by default using API from react-router.
        }, _this.loopCategories = function () {
            var _this$props = _this.props,
                match = _this$props.match,
                history = _this$props.history;

            if (_this.state.categoriesData != '') {
                return _this.state.categoriesData.map(function (category, index) {

                    var loopListings = function loopListings() {
                        return category.listings.map(function (listing, index) {
                            return _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/' + match.params.city + '/' + category.title + '/' + listing.slug, key: index },
                                listing.name
                            );
                        });
                    };

                    return _react2.default.createElement(
                        'div',
                        { key: index, className: 'categories' },
                        _react2.default.createElement(
                            'a',
                            { href: '/' + match.params.city + '/' + category.title, className: 'title' },
                            category.title
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'links-group ' + (category.title == 'jobs' || category.title == 'personals' || category.title == 'housing' ? 'single-col' : '') },
                            loopListings()
                        )
                    );
                });
            } else {
                return 'Page loading...';
            }
        }, _this.loopTags = function () {
            var testTags = ['Apple Macbook', 'Playstation 4', 'SONY 4k HD TV', 'CryptoCurrency', 'Personal Trainer', 'Security Services', 'Escort Services'];
            return testTags.map(function (tag, i) {
                return _react2.default.createElement(
                    'div',
                    {
                        key: i,
                        className: 'tag' },
                    tag
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                match = _props.match,
                history = _props.history;

            if (match.params.city == undefined) {
                history.push('/mtl');
            }

            // Make a request for a user with a given ID
            _axios2.default.get('/api/' + match.params.city).then(function (response) {
                _this2.setState({
                    categoriesData: response.data
                }, function () {
                    console.log(_this2.state);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
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

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

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
            name: 'Jean'
        }, _this.loopItems = function () {
            var testArray = [1, 2, 3, 4, 5, 6, 7, 8];
            return testArray.map(function (category, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, className: 'item' },
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

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

            var allImages = ["https://i.pinimg.com/originals/4b/6f/a6/4b6fa697f3d68574dd17ff392c12824a.jpg", "https://i.pinimg.com/736x/e9/e0/76/e9e076a23415c42802c6b17201a7edfa--electric-motor-bmw-x.jpg", "https://cdn.bmwblog.com/wp-content/uploads/test-drive-2014-bmw-x3-facelift-22-750x500.jpg", "https://cdn.bmwblog.com/wp-content/uploads/BMW-X3-xDrive20d-2014-F25-LCI-B47-Diesel-Motor-022-750x500.jpg", "https://cdn.autoportal.com/img/feature/84/main/main.orig.jpg", "https://cdn.bmwblog.com/wp-content/uploads/2015/06/2016-bmw-7-series-key-fob-images-1900x1200-02-750x500.jpg"];

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

},[142]);