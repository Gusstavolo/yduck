/* import {db} from "../../firebaseConfig.js";
import { getFirestore, collection } from "firebase/firestore";

const plansReference = collection(db, "pato");

export async function addDuckAcess(body: any) {
    const response = await plansReference.add(body);
    return response;
}
export async function setDuckAcess(body: any) {
    const response = await plansReference.doc().set(body);
    return response;
}
 */