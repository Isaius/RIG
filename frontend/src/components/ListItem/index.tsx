import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import AccordionItem from '../AccordionItem';
import  { ApplicationState } from '../../store';
import { loadSuccess, loadFailure } from '../../store/ducks/items/actions';
import { Item } from '../../store/ducks/items/types';
import API from '../../services/api';

const ListItem: React.FC = () => {
    const dispatch = useDispatch();
    const { player_id } = useSelector( (state: ApplicationState) => state.players.data );
    
    useEffect(() => {
        const fetch = async (player_id: number) => {
            try {
                const items = (await API.get<Item[]>(`/items/player/${player_id}`)).data;
                dispatch(loadSuccess(items));
            } catch (error) {
                dispatch(loadFailure);
            }
         };
         fetch(player_id);
    }, [dispatch, player_id]);

    const items = useSelector((state: ApplicationState) => state.items.data)
    return(
        <Container>
            { items.map(item => <AccordionItem key={item.id} item={ item } />)}
        </Container>
    );
}

export default ListItem;
