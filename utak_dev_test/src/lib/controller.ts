import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app } from './firebase'
import { AddItemType } from '../types/items';

export const firestore = getFirestore(app);

//Item collection
export const itemsCollection = collection(firestore, "items")


//Add new item to firestore
export const addItem = async (itemData: AddItemType) => {
const newItem = await addDoc(itemsCollection, {...itemData})
console.log(`The new item was created at ${newItem.path}`)
}