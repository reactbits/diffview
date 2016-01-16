import React from 'react';
import Chunk from './chunk';
import parse from 'parse-diff';
import { extname } from 'path';
import { languages } from 'lang-map';
import style from './style';

function Part(props) {
	const { from, to, additions, deletions, chunks } = props;
	const fileName = to === '/dev/null' ? from : to;

	const ext = extname(fileName);
	const langs = languages(ext);

	const items = chunks.map((chunk, i) => {
		return <Chunk key={i} {...chunk} lang={langs[0]}/>;
	});

	return (
		<article className={style.diff}>
			<header>
				<span className={style.adds}>+++ {additions}</span>
				<span className={style.dels}>--- {deletions}</span>
				<strong className={style.filename}>{fileName}</strong>
			</header>
			<main>
				<table>{items}</table>
			</main>
		</article>
	);
}

export function DiffView(props) {
	if (!(props.diff || props.source)) {
		return <div/>;
	}
	const diff = props.diff || parse(props.source);
	const content = diff.map((p, i) => <Part key={i} {...p}/>);
	return (
		<div>
			{content}
		</div>
	);
}

export default DiffView;
