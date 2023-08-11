import { useRouteError } from "react-router-dom"

export function ErrorPage(){
    const error = useRouteError()

    return (
        <div className="flex flex-col text-center my-48 space-y-5 text-4xl">
            <h1>Error: {error.statusText || error.message}.</h1>
        </div>
    )
}