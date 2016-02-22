'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Chunk;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _change = require('./change');

var _change2 = _interopRequireDefault(_change);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Chunk(props) {
	var changes = props.changes.map(function (change, i) {
		return _react2.default.createElement(_change2.default, _extends({ key: i }, change, { lang: props.lang }));
	});
	return _react2.default.createElement(
		'tbody',
		null,
		_react2.default.createElement(
			'tr',
			{ className: _style2.default.chunk },
			_react2.default.createElement(
				'td',
				{ className: _style2.default.nostretch },
				'---'
			),
			_react2.default.createElement(
				'td',
				{ className: _style2.default.nostretch },
				'+++'
			),
			_react2.default.createElement(
				'td',
				null,
				props.content
			)
		),
		changes
	);
}