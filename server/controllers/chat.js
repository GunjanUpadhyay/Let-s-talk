import { ALERT, REFETCH_CHATS } from "../constants/event.js";
import { TryCatch } from "../middlewares/error.js";
import { Chat } from "../models/chat.js";
import { emitEvent } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";

const newGroupChat = TryCatch(async (req, res, next) => {
  const { name, members } = req.body;
  if (members.length < 2)
    return next(
      new ErrorHandler("Group chat must have at least 3 members", 400)
    );

  const allMembers = [...members, req.user];
  await Chat.create({
    name,
    groupChat: true,
    creator: req.user,
    members: allMembers,
  });
  emitEvent(req, ALERT, allMembers,`Welcome to ${name} group`);
  emitEvent(req, REFETCH_CHATS, members); // this is for other members what thing is show after grp created

  return res.status(201).json({
    success:true,
    message:"Group Created"
  })
});
export { newGroupChat };
