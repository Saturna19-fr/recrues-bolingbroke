"use client";
import { useState } from "react";


export default function Timer() {
    const [counter, setCounter] = useState(100)
    setInterval(() => {
        setCounter(counter - 1)
    }, 1000);
    return (
        <span className="countdown font-mono text-6xl">
            <span style={{"--value":counter}}></span>
        </span>
    )
}