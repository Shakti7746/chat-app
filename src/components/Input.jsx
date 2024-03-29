import React, { useContext, useState } from "react";

import { AuthContext } from "./context/AuthContext";
import { ChatContext } from "./context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src="data:image/png;base64,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" alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src="data:image/png;base64,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" alt="" />
          </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;