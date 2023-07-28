import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const MailVerification = () => {
    const navigate = useNavigate()
    const [verificationStatus, setVerificationStatus] = useState(false);
    const { verify_code } = useParams();

    const changeVerified = async () => {
        try {
            await axios.get(`http://localhost:8080/api/auth/verify/${verify_code}`);
            setVerificationStatus(true)
            Swal.fire({
                icon: "success",
                title: "Email verified successfully!",
              });
            navigate("/login")
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Email is already verified or doesn't exist",
              });
            console.log(error);
        }
    };

    return (
        <div className="flex h-[100vh] bg-[url('/src/assets/images/backgroundmanga.png')] w-full bg-cover justify-center items-center flex-col lg:bg-[url('/src/assets/images/background.png')] lg:h-[100vh] lg:w-full lg:bg-top">
            <h1 className="text-white text-3xl mb-3 text-center md:m-10 md:text-5xl lg:m-0 p-6">Welcome to Minga!</h1>
            {verificationStatus ? (
                <p className="text-bold font-sans ">Your email has been verified</p>
                ) : (
                    <button className="m-4 p-4 rounded-lg bg-gradient-to-r from-[#4338CA] to-[#5E52F3] text-white font-bold text-lg" onClick={changeVerified}>Click here to verify your Email</button>
                    )}

        </div>
    );
};

export default MailVerification;

/*
    const changeVerified = async () => {
        try {
            let usersData = await handleVerification(); // Wait for the users data to be fetched
            let emailToVerify = usersData.find((user) => user?.verify_code === verify_code); // Find the user with matching verify_code
            console.log(emailToVerify);

            if (emailToVerify) {
                try {
                    let updatedUserData = { ...emailToVerify, verified: true };
                    await axios.put(`http://localhost:8080/api/auth/update/${emailToVerify._id}`, updatedUserData);
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log('User not found');
            }
        } catch (error) {
            console.log(error);
        }
    };*/