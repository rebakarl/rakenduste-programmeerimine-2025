import React from "react";
import "./Profile.css";

const hobbies = [
  "Programmeerimine",
  "Lugemine",
  "Jõusaal",
  "Hip-hop",
  "Reisimine"
];

export default function Profile() {
  return (
    <div className="profile-container">
      <h1>Karl Rebane</h1>
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
      <form className="profile-form">
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" rows={4} />
        </label>
        <button type="button">Send Message</button>
      </form>
    </div>
  );
}
