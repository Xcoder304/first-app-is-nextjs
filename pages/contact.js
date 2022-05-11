import { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = userData;

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("your message is send successfully.. :)");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("sorry we cant send your message now please try later");
      });
  };

  return (
    <div className={styles.container}>
      <h1>contact us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={userData.name}
          onChange={(e) => setuserData({ ...userData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={userData.email}
          onChange={(e) => setuserData({ ...userData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Enter PhoneNumber"
          name="phonenumber"
          value={userData.phonenumber}
          onChange={(e) =>
            setuserData({ ...userData, phonenumber: e.target.value })
          }
        />
        <textarea
          placeholder="Enter your Message"
          name="message"
          value={userData.message}
          onChange={(e) =>
            setuserData({ ...userData, message: e.target.value })
          }
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
