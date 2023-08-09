import { useState } from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";



export function Login() {
    const navigate=useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState(null)

    const handlesubmit = (ev) => {
        ev.preventDefault()
        if(!email || !password){
            alert("preencha os campos")
            return
        }
        api.post("users/login",{email,password})
        .then((res)=>{
            console.log(res.data)
            if (res.data.is_admin) {
                alert("Successfully logged in as admin");
                navigate('/categories'); // Redirecionar apenas se for administrador.
            } else {
                alert("Successfully logged in");
            }
        })
        .catch((err) => {
            alert("Login error ");
            });
    }

    return (
        <section className="flex flex-col">
            <h1 className="self-center m-6 text-4xl">login</h1>
            <form className="flex flex-col items-center" onSubmit={handlesubmit}>
                <input type="email" placeholder="email" value={email} onChange={(ev) => {
                    setEmail(ev.target.value);
                }} className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <input type="password" placeholder="password" value={password} onChange={(ev) => {
                    setPassword(ev.target.value);
                }}  className="outline-none bg-white rounded my-1 px-1 text-black text-xl h-8 w-80"></input>

                <button type="submit" className="my-2 px-4 py-1 rounded bg-purple-700 text-xl">submit</button>
            </form>
        </section>
    );
}
