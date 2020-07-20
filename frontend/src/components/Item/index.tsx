import React, { useState, useEffect } from 'react';

import { Container, Name, Info, InfoBox } from './styles';
import IItem from '../../interfaces/IItem';

interface PropsToShow {
  name?: boolean,
  type?: boolean,
  subtype?: boolean,
  quality?: boolean,
  level?: boolean,
  atk?: boolean,
  def?: boolean
}
interface Props {
  item: IItem,  
  show: PropsToShow
}

const rarity = [
  'Common', 
  'Uncommon', 
  'Rare', 
  'Unique', 
  'Legendary', 
  'Divine'
];

const rarityColor = [
  '#000',
  '#3282bf',
  '#5721eb',
  '#c9c418',
  '#e09626',
  '#c42c02'
]

const Item: React.FC<Props> = ({ item, show } ) => {
    const [state, setState] = useState<IItem>(item);
    useEffect(() => {
        setState(item);
    }, []);
    
    const color = rarityColor[item.quality];
    
  return(
    <Container>
        <strong>
          { show.name && <Name style={{ color: color}}> {item.name} </Name> }
        </strong>
        <InfoBox>
          <Info>
            { show.type && <p> { item.type } </p>}
            { show.subtype && <p> { item.subtype }</p>}
            { show.quality && <p style={{ color: color}}> { rarity[item.quality] } </p>}
          </Info>
          <Info>
            { show.level && <p> Level: { item.level } </p>}
            { show.atk && <p> Atk: { item.atk } </p>}
            { show.def && <p> Def: { item.def } </p>}
          </Info>
        </InfoBox>
    </Container>
  );
}

Item.defaultProps = {
  show: {
    name: false,
    type: false,
    subtype: false,
    quality: false,
    level: false,
    atk: false,
    def: false
  }
} as Partial<Props>;

export default Item;