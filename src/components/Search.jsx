import React, { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase'
import { AuthContext } from './context/AuthContext';

const Search = () => {

  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const currentUser = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true)
    }
  };


  const handleKey = e => {
    e.code === "Enter" && handleSearch();
  };

  const hanleSelect = async () => {
    //check whether the group exists in firestore chats,if not create new
    const combinedID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {

      const res = await getDoc(doc(db, "chats", combinedID));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedID), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedID+".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedID+".date"]: serverTimestamp()
        });
      }
    } catch (err) {
      setErr(true)
    }
    //create user chats
  }

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search a user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} />
      </div>
      {err && <span>User not found !</span>}
      {user && <div className="userChat" onClick={hanleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search
