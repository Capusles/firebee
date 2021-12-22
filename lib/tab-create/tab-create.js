"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _envPuzzle = require("@vortex-ui/env-puzzle");

var _antd = require("antd");

require("./styles/index");

var _excluded = ["children", "tabProps"];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var TabPane = _antd.Tabs.TabPane;

var TabCreate = function TabCreate(props) {
  var _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      arg = _objectWithoutProperties(props, _excluded); // 将tabPane name作为Key值, 从这个元素到下个name替换间的所有元素作为Value


  var childrenObj = {}; // 存储 - 当前正在渲染的tabPane name值 -> 方便向childrenObj 里 push元素 -

  var tabPaneName = ''; // 存储tabPane的名字作为Key值, 对应的key值作为value

  var allTabPaneObj = {}; // TODO 什么原因导致key前面多了.$

  if (tabProps === null || tabProps === void 0 ? void 0 : tabProps.activeKey) {
    tabProps.activeKey = '.$' + (tabProps === null || tabProps === void 0 ? void 0 : tabProps.activeKey);
  }

  if (tabProps === null || tabProps === void 0 ? void 0 : tabProps.defaultActiveKey) {
    tabProps.defaultActiveKey = '.$' + (tabProps === null || tabProps === void 0 ? void 0 : tabProps.defaultActiveKey);
  }

  var renderChildren = function renderChildren() {
    Array.isArray(children) && children.forEach(function (val) {
      // tabPane name
      var tabName = Array.isArray(val) ? undefined : val.props['data-tabname']; // tabPane Key

      var tabKey = Array.isArray(val) ? undefined : val.props['data-tabkey'];

      if (tabName && tabKey) {
        tabPaneName = tabName;
        childrenObj[tabName] = []; // TODO 待改进
        // 将name和key进行结合，方便下面渲染的时候取值

        allTabPaneObj[tabName] = tabKey;
      } else {
        // 把之前存储的name和元素进行组合渲染
        childrenObj[tabPaneName].push(val);
      }
    });
    return Object.keys(childrenObj).map(function (val) {
      return /*#__PURE__*/_react.default.createElement(TabPane, {
        tab: val,
        key: allTabPaneObj[val],
        forceRender: true
      }, childrenObj[val]);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_envPuzzle.CreateModal, _objectSpread({}, arg), /*#__PURE__*/_react.default.createElement(_antd.Tabs, _objectSpread(_objectSpread({
    size: 'middle',
    type: "card"
  }, tabProps), {}, {
    onChange: function onChange(activeKey) {
      var key = activeKey.slice(2);
      (tabProps === null || tabProps === void 0 ? void 0 : tabProps.onChange) && (tabProps === null || tabProps === void 0 ? void 0 : tabProps.onChange(key));
    },
    style: {
      width: '100%'
    },
    className: 'ljfl-tabs-wrap'
  }), renderChildren()));
};

var _default = TabCreate;
exports.default = _default;