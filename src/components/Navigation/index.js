import React from 'react';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../utils/routes';

import styles from './styles.module.scss'

export const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        <li className={styles.link}>
          <Link to={ROUTES.CHARACTERS}>Characters</Link>
        </li>
        <li className={styles.link}>
          <Link to={ROUTES.LAYOUT}>Layout</Link>
        </li>
      </ul>
    </div>
  )
};
