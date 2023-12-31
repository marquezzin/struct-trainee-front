import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

export function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const is_admin = false;
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // Validando os campos antes de enviar
        if (!name || !email || !password || !passwordConfirmation) {
            alert("Please fill in all fields");
            return;
        }
        if (password !== passwordConfirmation) {
            alert("Passwords do not match");
            return;
        }

        api.post("users/create", {
            user: ({
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
                is_admin
            })
        }).then(() => {
            alert("User created successfully");
            // Limpando os campos após o envio
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirmation("");
            navigate('/user/login'); /* ir para página de login após se cadastrar */
        }).catch((err) => {
            console.error("Error creating user:", err);
            alert("Error creating user: " + err.message);
        });
    }

    return (
        <section className="flex flex-col">
            <h1 className="self-center m-6 text-3xl text-white">CREATE ACCOUNT</h1>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={name} onChange={(e) => setName(e.target.value)} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>
                <input type="password" placeholder="password confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <button type="submit" className="my-2 px-4 py-1  text-black rounded-xl bg-white text-xl">SUBMIT</button>
            </form>
        </section>
    );
}