import React, { useState } from "react";
import { Data } from "../data";
import { Link } from "react-router-dom";
import Header from "../components/Header";

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
            <Header title="Blogs"/>
            <h3>Blogs</h3>
            <section>
                {blogData.map((blog) => {
                    const { id, title, body } = blog;
                    return (
                        <article key={id}>
                            <h4>{title}</h4>
                            <p>{trancateString(body, 50)}</p>
                            <Link to={title} state={{body}}>Read More</Link>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Blogs;
