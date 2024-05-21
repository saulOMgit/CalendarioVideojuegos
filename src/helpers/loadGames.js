import { collection } from "firebase/firestore"
import { FirebaseDb } from "../firebase/config"
import { getDocs } from "firebase/firestore/lite";

export const loadGames = async() => {
    const collectionRef = collection(FirebaseDb,`juegos/juego`);
    const docs = await getDocs(collectionRef);

    console.log(docs);
}