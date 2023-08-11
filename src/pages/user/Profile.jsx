import { useUserContext } from "../../utils/UserContext";
import { photo } from "../../utils/photo";

export function Profile(){
    const { user } = useUserContext();

    return(
        <section className="flex flex-col">
            <div className="self-center flex flex-col mt-5">
                    <img className="m-1 w-48 h-48" src={user && user.profile_picture_url ? photo.defaults.baseURL+user.profile_picture_url : "/vazio.png"}></img>
                </div>
                <div className="self-center flex m-2">
                    <p className="self-center text-3xl mx-2">@{user ? user.name : "username"}</p>
                </div>
                <div className="self-center flex flex-col m-5 border-t border-gray-200">
                    <p className="self-center text-2xl w-96 text-justify m-2">bio: {user ? user.bio : ""}</p>
            </div>
        </section>
    )
}
