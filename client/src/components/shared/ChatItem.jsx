import React,{memo, newMessageAlert} from 'react'
import {Link} from '../styles/StyledComponents'
import { Typography,Stack , } from '@mui/material'

const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessage,
    index=0,
    handleDeleteChatOpen,
}) => {
  return (
    <Link sx={{padding:'0',}} to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChatOpen(e,_id,groupChat)}>
        <div style={{
            display:"flex",
            gap:"1rem",
            alignItems:"center",
            padding:"1rem",
            backgroundColor: sameSender ? "black" :"unset",
           color: sameSender? "white" :"unset",
           position:"relative"
        }}>
            {/* {Avatar Card} */}
            <Stack>
                <Typography>{name}</Typography>
                {
                    newMessageAlert &&(
                        <Typography>{newMessageAlert.count} new Message</Typography>
                    )
                }
            </Stack>

            {
                isOnline &&(
                    <Box sx={{
                        width:"10px",
                        height:"10px",
                        borderRadius:"50%",
                        backgroundColor:"green",
                        position:"absolute",
                        top:"50%",
                        right:"1rem",
                        transform:"translateY(-50%)",
                    }}
                    />
                )}

        </div>
    </Link>
  )
}

export default memo(ChatItem);