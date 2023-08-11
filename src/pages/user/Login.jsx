import { useState } from "react";
import { useUserContext } from "../../utils/UserContext";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, login } = useUserContext();
    console.log(user)

    const handlesubmit = (ev) => {
        ev.preventDefault()
        if(!email || !password){
            alert("preencha os campos")
            return
        }

        login({ email, password}).catch((err) => {
            alert("Login error ");
        });
    }

    return (
        <section className="flex flex-col">
            <h1 className="self-center m-6 text-3xl text-white">WELCOME!</h1>
            <form className="flex flex-col items-center" onSubmit={handlesubmit}>
                <input type="email" placeholder="email" value={email} onChange={(ev) => {
                    setEmail(ev.target.value);
                }} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <input type="password" placeholder="password" value={password} onChange={(ev) => {
                    setPassword(ev.target.value);
                }}  className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <button type="submit" className="my-2 px-4 py-1  text-black rounded-xl bg-white text-xl">SUBMIT</button>
            </form>
        </section>
    );
}
