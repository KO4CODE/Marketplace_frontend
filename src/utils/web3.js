import Web3 from "web3";

export const getWeb3 = async () => {
  // Modern dapp browsers
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return web3;
    } catch (error) {
      throw new Error("User denied account access");
    }
  }
  // Legacy dapp browsers
  else if (window.web3) {
    return new Web3(window.web3.currentProvider);
  }
  // Non-dapp browsers
  else {
    throw new Error("No Ethereum provider detected");
  }
};

export const connectWallet = async () => {
  try {
    //console.log("connect wallet");
    const web3 = await getWeb3();
    // You can perform further actions here after connecting
    console.log("Connected to MetaMask with address:", web3.currentProvider.selectedAddress);
    // For now, let's just log the connected address
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    // Handle error, perhaps show a message to the user
    alert("Error connecting to MetaMask: " + error.message);
  }
};

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUserData, disconnect } from "../../features/userData";
// import { ethers, utils } from "ethers";
// import Web3Modal from "web3modal";
// import axios from "axios";
// import Account from "./Account";
// import networks from "../../utils/networksMap.json";
// import useComponentVisible from "../../hooks/visible";
// import Button from "../Button";
// import artistsContract from "../../artifacts/AARTArtists.sol/AARTArtists.json";
// import { IPFS_GATEWAY } from "../../utils/ipfsStorage";
// import {
//   artistsContractAddress,
//   networkDeployedTo,
// } from "../../utils/contracts-config";
// import { defaultProfileImg } from "../../utils/helpers";

