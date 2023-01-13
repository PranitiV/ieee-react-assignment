import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://cloudsking.com/react_api.php";

const Message = (props) => {
    // eslint-disable-next-line
    const [post, setPost] = useState(null);
    const [name, setName] = useState("");
    const [no, setNo] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function createPost() {
        console.log('hello')
        const formData = new FormData()
        formData.append("name", name)
        formData.append("phone_number", no)
        formData.append("message", message)

        axios
            .post(baseURL, formData)
            .then((response) => {
                setPost(response.data);
                console.log(response.data)
            })
            .catch((err) => console.log(err));
    }

    const handleChangeMess = (event) => {
        setMessage(event.target.value)
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeNo = (event) => {
        setNo(event.target.value)
    }

    return (
        <div>
            <div>Hello, this is the {props.page} page</div>
            <label>
                Name:
                <input type="text" name="name" placeholder="tell me your name" onChange={handleChangeName} />
                <div></div>
            </label>

            <label>
                Phone number:
                <input type="text" placeholder="tell me your phone number" onChange={handleChangeNo} />
                <div></div>
            </label>

            <label>
                Message:
                <input onChange={handleChangeMess} type="text" placeholder="tell me your message"></input>
                <div></div>
            </label>

            {post ? <div>{post.message}</div> : null}

            <button onClick={createPost}>Submit</button>

        </div>
    );
}

export default Message