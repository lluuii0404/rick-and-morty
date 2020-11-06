import React from 'react';

import { DetailsCharacter } from "../../components/DetailsCharacter";

import styles from "./styles.module.scss";

export const DetailsCharacterPage = () => {
  return (
    <div className={styles.container}>
      <DetailsCharacter />
    </div>
  )
};
