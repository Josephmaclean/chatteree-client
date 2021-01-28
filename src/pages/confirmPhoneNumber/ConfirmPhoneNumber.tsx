import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import logo from '../../assets/images/svg/logo.svg';
import Otp from '../../components/otp/otp';
import illustration from '../../assets/images/svg/otp illustration.svg';
import arrowLeft from '../../assets/images/svg/arrow-left.svg';


export default function ConfirmPhoneNumber() {
    const [otp, changeOtp] = useState("");
    const history = useHistory()

    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        changeOtp(event.currentTarget.value);
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        history.push("/create-id")
    }
    return <>
    <main>
        <section className="flex justify-center">
            <div className=" mt-28 relative">
            <div className="absolute shadow-lg rounded-full h-12 w-12 -left-96 flex justify-center align-middle">
                <img src={arrowLeft} alt="back" className=" w-8"/>
            </div>
                <img src={logo} alt="logo"/>
                <h1 className="text-heading mt-6">
                    Check your phone
                </h1>
                <p className="mt-4 text-body-regular text-oslo-gray">
                    Enter the validation code sent to <span className="text-black text-body-bold">0203943843</span> to <br/>
                    verify that it is you
                </p>
                <form onSubmit={handleFormSubmit}>
                    <div className="mt-4">
                        <Otp value={otp} onChange={handleInputChange}/>
                    </div>
                    <div className="flex justify-between mt-6 align-middle">
                        <a href="/" style={{lineHeight: "48px"}}>Resend Code</a>
                        <button 
                            type="submit"
                            value="Submit"
                            className="h-11 bg-black-pearl rounded-full 
                            text-yellow px-6 text-body-bold">
                            Verify
                        </button>
                    </div>
                </form>
                <img src={illustration} alt="illustration" style={{marginTop: "4.25rem"}}/>
            </div>
        </section>
    </main>
    </>
}