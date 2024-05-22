import { collection, getDocs } from "firebase/firestore"
import { FirebaseDb } from "../firebase/config"

export const loadGames = async() => {
    const collectionRef = collection(FirebaseDb,`juegos`);
    const docs = await getDocs(collectionRef);
    console.log(docs);
    
}