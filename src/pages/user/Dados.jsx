import { useUserContext } from "../../utils/UserContext";

export function Dados(){
    const { user, logout } = useUserContext();
    console.log(user)

    return(

        <section className="flex flex-col">
            <div className="self-center flex flex-col m-4">
                    <img className="m-1 w-32 h-32" src={user && user.profile_picture_url  ? user.profile_picture_url : "/logo.png"}></img>
                    {/* <button className="text-green-900 mx-2 text-sm">edit profile picture</button> */}
                </div>
                <div className="self-center flex m-5">
                    <p className="self-center text-3xl mx-2">@{user ? user.name : "username"}</p>
                    {/* <button className="text-green-900 mx-2 text-sm">edit username</button> */}
                </div>
                <div className="self-center flex flex-col m-5">
                    <p className="self-center text-2xl w-96 text-justify m-2">bio: {user ? user.bio : "bio"}</p>
                    {/* <button className="text-green-900 text-sm">edit bio</button> */}
                    <div className="flex flex-col">
                        <button onClick={logout} className="self-center px-4 py-1 m-4 rounded bg-white text-xl">LOGOUT</button>
                    </div>
                </div>
        </section>
    )
}
