import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";

export function Post({ catId }) {
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
            return (
                <div className="self-center flex m-3" key={pc.post.id}>
                    <Link to={`/post/${pc.post.id}`}>
                    <div className="flex border-b border-gray-200 border-opacity-30">
                                <div className="self-center flex text-sm">
                                    <p className="mx-3">
                                    <span className="text-blue-300" style={{ fontSize: '2rem' }}>&#8226;</span>@{ pc.post.user.name }</p>
                                </div>
                                <p className="text-lg">{ pc.post.title }</p>
                            </div>
                    </Link>
                </div>
            )
        }
    }

    if(catId == "all"){
        return (
            <div className="grid grid-cols-2 w-[70rem]">
                {posts.map((post) => (
                    <div className="m-3" key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <div className="flex border-b border-gray-200 border-opacity-30">
                                <div className="self-center flex text-sm">
                                    <p className="mx-3">
                                    <span className="text-blue-300" style={{ fontSize: '2rem' }}>&#8226;</span>@{ post.user.name }</p>
                                </div>
                                <p className="text-lg">{ post.title }</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div className="flex flex-col m-2"  >
                {postcategories.map((pc) => (
                    verifyPostcategories(catId, pc.category.id, pc)
                ))}
            </div>
        )
    }
}
