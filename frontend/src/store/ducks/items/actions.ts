import { action } from 'typesafe-actions';
import { ItemsTypes, Item } from './types';

export const loadRequest = () => action(ItemsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Item[]) => action(ItemsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(ItemsTypes.LOAD_FAILURE);

export const addItem = (data:Item) => action(ItemsTypes.ADDD_ITEM, data);

export const removeItem = (data:Item) => action(ItemsTypes.REMOVE_ITEM, data);