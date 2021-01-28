import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import doodle from '../../assets/images/svg/login doodle.svg'
import logo from '../../assets/images/svg/logo.svg'
import Input from '../../components/input/Input';
import styles from './Signup.module.scss';

export default function Signup() {
    const [phoneNumber, editPhoneNumber] = useState("")
    const history = useHistory()

    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        editPhoneNumber(event.currentTarget.value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // debugger
        event.preventDefault()
        history.push("/confirm-number")
    }
    return (
        <>
        <main className="flex justify-center">
            <section className="left pt-36 mr-30">
                <img src={doodle} alt="login doodle"/>
            </section>
            <section className={styles.right}>
                <form className="mt-56" onSubmit={handleSubmit}>
                    <img src={logo} alt="logo"/>
                    <h1 className="text-heading mt-6">
                        Howdy chatter! Your 
                        peeps are waiting
                    </h1>
                    <p className="mt-4 text-body-regular text-oslo-gray">Enter your mobile number to start chatting</p>
                    <label 
                        htmlFor="mobileNumber" 
                        className="text-subtext text-oslo-gray mt-10 block mb-1">
                        Mobile Number
                    </label>
                    <Input 
                        id="mobileNumber" 
                        onChange={handleInputChange} 
                        value={phoneNumber}
                    />
                    <button 
                        type="submit"
                        value = "Submit"
                        className="h-11 bg-black-pearl float-right rounded-full 
                        text-yellow px-6 mt-6 text-body-bold">
                        Next
                    </button>
                </form>
            </section>
        </main>
        </>
    )
}