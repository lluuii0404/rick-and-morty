import React from 'react';

import { Characters, Characters2 } from '../../components/Characters';

import styles from './styles.module.scss'

export const CharactersPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Rick and Morty Characters</h1>
      <Characters />
      <Characters2 />
    </div>
  )
};
