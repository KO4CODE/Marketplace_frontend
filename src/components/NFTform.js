// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate, useParams } from "react-router-dom";

// export default function NFTform() {
//   const { formType } = useParams();
//   const navigate = useNavigate();

//   const handleCloseForm = () => {
//     navigate('/');
//   };

//   return (
//     <Section>
//       <div className="content">
//         <CloseButton onClick={handleCloseForm}>X</CloseButton>
//         <BackButton onClick={handleCloseForm}>Back to Home</BackButton>
//         <h2>NFT Management</h2>
//         <button onClick={() => navigate('/create-collection')}>Create Collection</button>
//         <button onClick={() => navigate('/create-nft')}>Mint NFT</button>
//         {formType === "collection" && <CollectionForm />}
//         {formType === "nft" && <NFTForm />}
//       </div>
//     </Section>
//   );
// }

// const CollectionForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//   };

//   return (
//     <FormWrapper>
//       <h3>Create Collection</h3>
//       <form onSubmit={handleSubmit}>
//         <InputWrapper>
//           <label>
//             Name of Collection:
//             <input type="text" />
//           </label>
//         </InputWrapper>
//         <InputWrapper>
//           <label>
//             Description:
//             <textarea />
//           </label>
//         </InputWrapper>
//         <ButtonWrapper>
//           <button type="submit">Submit</button>
//         </ButtonWrapper>
//       </form>
//     </FormWrapper>
//   );
// };

// const NFTForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//   };

//   return (
//     <FormWrapper>
//       <h3>Mint NFT</h3>
//       <form onSubmit={handleSubmit}>
//         <InputWrapper>
//           <label>
//             Name of Collection:
//             <input type="text" />
//           </label>
//         </InputWrapper>
//         <InputWrapper>
//           <label>
//             Name of NFT:
//             <input type="text" />
//           </label>
//         </InputWrapper>
//         <InputWrapper>
//           <label>
//             Description:
//             <textarea />
//           </label>
//         </InputWrapper>
//         <InputWrapper>
//           <label>
//             Link:
//             <input type="text" />
//           </label>
//         </InputWrapper>
//         <InputWrapper>
//           <label>
//             Upload Image:
//             <input type="file" />
//           </label>
//         </InputWrapper>
//         <ButtonWrapper>
//           <button type="submit">Submit</button>
//         </ButtonWrapper>
//       </form>
//     </FormWrapper>
//   );
// };

// const Section = styled.section`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   margin: 0 9rem;
//   gap: 10rem;
//   margin-bottom: 5rem;
//   background-color: white;

//   .content {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     gap: 3rem;
//     position: relative;

//     h2 {
//       font-size: 4rem;
//     }

//     button {
//       padding: 0.5rem 1rem;
//       font-size: 1.3rem;
//       border: none;
//       border-radius: 0.5rem;
//       cursor: pointer;
//     }
//   }

//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     flex-direction: column;
//     margin: 0 2rem;
//     gap: 2rem;
//     margin-bottom: 2rem;
//   }
// `;

// const FormWrapper = styled.div`
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-bottom: 20px;
//   position: relative;
// `;

// const InputWrapper = styled.div`
//   margin-bottom: 10px;

//   label {
//     display: block;
//     margin-bottom: 5px;
//   }

//   input,
//   textarea {
//     width: 100%;
//     padding: 8px;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//   }
// `;

// const ButtonWrapper = styled.div`
//   text-align: center;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   font-size: 1.5rem;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   color: #000;
//   &:hover {
//     color: #999;
//   }
// `;

// const BackButton = styled.button`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.5rem;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   color: #000;
//   &:hover {
//     color: #999;
//   }
// `;
