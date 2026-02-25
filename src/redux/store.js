import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { audiusApi } from './services/audiusApi';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [audiusApi.reducerPath]: audiusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(audiusApi.middleware),
});
