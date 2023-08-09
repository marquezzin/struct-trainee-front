export function CreatePost(){
    return (
        <section className="flex flex-col">
            <div className="self-center mt-10 mb-2 text-2xl">
                <select className="mx-5 bg-gray-600 rounded">
                    <option>Cat 1</option>
                    <option>Cat 2</option>
                    <option>Cat 3</option>
                </select>
            </div>

            <div className="self-center w-96 mb-4">
                <h1 className="text-xl">title</h1>
                <form>
                    <textarea type="text" className="border-solid border-white border w-96 h-24 text-lg" maxLength={130}></textarea>
                </form>
            </div>

            <div className="self-center w-96 mb-4">
                <h1 className="text-xl">content</h1>
                <form>
                    <textarea type="text" className="border-solid border-white border w-96 h-80" maxLength={600}></textarea>
                </form>
            </div>
            
            <div className="self-center m-4">
                <button className="px-5 py-0.5 mx-5 rounded bg-purple-700 text-2xl">post</button>
            </div>
        </section>
    )
}