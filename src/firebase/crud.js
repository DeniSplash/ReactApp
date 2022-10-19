import { collection, getDocs, addDoc, doc } from "firebase/firestore"
import { firestore } from "./firebase"

export const addPost = async (data) => {
    const results = addDoc(collection(firestore, 'posts'), data);
}

export const getAllPosts = async () => {
    console.log('response');
    const response = await getDocs(collection(firestore, 'posts'))
    console.log(response);
    const arr = response.docs.map(doc => doc.data());
    return arr;
}