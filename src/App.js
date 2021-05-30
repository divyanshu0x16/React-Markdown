import marked from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { sampleText } from "./components/sampleText";
import React, { useState, useEffect } from "react";

function App() {
    const [text, setText] = useState(sampleText);

    const handleTextChange = (event) => {
        setText(event.target.value);
        localStorage.setItem("text", event.target.value);
    };

    useEffect(() => {
        const savedText = localStorage.getItem("text");
        if (savedText) setText(savedText);
    }, []);

    const renderText = (text) => {
        const markdownText = marked(text, { sanitize: true });
        return { __html: markdownText };
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <textarea
                        className="form-control"
                        rows="35"
                        onChange={handleTextChange}
                        value={text}
                    />
                </div>
                <div className="col-sm-6">
                    <div dangerouslySetInnerHTML={renderText(text)} />
                </div>
            </div>
        </div>
    );
}

export default App;
