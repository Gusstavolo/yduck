import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDirH_Kr-R8xEqocJHWxOiJUyy-6Ti4qas",
  authDomain: "yduck-33d8a.firebaseapp.com",
  databaseURL: "https://yduck-33d8a-default-rtdb.firebaseio.com",
  projectId: "yduck-33d8a",
  storageBucket: "yduck-33d8a.appspot.com",
  messagingSenderId: "848590035268",
  appId: "1:848590035268:web:47571a11418cd6ad501f11",
  measurementId: "G-67EKJBN8ND"
};

// Inicialize o aplicativo Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);

// Obtenha uma referência para o serviço Firestore
const db = getFirestore(app);

export { db }; // Exporte a referência do Firestore para uso em outros lugares do seu aplicativo
