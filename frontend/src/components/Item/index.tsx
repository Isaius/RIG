import React, { useState, useEffect } from 'react';

import { Container, Name, Info } from './styles';
import IItem from '../../interfaces/IItem';

interface Props {
    item: IItem;
}

const Item: React.FC<Props> = ({ item }) => {
    const [state, setState] = useState<IItem>(item);
    useEffect(() => {
        setState(item);
    }, []);

  return(
    <Container>
        <Name> {item.name} </Name>
        <Info>
          <p> {item.type} </p>
          <p>{item.subtype}</p>
        </Info>
    </Container>
  );
}

export default Item;