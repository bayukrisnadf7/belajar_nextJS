import app from "./firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app)

export async function retriveData (CollectionName: string) {
    const snapshot = await getDocs(collection(firestore, CollectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return data
}