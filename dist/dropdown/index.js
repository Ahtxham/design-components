"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactTransitionGroup = require("react-transition-group");
var _reactVirtualized = require("react-virtualized");
var _svgs = require("@svgs");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _getLabel = function _getLabel(o) {
  return o;
};
var defaultOptionsStyle = {
  border: "2px solid var(--lightgray)",
  background: "var(--bg-pink)",
  "box-shadow": "rgb(0 0 0 / 6%) 0px 0px 5px 0px"
};
var Select = function Select(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    valueKey = _ref.valueKey,
    iconKey = _ref.iconKey,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? "auto" : _ref$width,
    _ref$itemHeight = _ref.itemHeight,
    itemHeight = _ref$itemHeight === void 0 ? 30 : _ref$itemHeight,
    _ref$openCount = _ref.openCount,
    openCount = _ref$openCount === void 0 ? 5 : _ref$openCount,
    disabled = _ref.disabled,
    placeholder = _ref.placeholder,
    searchable = _ref.searchable,
    alignTop = _ref.alignTop,
    filter = _ref.filter,
    _ref$arrow = _ref.arrow,
    Arrow = _ref$arrow === void 0 ? _svgs.ArrowDownSvg : _ref$arrow,
    _ref$getLabel = _ref.getLabel,
    getLabel = _ref$getLabel === void 0 ? _getLabel : _ref$getLabel,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    style = _ref.style,
    className = _ref.className,
    _ref$optionContainerS = _ref.optionContainerStyle,
    optionContainerStyle = _ref$optionContainerS === void 0 ? defaultOptionsStyle : _ref$optionContainerS;
  var wrapperRef = (0, _react.useRef)();
  var listRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpened = _useState2[0],
    setIsOpened = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    filterStr = _useState4[0],
    setFilterStr = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var getValue = (0, _react.useCallback)(function (item) {
    return valueKey ? item[valueKey] : item;
  }, [valueKey]);
  (0, _react.useEffect)(function () {
    if (isOpened) {
      var index = options.findIndex(function (item) {
        return getValue(item) === value;
      });
      if (index > 0) {
        listRef === null || listRef === void 0 || listRef.current.scrollToRow(index);
      }
      var handleClickOutside = function handleClickOutside(event) {
        if (!wrapperRef.current.contains(event.target)) {
          setIsOpened(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return function () {
        document.removeEventListener("click", handleClickOutside);
      };
    } else {
      setFilterStr("");
    }
  }, [getValue, isOpened, options, value]);
  (0, _react.useEffect)(function () {
    var arr = options;
    if (filterStr) {
      var str = filterStr.toLowerCase();
      arr = options.filter(function (item) {
        return filter ? filter(item, str) : getLabel(item).toLowerCase().includes(str);
      });
    }
    setData(arr);
    if (listRef.current) {
      listRef.current.scrollToRow(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStr, filter, getLabel]);
  var rowRenderer = function rowRenderer(_ref2) {
    var key = _ref2.key,
      index = _ref2.index,
      style = _ref2.style;
    var item = data[index];
    var optionValue = getValue(item);
    var isSelected = optionValue === value;
    var handleSelectItem = function handleSelectItem(e) {
      setIsOpened(false);
      onChange(item);
    };
    var classes = ["select-option"];
    if (isSelected) {
      classes.push("select-option-selected");
    }
    if (item.disabled) {
      classes.push("select-option-disabled");
    }
    return /*#__PURE__*/_react.default.createElement(_styles.Item, {
      className: classes,
      key: key,
      style: style,
      onClick: handleSelectItem
    }, item[iconKey] && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
      className: "select-icon",
      src: item[iconKey]
    }), /*#__PURE__*/_react.default.createElement("span", null, getLabel(item)));
  };
  var currentItem = data.find(function (item) {
    return getValue(item) === value;
  });
  var height = itemHeight * Math.min(openCount, data.length);
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    ref: wrapperRef,
    disabled: disabled,
    style: _objectSpread({
      width: width
    }, style),
    className: className,
    height: height,
    itemHeight: itemHeight,
    alignTop: alignTop,
    isOpened: isOpened
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "select-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.SelectedItem, {
    className: "select-selected-item",
    onClick: function onClick() {
      return setIsOpened(!isOpened);
    },
    isOpened: isOpened
  }, !filterStr ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (currentItem || {})[iconKey] && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    className: "select-icon",
    src: currentItem[iconKey]
  }), currentItem ? /*#__PURE__*/_react.default.createElement("span", null, getLabel(currentItem)) : /*#__PURE__*/_react.default.createElement("span", {
    className: "select-placeholder"
  }, placeholder)) : /*#__PURE__*/_react.default.createElement("span", null), Arrow && /*#__PURE__*/_react.default.createElement(Arrow, {
    className: "select-arrow-icon"
  })), isOpened && searchable && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    className: "select-input",
    autoFocus: true,
    value: filterStr,
    onChange: function onChange(e) {
      return setFilterStr(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: isOpened,
    unmountOnExit: true,
    timeout: 300
  }, /*#__PURE__*/_react.default.createElement(_reactVirtualized.AutoSizer, null, function (_ref3) {
    var width = _ref3.width;
    return /*#__PURE__*/_react.default.createElement(_reactVirtualized.List, {
      style: optionContainerStyle,
      ref: listRef,
      width: width,
      height: height,
      rowHeight: itemHeight,
      rowCount: data.length,
      rowRenderer: rowRenderer
    });
  }))));
};
var _default = Select;
exports.default = _default;