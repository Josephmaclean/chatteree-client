import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import logo from '../../assets/images/svg/logo.svg'
import Input from '../../components/input/Input';
import styles from './CreateId.module.scss'


export default function CreateId() {
    const [id, setId] = useState("")

    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        setId(event.currentTarget.value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        window.location.href = "/setup-profile"
    }
    return <>
    <main className="flex justify-center">
        <section className={styles.container}>
            <img src={logo} alt="logo"/>
            <h1 className="text-heading mt-6">
                A Chatteree ID cos you are special
            </h1>
            <p className="mt-4 text-body-regular text-oslo-gray block">
                People will be able to find you with your unique ID
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className="text-subtext text-oslo-gray block mb-1 mt-10">
                    Chatteree ID
                </label>
                <Input 
                    id="chattereeId"
                    value={id}
                    onChange={handleInputChange} />
                {/* <p className="text-body-bold mt-8">Suggestions</p> */}
                <button 
                    type="submit"
                    value="Submit"
                    className="h-11 bg-black-pearl rounded-full 
                    text-yellow px-6 text-body-bold float-right mt-6">
                    Continue
                </button>
                
            </form>
        </section>
    </main>
    </>
}