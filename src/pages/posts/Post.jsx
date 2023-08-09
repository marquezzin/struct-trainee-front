import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";
const ThumbsUp = ({size=24, color="#FFFFFF"}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>);

export function Post({ catId = 1 }) {
    const [posts, setPosts] = useState([]);
    const [postcategories, setPostcategories] = useState([]);

    useEffect(() => {
        api.get("posts/index")
            .then((res) => { setPosts(res.data); })
            .catch((err) => alert("Error fetching posts."));
    }, []);

    useEffect(() => {
        api.get("post_categories/index")
            .then((res) => { setPostcategories(res.data); })
            .catch((err) => alert("Error fetching post categories."));
    }, []);

    function verifyPostcategories(catId, pcId, pc){
        if(catId == pcId){
            console.log(catId, pcId, pc.post.title)
            return (
                <div className="flex m-2" key={pc.post.id}>
                    <Link to={`/post/${pc.post.id}`}>
                        <div className="flex flex-col">
                            <p className="text-xl">{ pc.post.title }</p>
                            <div className="flex text-sm">
                                <p className="mr-2">@{ pc.post.user_id }</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
    }

    function handlePost(post){
        
    }



    return (
        <div className="flex flex-col m-2">
            {/* {posts.map((post) => (
                // <div className="flex m-2" key={post.id}>
                //     <Link to={`/post/${post.id}`}>
                //         <div className="flex flex-col">
                //             <p className="text-xl">{ post.title }</p>
                //             <div className="flex text-sm">
                //                 <p className="mr-2">@{ post.user.name }</p>
                //             </div>
                //         </div>
                //     </Link>
                // </div>
                handlePost(post)
            ))} */}
            {postcategories.map((pc) => (
                verifyPostcategories(catId, pc.category.id, pc)
            ))}
        </div>
    )
}