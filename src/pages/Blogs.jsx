import React, { useState } from "react";
import { Data } from "../data";
import { Link } from "react-router-dom";
const Blogs = () => {
    const [blogData, setBlogData] = useState(Data);
    const trancateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <div>
            <h3>Blogs</h3>
            <section>
                {blogData.map((blog) => {
                    const { id, title, body } = blog;
                    return (
                        <article key={id}>
                            <h4>{title}</h4>
                            <p>{trancateString(body, 50)}</p>
                            <Link to={title}>Read More</Link>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Blogs;
