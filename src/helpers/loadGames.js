import { collection, getDocs } from "firebase/firestore"
import { FirebaseDb } from "../firebase/config"

export const loadGames = async() => {
    const collectionRef = collection(FirebaseDb,`juegos/juegos/juego`);
    const docs = await getDocs(collectionRef);
    
    const juegos=[]
    docs.forEach(doc => {
        juegos.push({id:doc.id, ...doc.data()});

    });
    console.log(juegos);
    return juegos;

}