import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { app, database } from "../firebseconfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Home() {
  const [name, setName]: any = React.useState<any>("");
  const [age, setAge]: any = React.useState<any>("");
  const [data, setData]: any = React.useState<any>([]);
  const databaseRef = collection(database, "items");

  const add = () => {
    addDoc(databaseRef, {
      name: name,
      age: age,
    }).then((res) => {
      console.log(res);
    });
  };

  const getData = () => {
    getDocs(databaseRef).then((res: any) => {
      setData(
        res.docs.map((item: any) => {
          return { ...item.data(), id: item.id };
        })
      );
      // res.forEach((doc) => {
      //   console.log(doc.data());
      // });
    });
  };

  const update = (id: any) => {
    console.log(id);
    let dataFild = doc(database, "items", id);
    updateDoc(dataFild, {
      name: "update",
    }).then((update) => {
      console.log(update);
    });
  };

  return (
    <>
      <div>
        <h2>Home</h2>
        <p>Name</p>
        <input
          onChange={(e: any) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <p>Age</p>
        <input
          onChange={(e: any) => setAge(e.target.value)}
          type="text"
          placeholder="Age"
        />
        <br />
        <br />
        <button onClick={add}>Add</button>
        <button onClick={getData}>Get Data</button>

        {data?.map((item: any, index: number) => (
          <div key={index}>
            <p>Id:{item.id}</p>
            <p>Name:{item.name}</p>
            <p>age: {item.age}</p>
            <button onClick={() => update(item.id)}>Update</button>
          </div>
        ))}
      </div>
    </>
  );
}
