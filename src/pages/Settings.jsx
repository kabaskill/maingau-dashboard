import useUser from "../utils/useUser";
import WelcomeBanner from "../partials/WelcomeBanner";

function Settings() {
  const { user, error, isLoading } = useUser(0);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading.....</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedUserData = Object.fromEntries(formData.entries());
    console.log("🚀  updatedUserData:", updatedUserData);

    try {
      const response = await fetch("http://localhost:3000/data/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });

      if (response.ok) {
        setUserData(updatedUserData);
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
        className="  bg-white dark:bg-slate-700  flex flex-col gap-2 p-8"
      >
        <label htmlFor="vorname">Vorname</label>
        <input
          className="form-input "
          type="text"
          id="vorname"
          name="vorname"
          placeholder="Vorname"
          defaultValue={user.vorname}
        />

        <label htmlFor="nachname">Nachname</label>
        <input
          className="form-input "
          type="text"
          id="nachname"
          name="nachname"
          placeholder="Nachname"
          defaultValue={user.nachname}
        />

        <label htmlFor="email">E-mail</label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          defaultValue={user.email}
        />

        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          defaultValue={user.password}
        />

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

        <label htmlFor="hausnummer">Hausnummer</label>
        <input
          className="form-input"
          type="number"
          id="hausnummer"
          name="hausnummer"
          placeholder="Hausnummer"
          defaultValue={user.hausnummer}
        />

        <label htmlFor="street">Street</label>
        <input
          className="form-input"
          type="text"
          id="street"
          name="street"
          placeholder="Street"
          defaultValue={user.strasse}
        />

        <label htmlFor="city">City</label>
        <input
          className="form-input"
          type="text"
          id="city"
          name="city"
          placeholder="City"
          defaultValue={user.city}
        />

        <label htmlFor="plz">Postleitzahl (PLZ)</label>
        <input
          className="form-input"
          type="number"
          id="plz"
          name="plz"
          placeholder="Postleitzahl"
          defaultValue={user.plz}
        />

        <button
          className="btn-lg bg-[var(--color-btn-blue)] text-white hover:bg-[var(--color-dark-blue)] mt-4 w-1/3 self-center"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}

export default Settings;
