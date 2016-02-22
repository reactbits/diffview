import React from 'react';
import Change from './change';
import style from './style';

export default function Chunk(props) {
	const changes = props.changes.map((change, i) =>
		<Change key={i} {...change} lang={props.lang} />
	);
	return (
		<tbody>
			<tr className={style.chunk}>
				<td className={style.nostretch}>---</td>
				<td className={style.nostretch}>+++</td>
				<td>{props.content}</td>
			</tr>
			{changes}
		</tbody>
	);
}
