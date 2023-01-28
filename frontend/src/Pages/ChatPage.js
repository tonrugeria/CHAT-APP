import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  //hooks useState lets you remember information and update it directly
  //returns the current state and function that updates it
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    //axios helps you to send async HTTP req to REST endpoints like node.js server and perform CRUD operation
    const { data } = await axios.get("/api/chat");

    setChats(data);
  };

  //useEffect() runs when the app renders for the first time
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        //when map method is used, unique key prop must be given
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
