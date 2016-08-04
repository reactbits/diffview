import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DiffView from '../src';

const contentLinks = [
	{
		url: 'https://api.github.com/repos/reactbits/diffview/commits/0f73f850f7bebfc90ee641501eed7889d6f11b45',
		headers: {
			Accept: 'application/vnd.github.diff',
		},
		label: 'github',
	},
	{
		url: '/content/simple.diff',
		label: 'simple',
	},
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { content: '' };
		this.load(contentLinks[0]);
	}

	load(data) {
		const options = { headers: data.headers };
		fetch(data.url, options).then((xhr, content) => {
			if (_.isObject(content) && _.isArray(content.files)) {
				this.setState({ content: content.files });
			} else {
				this.setState({ content });
			}
		});
	}

	render() {
		const items = contentLinks.map(t => {
			const linkProps = {
				key: t.url,
				href: t.url,
				onClick: (e) => {
					e.preventDefault();
					this.load(t);
					return false;
				},
				style: {
					margin: '4px',
				},
			};
			return <a {...linkProps}>{t.label}</a>;
		});
		let content = null;
		if (_.isArray(this.state.content)) {
			content = this.state.content.map(file =>
				<DiffView key={file.filename} source={file.patch} />
			);
		} else {
			content = <DiffView source={this.state.content} />;
		}
		return (
			<Grid className="app">
				<Row>
					<Col md={8}>
						<div>{items}</div>
						{content}
					</Col>
				</Row>
			</Grid>
		);
	}
}
