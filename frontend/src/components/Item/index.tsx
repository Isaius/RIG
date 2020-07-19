import React, { useState, useEffect } from 'react';

import { Container, Name, Info, InfoBox } from './styles';
import IItem from '../../interfaces/IItem';

interface Props {
    item: IItem,  
    showName: boolean
}

const rarity = [
  'Common', 
  'Uncommon', 
  'Rare', 
  'Unique', 
  'Legendary', 
  'Divine'
];

const Item: React.FC<Props> = ({ item, showName } ) => {
    const [state, setState] = useState<IItem>(item);
    useEffect(() => {
        setState(item);
    }, []);

  return(
    <Container>
        { showName && <Name> {item.name} </Name> }
        <InfoBox>
          <Info>
            <p> { item.type } </p>
            <p> { item.subtype }</p>
            <p> { rarity[item.quality] } </p>
          </Info>
          <Info>
            <p> Level: { item.level } </p>
            <p> Atk: { item.atk } </p>
            <p> Def: { item.def } </p>
          </Info>
        </InfoBox>
    </Container>
  );
}

export default Item;