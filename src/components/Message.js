import React, { useState } from 'react'

const Message = () => {

  const [name, setName] = useState("");
  const [no, setNo] = useState(null);
  const [message, setMessage] = useState("");


  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      let res = fetch("https://cloudsking.com/react_api.php", {
        mode: 'no-cors',
        method: "POST",
        body: JSON.stringify({
          name: name,
          phone_number: no,
          message: message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Handle data
        })
        .catch((err) => {
          console.log(err.message);
        });;
      //let resJson = await res.json();
      if (res.status === 200) {
        console.log('success')
        setName("");
        setNo("");
        setMessage("");
      } else {
        console.log('here')
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    }
  };

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

      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Message