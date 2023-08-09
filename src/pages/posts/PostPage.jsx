import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
const ThumbsUp = ({size=24, color="#FFFFFF"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>);

export function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [upvotes, setUpvotes] = useState([]);
    
    useEffect(() => {
        api.get(`posts/show/${id}`)
        .then((res) => { setPost(res.data); })
        .catch((err) => alert("Error fetching posts."));
    }, []);

    useEffect(() => {
        api.get("comments/index")
            .then((res) => { setComments(res.data); })
            .catch((err) => alert("Error fetching categories."));
    }, []);

    useEffect(() => {
        api.get("upvotes/index")
            .then((res) => { setUpvotes(res.data); })
            .catch((err) => alert("Error fetching upvotes."));
    }, []);

    function handleSubmit(e) {
    }
    
    function findComments(com){
        if(com.post.id == id){
            return com.content;
        }
    }
    
    let contUpv = 0
    function contUpvotes(upv){
        if(upv.post.id == id){
            contUpv++;
        }
        return contUpv;
    }
    
    let qntUpv = 0
    upvotes.map((upv) => (
        qntUpv = contUpvotes(upv)
    ))

    let contCom = 0
    function contComments(com){
        if(com.post.id == id){
            contCom++;
        }
        return contCom;
    }

    let qntCom = 0
    comments.map((com) => (
        qntCom = contComments(com)
    ))

    return (
        <section className="flex flex-col m-2">
            <div className="self-center flex flex-col m-2">
                <div className="self-center flex m-2">
                    <div>
                        <button className="mx-3 mt-4"><ThumbsUp></ThumbsUp></button>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-xl">{ post.title }</p>

                        <div className="flex text-sm">
                            <p className="mr-2">{ qntUpv } upvotes \</p>
                            <p className="mr-2">{ qntCom } comments \</p>
                            <p className="mr-2">@{ post.user && post.user.name }</p>
                        </div>
                    </div>
                </div>

                <div className="m-4 w-96 text-justify text-lg">
                    <p>{ post.content }</p>
                </div>

                <table className="mx-4 my-2">
                    <tbody>
                        {comments.map((com) => (
                            <tr key={com.id} className="text-base">
                                <td>{findComments(com)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mx-4">
                    <h1 className="text-base">write a comment:</h1>
                    <form>
                        <textarea type="text" className="border-solid border-white border w-96 h-24 text-lg" maxLength={200}></textarea>
                    </form>
                    <button type="submit" onSubmit={handleSubmit} className="px-4 py-0.5 rounded bg-purple-700 text-xl">reply</button>
                </div>
            </div>
        </section>
    )
}