import { useState } from "react";

export function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <section className="flex flex-col">
            <h1 className="self-center m-6 text-3xl text-black">CREATE ACCOUNT</h1>
            <form className="flex flex-col items-center" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="username" placeholder="USERNAME" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <input type="email" placeholder="EMAIL" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <input type="password" placeholder="PASSWORD" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}  className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <input type="password" placeholder="PASSWORD CONFIRMATION" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}  className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <button type="submit" className="my-2 px-4 py-1  text-black rounded-2xl bg-white text-xl">SUBMIT</button>
            </form>
        </section>
    );
}
