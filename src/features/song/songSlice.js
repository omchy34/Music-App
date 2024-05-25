import { createSlice } from '@reduxjs/toolkit';
import BaaghiSabTera from '../../componets/Music/Baaghi-Sab-Tera.mp3';
import HeropantiRabba from '../../componets/Music/Heropanti-Rabba.mp3';
import KajrareKajrare from '../../componets/Music/Kajrare-Kajrare.mp3';
import RaanjhanaaRaanjhanaa from '../../componets/Music/Raanjhanaa.mp3';
import Shaayraana from '../../componets/Music/Shaayraana.mp3';
import Titli from '../../componets/Music/Titli.mp3';
import TumSeHi from '../../componets/Music/Tum-Se-Hi.mp3';

const initialState = {
  songs: [
    BaaghiSabTera,
    HeropantiRabba,
    KajrareKajrare,
    RaanjhanaaRaanjhanaa,
    Shaayraana,
    Titli,
    TumSeHi,
  ],
};

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.songs.push(action.payload);
    },
  },
});

export const { increment } = songSlice.actions;

export default songSlice.reducer;
