import React, { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "@firebase/firestore";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { db } from "./config/firebase";

//addDoc, getDoc, getDocs, onSnapshot, updateDoc, setDoc, deleteDoc

export default function App() {
  const [documents, setDocuments] = useState([]);
  //CRUD OPERATIONS USING FIREBASE

  //Create

  const Create = () => {
    let data = {
      Bio2: "App Developer2",
      firstname: "Hi",
    };

    // const docRef = collection(db, "Designations");

    // addDoc(docRef, data)
    //   .then(() => alert("Document Created Successfully"))
    //   .catch((err) => alert(err.message));

    const docRef = doc(db, "Designations", "MyFirstDoc");

    setDoc(docRef, data)
      .then(() => alert("Document Created Successfully"))
      .catch((err) => alert(err.message));
  };

  //Read
  const Read = () => {
    const docRef = collection(db, "Designations");

    //Wont capture realtime changes
    // getDocs(docRef).then((snap) => {
    //   const dataArray = [];
    //   snap.docs.forEach((doc) => dataArray.push({ ...doc.data(), id: doc.id }));
    //   setDocuments(dataArray);
    // });

    //Realtime updates
    onSnapshot(docRef, (snapshot) => {
      const dataArray = [];
      snapshot.docs.forEach((doc) =>
        dataArray.push({ ...doc.data(), id: doc.id })
      );
      setDocuments(dataArray);
    });
  };

  //Update
  const Update = () => {};

  //Delete
  const Delete = () => {};

  return (
    <View style={styles.container}>
      <Button title="Create Doc" onPress={Create} />
      <Button title="Read Docs" onPress={Read} />
      {documents.map((doc, index) => (
        <Text key={doc.id}>{doc.firstname || doc.firstName}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
