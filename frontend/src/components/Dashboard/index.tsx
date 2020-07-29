import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadSuccess, loadFailure } from '../../store/ducks/players/actions';
import ListItem from '../ListItem';
import { Player } from '../../store/ducks/players/types';
import API from '../../services/api';


const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetch = async (player_id: number) => {
            try {
                const player = (await API.get<Player>(`/player/${player_id}`)).data;
   
                dispatch(loadSuccess(player));
            } catch (error) {
                dispatch(loadFailure);
            }
         };
         fetch(1);
    }, [dispatch]);

  return(
      <ListItem />
  );
}

export default Dashboard;