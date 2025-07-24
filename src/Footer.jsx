import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <><footer style={{ textAlign: "center", padding: "1rem", fontSize: "16px", color: "rgb(255, 255, 255)" }}>
            <p>
                Made with <span style={{ color: "red" }}>❤️</span> by{" "}
                <a
                    href="https://sayankoley.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", fontWeight: "bold", color: "#d438d1" }}
                >
                    Sayan Creation<br></br>
                </a> © {year} Sayan Creation. All rights reserved.</p>
        </footer></>
    )
}

export default Footer