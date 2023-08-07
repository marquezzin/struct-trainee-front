import { useState } from "react";

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <section className="flex flex-col">
            <h1 className="self-center m-6 text-4xl">login</h1>
            <form className="flex flex-col items-center" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="email" placeholder="email" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <input type="password" placeholder="password" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}  className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>
                
                <button type="submit" className="my-2 px-4 py-1 rounded bg-purple-600 text-xl">submit</button>
            </form>
        </section>
    );
}