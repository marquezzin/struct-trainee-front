import { useUserContext } from "../../utils/UserContext";
import { photo } from "../../utils/photo";

export function Dados(){
    const { user, logout } = useUserContext();
    console.log(user)

    return(

        <section className="flex flex-col">
            <div className="self-center flex flex-col mt-5">
                    <img className="m-1 w-48 h-48" src={user && user.profile_picture_url ? photo.defaults.baseURL+user.profile_picture_url : "/logo.png"}></img>
                </div>
                <div className="self-center flex m-2">
                    <p className="self-center text-3xl mx-2">@{user ? user.name : "username"}</p>
                </div>
                <div className="self-center flex flex-col m-5">
                    <p className="self-center text-2xl w-96 text-justify m-2">bio: {user ? user.bio : "bio"}</p>
                    <div className="flex flex-col">
                        <button onClick={logout} className="self-center px-4 py-1 m-4 rounded bg-white text-xl">LOGOUT</button>
                    </div>
                </div>
        </section>
    )
}
