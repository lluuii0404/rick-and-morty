import React from 'react';

import styles from './styles.module.scss';

export const LayoutDetailsCharacter = ({
  character
}) => {
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  )
};
