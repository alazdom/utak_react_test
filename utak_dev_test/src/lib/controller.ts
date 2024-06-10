import { addDoc, collection, deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { app } from './firebase'
import { AddItemType } from '../types/items';
import { NavigateFunction } from 'react-router-dom';

export const firestore = getFirestore(app);

//Item collection
export const itemsCollection = collection(firestore, "items")


//Add new item to firestore
export const addItem = async (itemData: AddItemType) => {
const newItem = await addDoc(itemsCollection, {...itemData})
console.log(`The new item was created at ${newItem.path}`)
}

//Delete item
export const deleteItem = async (id: string | undefined, navigate: NavigateFunction) => {
    const document = doc(firestore, `items/${id}`)
    await deleteDoc(document);
    console.log(`The item has now been deleted`)
    navigate('/')
}

//Edit document description
export const updateItemDescription = async (id: string | undefined, docData: any) => {
    const getItem = doc(firestore, `items/${id}`)
    await setDoc(getItem, docData, {merge: true})
    console.log("The value has been written on the database");
}