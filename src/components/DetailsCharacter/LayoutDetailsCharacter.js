import React from 'react';
import { withRouter } from "react-router-dom";

import styles from './styles.module.scss';

export const LayoutDetailsCharacter = withRouter(({
  character,
  history
}) => {
  const handleGoBack = () =>  history.goBack();
  const countEpisodes = character.episode && character.episode.length
  return character && (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{character.name}</h1>
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.image} style={{backgroundImage: `url(${character.image})`}} />
        <div className={styles.information}>
          <div className={styles.row}>
            <span className={styles.rowTitle}>Gender:</span> {' '}
            <span  className={styles.rowText}>{character.gender}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>Location:</span>{' '}
            <span className={styles.rowText}>{character.location.name}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>Origin:</span>{' '}
            <span className={styles.rowText}>{character.origin.name}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>Count episodes:</span>{' '}
            <span className={styles.rowText}>{countEpisodes}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>Species:</span>{' '}
            <span className={styles.rowText}>{character.species}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>Status:</span>{' '}
            <span className={styles.rowText}>{character.status}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>Type:</span>{' '}
            <span className={styles.rowText}>{character.type === '' ?  '-' : character.type }</span>
          </div>
        </div>
      </div>
      <div className={styles.button} onClick={handleGoBack}>
        Go to Characters
      </div>
    </div>
  )
});
