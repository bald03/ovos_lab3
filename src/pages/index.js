import * as React from "react";

export default function Resume() {
    const resumeData = {
        name: "Бариев Даниил",
        university: "Поволжский государственный технологический университет",
        group: "Группа: ПС-31",
        githubProject: {
            name: "CryptoApp iOS",
            link: "https://github.com/bald03/CryptoApp"
        },
        githubProject2: {
            name: "FindUniversityApp iOS",
            link: "https://github.com/bald03/FindUniversityApp"
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.name}>{resumeData.name}</h1>
                <p style={styles.text}>{resumeData.university}</p>
                <p style={styles.text}>{resumeData.group}</p>

                <a
                    href={resumeData.githubProject.link}
                    style={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {resumeData.githubProject.name}
                </a>
                <a
                    href={resumeData.githubProject2.link}
                    style={{ ...styles.link, marginLeft: "20px" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {resumeData.githubProject2.name}
                </a>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
        fontFamily: "'Arial', sans-serif",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "20px 40px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    name: {
        fontSize: "2.5rem",
        margin: "0",
        color: "#333333",
    },
    text: {
        fontSize: "1.2rem",
        color: "#666666",
        margin: "10px 0",
    },
    link: {
        fontSize: "1.2rem",
        color: "#007acc",
        textDecoration: "none",
        marginTop: "15px",
        display: "inline-block",
        padding: "10px 20px",
        border: "1px solid #007acc",
        borderRadius: "5px",
        transition: "all 0.3s ease",
    }
};
