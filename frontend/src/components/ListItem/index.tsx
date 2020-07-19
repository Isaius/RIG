import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import api from '../../services/api';
import IItem from '../../interfaces/IItem';
import IPlayer from '../../interfaces/IPlayer';

import AccordionItem from '../AccordionItem';

interface Props {
    player: IPlayer;
}

const ListItem: React.FC<Props> = ({ player }) => {
    const [items, setItems] = useState<IItem[]>([]);
    const [player_state, setPlayer] = useState<IPlayer>(player);

    

    useEffect(() => {
        api.get<IItem[]>(`player/${player.player_id}/item`).then(response => {
            setItems(response.data);
            console.log(player.player_id);
        });
        setPlayer(player);
    }, []);
  return(
        <Container>
            { items.map(item => <AccordionItem item={ item } />)}
        </Container>
  );
}

export default ListItem;
