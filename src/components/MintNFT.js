// src/components/NFTForm.js

import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button"; // Assuming you have a Button component

export default function MintNFT({ onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h2>Mint Your NFT</h2>
        <div className="form-group">
          <label htmlFor="name">NFT Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload Image</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="buttons">
          <Button blue text="Mint NFT" type="submit" />
          {/* <Button text="Cancel" onClick={onCancel} /> */}
        </div>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffcd17;
  width: 100%;
  height: 100%;
  padding:3rem;

  form {
    background: #ffffff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      margin-bottom: 1rem;
      color: #333;
      text-align: center;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 1rem;
        color: #666;
      }

      input,
      textarea {
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
      }

      textarea {
        resize: vertical;
        min-height: 100px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }
`;
