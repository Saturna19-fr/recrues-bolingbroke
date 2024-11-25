"use client";
import { useState } from "react";


export default function ActSteps() {
    const steps = [
        "Remplir les infos personnelles",
        "Indiquer le matricule du détenu et son utilité",
        "Récupérer les affaires personnelles (tel, radio, ...)",
        "Prendre une photo du détenu",
        "Demander une visite médicale pour le détenu",
        "Envoyer la photo",
        "Signer le dossier",
        "Envoyer le dossier"
      ]
    function setworking(event) {
        const item = event.currentTarget.parentNode.classList
        if (!item.contains("step-primary")) {
            item.add("step-primary");
            return;
        } else {
            item.remove("step-primary");
            return;
        }
    }
    return (
        <ul className="steps steps-vertical">
            {steps.map((step, index) => (
                <li className="step" key={index}><button onClick={setworking}>{step}</button></li>
            ))}
        </ul>
    )
}
