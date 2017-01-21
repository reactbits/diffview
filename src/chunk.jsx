import { map } from 'lodash';
import React from 'react';
import Change from './change';
import style from './style.scss';

export default function Chunk(props) {
  const renderChange = (change, i) => <Change key={i} {...change} lang={props.lang} />;
  const changes = map(props.changes, renderChange);
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
