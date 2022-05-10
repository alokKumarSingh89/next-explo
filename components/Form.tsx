import { FormEvent } from 'react'

export default function Form({
  errorMessage,
  onSubmit,
}: {
  errorMessage: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-1/3 flex-col flex-wrap bg-gray-200 p-10 shadow-md"
    >
      <label className="flex w-full flex-col">
        <span className="w-full font-bold uppercase">
          Type your GitHub username
        </span>
        <input
          type="text"
          name="username"
          required
          className="mt-5 border-2 p-1"
        />
      </label>
      <button
        type="submit"
        className="mt-5 bg-blue-400 p-3 font-bold text-black"
      >
        Login
      </button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  )
}
