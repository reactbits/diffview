import React from 'react';
import style from './style';

export default function Change(props) {
	const ln1 = props.normal ? props.ln1 : props.ln;
	const ln2 = props.normal ? props.ln2 : props.ln;

	// TODO highlight with prism.js
	const html = props.content;

  // try {
  //   html = highlight(props.lang, props.content).value;
  // } catch (e) {}

	return (
		<tr className={props.type}>
			<td className={style.nostretch}>{!props.add && ln1}</td>
			<td className={style.nostretch}>{!props.del && ln2}</td>
			<td>
				<pre dangerouslySetInnerHTML={{ __html: html }} />
			</td>
		</tr>
	);
}
