import { default as React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";
import { api } from "../../utils/api";
const ThumbsUp = ({size=24, color="#FFFFFF"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>);
const ThumbsDown = ({size=24, color="#FFFFFF"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>);

export function PostPage() {
    const { user } = useUserContext()
    const { id } = useParams();
    const [post, setPost] = useState([]);

    const [upvotes, setUpvotes] = useState([]);
    const [createupvote, setCreateupvote] = useState({
        status: false,
    });
    const [updatesupvotes, setUpdatesupvotes] = useState(0);

    const [comments, setComments] = useState([]);
    const [createcomment, setCreatecomment] = useState({
        content: "",
    });
    const [updatescomments, setUpdatescomments] = useState(0);

    function forceUpdateUpvotesIndex() {
        setUpdatesupvotes(updatesupvotes + 1);
    }

    function forceUpdateCommentsIndex() {
        setUpdatescomments(updatescomments + 1);
    }

    useEffect(() => {
        api.get(`posts/show/${id}`)
        .then((res) => { setPost(res.data); })
        .catch((err) => alert("Error fetching posts: " + err.message));
    }, []);

    useEffect(() => {
        api.get("upvotes/index")
            .then((res) => { setUpvotes(res.data); })
            .catch((err) => alert("Error fetching upvotes: " + err.message));
    }, [updatesupvotes]);

    useEffect(() => {
        api.get("comments/index")
            .then((res) => { setComments(res.data); })
            .catch((err) => alert("Error fetching categories: " + err.message));
    }, [updatescomments]);
    
    function handleContentChange(event) {
        setCreatecomment({ ...createcomment, content: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        api.post("comments/create", {
            content: createcomment.content,
            post_id: `${post.id}`,
            user_id: `${user.id}`
        }).then(() => {
            alert("Comment created successfully");
            forceUpdateCommentsIndex();
        }).catch((err) => {
            alert("Error creating comment: " + err.message);
        });
    }

    function handleUpvote(event) {
        event.preventDefault();
        setCreateupvote({status: !createupvote.status})
        api.post("upvotes/create", {
            status: !createupvote.status,
            post_id: `${post.id}`,
            user_id: `${user.id}`
        }).then(() => {
            alert("Upvote created successfully");
            forceUpdateUpvotesIndex();
        }).catch((err) => {
            alert("Error creating upvote: " + err.message);
        });
    }

    function findComments(com){
        if(com.post.id == id){
            return "@" + com.user.name + " - " + com.content;
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
                <div className="self-center flex m-2 w-[30rem] ">
                    <form>
                        {createupvote.status 
                            ? <p className="mx-3 mt-10"><ThumbsDown></ThumbsDown></p> 
                            : <button onClick={handleUpvote} className="mx-3 mt-10"><ThumbsUp></ThumbsUp></button> 
                        }
                    </form>

                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">{ post.title }</p>

                        <div className="flex text-sm">
                            <p className="mr-2">{ qntUpv } upvotes \</p>
                            <p className="mr-2">{ qntCom } comments \</p>
                            <p className="mr-2">@{ post.user && post.user.name }</p>
                        </div>
                    </div>
                </div>

                <div className="m-4 w-[40rem] text-justify text-xl">
                    <p>{ post.content }</p>
                </div>

                <table className="mx-4 my-2 border-t border-gray-200 border-opacity-30 w-[40rem]">
                    <tbody>
                        <tr>
                            <td className="text-lg">Comments:</td>
                        </tr>
                        {comments.map((com) => (
                            <tr key={com.id} className="text-base">
                                <td>{findComments(com)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mx-4">
                    <h1 className="text-base">Write a comment:</h1>
                    <form className="flex flex-col">
                        <textarea value={createcomment.content} onChange={handleContentChange} type="text" className="border-solid border-gray-800 border-2 w-[40rem] h-24 text-lg text-black bg-gray-200" maxLength={200}></textarea>
                        <button onClick={handleSubmit} type="submit" className="px-4 py-0.5 rounded text-black bg-white text-xl w-20 my-2">reply</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
