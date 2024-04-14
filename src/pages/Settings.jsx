import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Settings() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <form className="  bg-white dark:bg-slate-700  flex flex-col gap-2 p-8">
        <label htmlFor="vorname">Vorname</label>
        <input
          className="form-input "
          type="text"
          id="vorname"
          name="vorname"
          placeholder="Vorname"
        />

        <label htmlFor="nachname">Nachname</label>
        <input
          className="form-input "
          type="text"
          id="nachname"
          name="nachname"
          placeholder="Nachname"
        />

        <label htmlFor="email">E-mail</label>
        <input className="form-input" type="email" id="email" name="email" placeholder="Email" />

        <label htmlFor="birthdate">Geburtstag</label>
        <input
          className="form-input"
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="Birth Date"
        />

        <label htmlFor="city">City</label>
        <input className="form-input" type="text" id="city" name="city" placeholder="City" />

        <label htmlFor="street">Street</label>
        <input className="form-input" type="text" id="street" name="street" placeholder="Street" />

        <label htmlFor="plz">Postleitzahl (PLZ)</label>
        <input
          className="form-input"
          type="number"
          id="plz"
          name="plz"
          placeholder="Postleitzahl"
        />

        <label htmlFor="hausnummer">Hausnummer</label>
        <input
          className="form-input"
          type="number"
          id="hausnummer"
          name="hausnummer"
          placeholder="Hausnummer"
        />

        <button
          className="btn-lg bg-[var(--color-btn-blue)] text-white hover:bg-[var(--color-dark-blue)] mt-4 w-1/3 self-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Settings;
