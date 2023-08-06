export function Profile() {
    return (
        <section className="flex flex-col">
            <img className="self-center m-2" src="../../assets/H.png"></img>
            <div className="self-center flex m-2">
                <p className="self-center text-xl mx-2">@username</p>
                <button className="text-purple-600 mx-2">edit username</button>
            </div>
            <p className="self-center text-xl m-2">X points earned</p>
            <div className="self-center flex flex-col m-2">
                <p className="self-center text-xl">bio</p>
                <p className="self-center text-xl">asjklfh</p>
                <button className="text-purple-600">edit bio</button>
            </div>
        </section>
    )
}