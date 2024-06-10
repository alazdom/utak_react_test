import { collection, getFirestore } from 'firebase/firestore'
import { app } from './firebase'

const firestore = getFirestore(app);

//Item collection
export const itemsCollection = collection(firestore, "items")