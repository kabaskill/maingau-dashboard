import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  vorname: { type: String },
  nachname: { type: String },
  email: { type: String },
  password: { type: String },
  geburtstag: { type: String},
  geschlecht: { type: String},
  telefon: { type: String},
  strasse: { type: String},
  hausnummer: { type: Number},
  plz: { type: Number},
  city: { type: String},
  cardData: { type: Object},
  wishlistItems: { type: Array},
  shopItems: { type: Array},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
