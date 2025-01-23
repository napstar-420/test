import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div
        className="Home-container container-fluid"
        id="home"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        <div
          className="Home-content text-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
            Ayesha Fateh Ali
          </h1>
          <h2 style={{ fontSize: "2rem", fontWeight: "400" }}>
            I am a
          </h2>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "10px" }}>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer!",
                  "MERN Stack Developer!",
                  "React.JS Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
