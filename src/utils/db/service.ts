import app from "./firebase";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

import bcrypt from 'bcrypt';

const firestore = getFirestore(app);

export async function retriveData(CollectionName: string) {
  const snapshot = await getDocs(collection(firestore, CollectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retriveDataById(CollectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, CollectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(
  userData: {
    email: string;
    username: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if(data.length > 0){
    callback ({
      status: false, message: "Email sudah terdaftar"})
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData).then(() =>{
        callback ({
          status: true, message: "Register berhasil"})
    }).catch((error) =>{
        callback ({
          status: false, message: error})
    })
  }
}
