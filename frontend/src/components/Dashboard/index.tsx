import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRequest } from '../../store/ducks/players/actions';
import ListItem from '../ListItem';
import { PlayersTypes } from '../../store/ducks/players/types';


const Dashboard: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log(`Dispatching for API`)
        dispatch(loadRequest(1));
        console.log(`Dispatched for API`)
        
    }, [dispatch]);

  return(
      <ListItem />
  );
}

export default Dashboard;