import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote } from '..';
import { deleteNoteById, savingNewNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';
import { loadGames } from '../../helpers/loadGames';


export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        

        await loadGames();
        dispatch( setNotes( notes ) );
    }
}