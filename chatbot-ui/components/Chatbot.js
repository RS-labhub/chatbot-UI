"use client";

import { useState } from 'react';
import styled from 'styled-components';

const ChatbotButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: ${props => (props.open ? 'block' : 'none')};
  z-index: 1000;
`;

const ChatHeader = styled.div`
  background-color: #0070f3;
  color: white;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ChatBody = styled.div`
  padding: 10px;
  overflow-y: auto;
  height: calc(100% - 60px);
`;

const ChatFooter = styled.div`
  padding: 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotButton onClick={() => setIsOpen(!isOpen)}>
        💬
      </ChatbotButton>
      <ChatWindow open={isOpen}>
        <ChatHeader>Chatbot</ChatHeader>
        <ChatBody>
          {/* Messages will go here */}
        </ChatBody>
        <ChatFooter>
          <ChatInput placeholder="Type a message..." />
        </ChatFooter>
      </ChatWindow>
    </>
  );
}
