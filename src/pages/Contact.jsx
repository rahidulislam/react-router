import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
    return (
        <div>
            <h3>Contact</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                deserunt id ullam dolores sit dolore unde iure laboriosam
                doloremque numquam consequuntur explicabo nam ipsa, quibusdam
                quidem, placeat assumenda fugit aliquam.
            </p>
            <button onClick={() => navigate("/")}>Go To Home</button>
        </div>
    );
};

export default Contact;
