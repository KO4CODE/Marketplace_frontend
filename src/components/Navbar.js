import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo.png";
import Button from "./Button";
import { getWeb3 } from "../utils/web3";
import NFTForm from "./NFTform";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");
  const [showNFTForm, setShowNFTForm] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleConnectWallet = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setIsConnected(true);
        setConnectedAddress(accounts[0]);
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Error connecting to MetaMask: " + error.message);
    }
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  const handleCreateClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCreateNFTClick = () => {
    setShowNFTForm(true);
    setIsDropdownOpen(false);
  };

  const handleCreateCollectionClick = () => {
    alert('Create Collection clicked!');
    setIsDropdownOpen(false);
  };

  const handleCancelNFTForm = () => {
    setShowNFTForm(false);
  };

  return (
    <>
      <Nav state={isNavOpen ? 1 : 0}>
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={handleCloseNav} />
          ) : (
            <GiHamburgerMenu onClick={() => setIsNavOpen(true)} />
          )}
        </div>
        <div className={`links ${isNavOpen ? "show" : ""}`}>
          <ul>
            <li>
              <CreateButton href="home" onClick={handleCloseNav}>
                Home
              </CreateButton>
            </li>
            <li>
              <CreateButton href="marketplace" onClick={handleCloseNav}>
                Marketplace
              </CreateButton>
            </li>
            <li>
              <CreateButton href="sellers" onClick={handleCloseNav}>
                Sellers
              </CreateButton>
            </li>
            <li className="dropdown">
              <CreateButton href="#" onClick={handleCreateClick}>
                Create
              </CreateButton>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={handleCreateNFTClick}>Create NFT</li>
                  <li onClick={handleCreateCollectionClick}>Create Collection</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        {isConnected ? (
          <ConnectedStatus>
            <span>Connected: {connectedAddress}</span>
          </ConnectedStatus>
        ) : (
          <Button blue text="Connect wallet" onClick={handleConnectWallet} />
        )}
      </Nav>
      {showNFTForm && (
        <NFTFormWrapper>
          <NFTForm onCancel={handleCancelNFTForm} />
        </NFTFormWrapper>
      )}
      <ContentWrapper>
        {/* Your main content here */}
      </ContentWrapper>
    </>
  );
}

const NFTFormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .brand img {
    width: 150px;
  }

  .toggle {
    display: none;
  }

  .links ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;

    li {
      position: relative;

      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding: 0.5rem 1rem;
          cursor: pointer;

          &:hover {
            background-color: #f1f1f1;
          }
        }
      }

      &:hover .dropdown-menu {
        display: block;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .toggle {
      display: block;
    }

    .links {
      display: none;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background: white;
      padding: 1rem;

      &.show {
        display: block;
      }

      ul {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`;

const ConnectedStatus = styled.div`
  span {
    font-size: 1rem;
    color: green;
  }
`;

const CreateButton = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 70px; /* Adjust this value if needed */
`;
