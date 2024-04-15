import dbConnect from "../src/db/connect";
import User from "../src/db/models/User";

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
