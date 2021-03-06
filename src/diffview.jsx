import { map } from 'lodash';
import React from 'react';
import parse from 'parse-diff';
import { extname } from 'path';
import { languages } from 'lang-map';
import Chunk from './chunk';
import style from './style.scss';

function Part(props) {
  const { from, to, additions, deletions, chunks } = props;
  const fileName = to === '/dev/null' ? from : to;

  const ext = extname(fileName);
  const langs = languages(ext);

  const items = map(chunks, (chunk, i) => <Chunk key={i} {...chunk} lang={langs[0]} />);

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
    return <div />;
  }
  const diff = props.diff || parse(props.source);
  const content = map(diff, (p, i) => <Part key={i} {...p} />);
  return (
    <div>
      {content}
    </div>
  );
}

export default DiffView;
