'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Change;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _prismjsPackage = require('prismjs-package');

var _prismjsPackage2 = _interopRequireDefault(_prismjsPackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Change(props) {
	var ln1 = props.normal ? props.ln1 : props.ln;
	var ln2 = props.normal ? props.ln2 : props.ln;

	var html = props.content;
	var contentCell = null;

	try {
		html = (0, _prismjsPackage2.default)(props.content, props.lang);
		contentCell = _react2.default.createElement('td', { dangerouslySetInnerHTML: { __html: html } });
	} catch (e) {
		console.log('highlight error:', e);
		contentCell = _react2.default.createElement(
			'td',
			null,
			_react2.default.createElement('pre', { dangerouslySetInnerHTML: { __html: html } })
		);
	}

	var className = (0, _classnames2.default)(_style2.default[props.type], _style2.default.change);
	return _react2.default.createElement(
		'tr',
		{ className: className },
		_react2.default.createElement(
			'td',
			{ className: _style2.default.nostretch },
			!props.add && ln1
		),
		_react2.default.createElement(
			'td',
			{ className: _style2.default.nostretch },
			!props.del && ln2
		),
		contentCell
	);
}