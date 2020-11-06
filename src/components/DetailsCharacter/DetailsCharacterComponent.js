import React, {useEffect} from 'react';
import {useParams} from "react-router";

import { Spinner } from "../Spinner";
import {LayoutDetailsCharacter} from "./LayoutDetailsCharacter";

export const DetailsCharacterComponent = ({loading, character, getDetailsCharacter}) => {
  const {id} = useParams();

  useEffect(() => {
    getDetailsCharacter(id)
  }, [])

  const loadingJSX = loading && <Spinner />;
  const componentJSX = !loading && character && <LayoutDetailsCharacter character={character} />
  return (
    <>
      {loadingJSX}
      {componentJSX}
    </>
  )
};
