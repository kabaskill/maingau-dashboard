import dbConnect from "../db/connect.js";
import User from "../db/models/User.js";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred on the server" });
  }
}
