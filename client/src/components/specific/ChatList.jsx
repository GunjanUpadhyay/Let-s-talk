import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";
import { Height } from "@mui/icons-material";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers.includes(member));

        return (
          <ChatItem
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            index={index}
            name={name}
            avatar={avatar}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
