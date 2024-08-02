import app from "./firebase";
import { collection, doc, getDocs, getFirestore, getDoc } from "firebase/firestore";

const firestore = getFirestore(app)

export async function retriveData (CollectionName: string) {
    const snapshot = await getDocs(collection(firestore, CollectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return data
}

export async function retriveDataById (CollectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, CollectionName, id));
    const data = snapshot.data();
    return data
}