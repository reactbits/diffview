import React from 'react';
import classNames from 'classnames';
import style from './style';
import highlight from 'prismjs-package';

export default function Change(props) {
	const ln1 = props.normal ? props.ln1 : props.ln;
	const ln2 = props.normal ? props.ln2 : props.ln;

	let html = props.content;
	let contentCell = null;

	try {
		html = highlight(props.content, props.lang);
		contentCell = <td dangerouslySetInnerHTML={{ __html: html }} />;
	} catch (e) {
		console.log('highlight error:', e);
		contentCell = (
			<td>
				<pre dangerouslySetInnerHTML={{ __html: html }} />
			</td>
		);
	}

	const className = classNames(style[props.type], style.change);
	return (
		<tr className={className}>
			<td className={style.nostretch}>{!props.add && ln1}</td>
			<td className={style.nostretch}>{!props.del && ln2}</td>
			{contentCell}
		</tr>
	);
}
