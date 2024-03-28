import {User} from "../models/user.js";

// Create a new user and save it to the database & save in coookieee
const newUser = async (req, res) => {

  const {name,username,password,bio}=req.body;

  // console.log(req.body);

  const avatar = {
    public_id: "dcnjsdndk",
    url: "nisgdvi",
  };
  await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  res.status(201).json({message:"User Created successfully without any problem"});
};
const login = (req, res) => {
  res.send("form the login side ");
};

export { login, newUser };
