"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.SelectedItem = exports.Item = exports.Input = exports.Icon = exports.Content = void 0;
var _macro = _interopRequireWildcard(require("styled-components/macro"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var zIndex1 = (0, _macro.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from { z-index: 1; }\n  to { z-index: 1; }\n"])));
var Content = _macro.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  border-radius: 4px;\n  transition: bottom 0.3s;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n"])));
exports.Content = Content;
var Item = _macro.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #8080802b;\n\n  &-selected {\n    background: rgba(255, 255, 255, 0.1);\n  }\n  &-disabled {\n    opacity: 0.5;\n  }\n\n  > span {\n    flex: 1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"])));
exports.Item = Item;
var SelectedItem = (0, _macro.default)(Item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  border: 2px solid var(--lightgrey);\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  ", "\n"])), function (_ref) {
  var isOpened = _ref.isOpened;
  return isOpened && (0, _macro.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    "])));
});
exports.SelectedItem = SelectedItem;
var Icon = _macro.default.img(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  margin-right: 8px;\n  object-fit: contain;\n"])));
exports.Icon = Icon;
var Input = _macro.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  border: none;\n  background: transparent;\n  left: 0;\n  width: 100%;\n  color: inherit;\n"])));
exports.Input = Input;
var Wrapper = _macro.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  color: #000;\n  font-size: 12px;\n  height: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ",\n  ", " {\n    height: ", "px;\n  }\n\n  .select-arrow-icon {\n    width: 15px;\n    margin-right: 5px;\n    transform: rotate(", "deg);\n    opacity: 0.5;\n  }\n\n  .select-placeholder {\n    opacity: 0.5;\n  }\n"])), function (props) {
  return props.itemHeight;
}, function (props) {
  return props.disabled && (0, _macro.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      opacity: 0.5;\n      pointer-events: none;\n    "])));
}, function (props) {
  return props.isOpened ? (0, _macro.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          z-index: 1;\n        "]))) : (0, _macro.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          animation: ", " 0.2s;\n        "])), zIndex1);
}, function (props) {
  return props.alignTop ? (0, _macro.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          ", " {\n            padding-bottom: ", "px;\n            top: ", "px;\n            bottom: 0;\n          }\n\n          ", ",\n          ", " {\n            bottom: 0;\n          }\n        "])), Content, props.itemHeight, props.isOpened ? -props.height : 0, SelectedItem, Input) : (0, _macro.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n          ", " {\n            padding-top: ", "px;\n            top: 0;\n            bottom: ", "px;\n          }\n\n          ", ",\n          ", " {\n            top: 0;\n          }\n        "])), Content, props.itemHeight, props.isOpened ? -props.height : 0, SelectedItem, Input);
}, SelectedItem, Input, function (props) {
  return props.itemHeight;
}, function (props) {
  return props.isOpened ? 180 : 0;
});
exports.Wrapper = Wrapper;