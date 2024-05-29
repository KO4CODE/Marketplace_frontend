import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi"; // Import the arrow icon from react-icons library

export default function NFTCollectionPage() {
  return (
    <Section>
      <div className="content">
        <h2>NFT Collection</h2>
        <div className="input-container">
          <input type="text" placeholder="Enter Collection Name" />
          <DropdownIcon />
        </div>
      </div>
    </Section>
  );
}

const DropdownIcon = styled(FiChevronDown)`
  color: #2d69fd;
  font-size: 2rem;
  cursor: pointer;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 10rem;
  margin-bottom: 5rem;

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    h2 {
      font-size: 4rem;
    }

    .input-container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      gap: 1rem;
      border: 1px solid #c4c4c4;
      border-radius: 3rem;

      input {
        border: none;
        &:focus {
          outline: none;
        }
        padding-left: 2rem;
        padding-right: 5rem;
        font-size: 1.3rem;
        width: 20rem; /* Adjust width as needed */
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 0 2rem;
    gap: 2rem;
    margin-bottom: 2rem;

    .content {
      gap: 1rem;

      h2 {
        font-size: 2rem;
      }

      .input-container {
        width: max-content;

        input {
          width: 50%;
        }
      }
    }
  }
`;
