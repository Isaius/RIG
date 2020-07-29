import axios from 'axios';

import { Player } from '../store/ducks/players/types'

const apiInstance = axios.create({
    baseURL: 'http://localhost:3333',
});

const getPlayer = async (player_id: number) =>{
    const response = await apiInstance.get<Player>(`/player/${player_id}`);

    return response.data;
}
const API = {
    apiInstance,
    getPlayer
}

export default apiInstance;

// export default API;