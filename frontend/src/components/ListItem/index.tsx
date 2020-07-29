import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import AccordionItem from '../AccordionItem';
import  { ApplicationState } from '../../store';
import { loadRequest } from '../../store/ducks/items/actions';

const ListItem: React.FC = () => {
    const dispach = useDispatch();

    useEffect(() => {
        dispach({ type: loadRequest});
    }, [dispach]);

    const items = useSelector((state: ApplicationState) => state.items.data)
    return(
        <Container>
            { items.map(item => <AccordionItem item={ item } />)}
        </Container>
    );
}

export default ListItem;
