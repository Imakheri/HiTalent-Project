import React from "react";
import "./messenger.css";
import Nav from "../Home/Nav";
import Conversation from "./Conversation/Conversation";
import Message from "./Message/Message";
import ChatOnline from "./ChatOnline/ChatOnline";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Messenger() {
  const user = useSelector((state) => state.index.user);
  console.log(user);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/conversation/" + user.id
        );
        console.log(res.data);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/messages/" + currentChat?.id
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat.id,
    };

    try {
      const res = await axios.post("http://localhost:3001/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Nav />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Buscar docente" className="chatMenuInput" />
            <div className="chatMenuInfo">
              Ten en cuenta que sólo podras chatear con un docente luego de
              adquirir su curso.
            </div>
            {conversations?.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user.id} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBowTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user.id} />
                    </div>
                  ))}
                </div>
                <div className="chatBowBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Mensaje..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Enviar
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Abre una conversación para iniciar una charla
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
