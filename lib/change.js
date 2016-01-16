'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Change;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _prismjsPackage = require('prismjs-package');

var _prismjsPackage2 = _interopRequireDefault(_prismjsPackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Change(props) {
	var ln1 = props.normal ? props.ln1 : props.ln;
	var ln2 = props.normal ? props.ln2 : props.ln;

	var html = props.content;

	try {
		html = (0, _prismjsPackage2.default)(props.content, props.lang);
	} catch (e) {
		console.log('highlight error:', e);
	}

	return _react2.default.createElement(
		'tr',
		{ className: props.type },
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
		_react2.default.createElement(
			'td',
			null,
			_react2.default.createElement('pre', { dangerouslySetInnerHTML: { __html: html } })
		)
	);
}