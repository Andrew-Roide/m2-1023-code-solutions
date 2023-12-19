import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input type="text" name="username" />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" name="password" />
        </label>

        <label htmlFor="submit">
          <button type="submit" name="submit">
            Submit
          </button>
        </label>
      </form>
    </>
  );
}
