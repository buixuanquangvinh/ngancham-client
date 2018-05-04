import { MODULE_NAME } from './const'

export const getLoading = (state) => state[MODULE_NAME].loading;

export const getFilter = (state) => state[MODULE_NAME].filter;

export const getArchivedOrderList = (state) => state[MODULE_NAME].archived_orders;
