import useUser from "../utils/useUser";
import { useState } from "react";
import WelcomeBanner from "../partials/WelcomeBanner";

function Settings() {
  const { user, error, isLoading } = useUser(0);
  const [userData, setUserData] = useState(user);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading.....</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedUserData = Object.fromEntries(formData.entries());
    console.log("🚀  updatedUserData:", updatedUserData);

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
          ...updatedUserData,
        }),
      });

      if (response.ok) {
        setUserData({
          ...user,
          ...updatedUserData,
        });
        alert("Data updated successfully");
      } else {
        alert("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <form
        onSubmit={handleSubmit}
        className="  bg-white dark:bg-slate-700  w-[80%] grid grid-cols-2 gap-10 p-8 mx-auto "
      >
        <div className="flex flex-col ">
          <label htmlFor="vorname">Vorname</label>
          <input
            className="form-input"
            type="text"
            id="vorname"
            name="vorname"
            placeholder="Vorname"
            defaultValue={user.vorname}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="nachname">Nachname</label>
          <input
            className="form-input"
            type="text"
            id="nachname"
            name="nachname"
            placeholder="Nachname"
            defaultValue={user.nachname}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            defaultValue={user.email}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            defaultValue={user.password}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="birthdate">Geburtstag</label>
          <input
            className="form-input"
            type="date"
            id="birthdate"
            name="birthdate"
            placeholder="Birth Date"
            defaultValue={user.geburtstag}
            min="1950-01-01"
            max="2024-12-31"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="telefon">Telefon</label>
          <input
            className="form-input"
            type="text"
            id="telefon"
            name="telefon"
            placeholder="Telefon"
            defaultValue={user.telefon}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="street">Street</label>
          <input
            className="form-input"
            type="text"
            id="street"
            name="street"
            placeholder="Street"
            defaultValue={user.strasse}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="hausnummer">Hausnummer</label>
          <input
            className="form-input"
            type="number"
            id="hausnummer"
            name="hausnummer"
            placeholder="Hausnummer"
            defaultValue={user.hausnummer}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="city">City</label>
          <input
            className="form-input"
            type="text"
            id="city"
            name="city"
            placeholder="City"
            defaultValue={user.city}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="plz">Postleitzahl (PLZ)</label>
          <input
            className="form-input"
            type="number"
            id="plz"
            name="plz"
            placeholder="Postleitzahl"
            defaultValue={user.plz}
          />
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            className="btn-lg bg-[var(--color-btn-blue)] text-white hover:bg-[var(--color-dark-blue)] mt-4 w-1/3 "
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}

export default Settings;
