'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.DiffView = DiffView;

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _parseDiff = require('parse-diff');

var _parseDiff2 = _interopRequireDefault(_parseDiff);

var _path = require('path');

var _langMap = require('lang-map');

var _chunk = require('./chunk');

var _chunk2 = _interopRequireDefault(_chunk);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Part(props) {
  var from = props.from,
      to = props.to,
      additions = props.additions,
      deletions = props.deletions,
      chunks = props.chunks;

  var fileName = to === '/dev/null' ? from : to;

  var ext = (0, _path.extname)(fileName);
  var langs = (0, _langMap.languages)(ext);

  var items = (0, _lodash.map)(chunks, function (chunk, i) {
    return _react2.default.createElement(_chunk2.default, _extends({ key: i }, chunk, { lang: langs[0] }));
  });

  return _react2.default.createElement(
    'article',
    { className: _style2.default.diff },
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'span',
        { className: _style2.default.adds },
        '+++ ',
        additions
      ),
      _react2.default.createElement(
        'span',
        { className: _style2.default.dels },
        '--- ',
        deletions
      ),
      _react2.default.createElement(
        'strong',
        { className: _style2.default.filename },
        fileName
      )
    ),
    _react2.default.createElement(
      'main',
      null,
      _react2.default.createElement(
        'table',
        null,
        items
      )
    )
  );
}

function DiffView(props) {
  if (!(props.diff || props.source)) {
    return _react2.default.createElement('div', null);
  }
  var diff = props.diff || (0, _parseDiff2.default)(props.source);
  var content = (0, _lodash.map)(diff, function (p, i) {
    return _react2.default.createElement(Part, _extends({ key: i }, p));
  });
  return _react2.default.createElement(
    'div',
    null,
    content
  );
}

exports.default = DiffView;