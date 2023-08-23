import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import { Data } from "../data";
const Blog = () => {
    const { title } = useParams();
    const location = useLocation();
    console.log(location)
    //const [bodyData, setBodyData] = useState("");
    // useEffect(() => {
    //     const data = Data.filter((blog) => blog.title === title);
    //     setBodyData(data[0].body);
    // }, []);
    return (
        <div>
            <h3>{title}</h3>
            <p>{location.state.body.slice(0, 50)}</p>
            <p>{location.state.body.slice(50, 1000)}</p>
        </div>
    );
};

export default Blog;
