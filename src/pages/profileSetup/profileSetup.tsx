import React, { useState } from 'react';
import logo from '../../assets/images/svg/logo.svg'
import image from '../../assets/images/svg/image.svg'
import profilePlaceholder from '../../assets/images/svg/profile_placeholder.svg'
import styles from './profileSetup.module.scss'
import Input from '../../components/input/Input';


export default function ProfileSetup() {
    const [name, setName] = useState("")
    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value)
    }

    return <>
    <main className="flex justify-center">
        <section className="mt-36">
        <img src={logo} alt="logo" className="text-center mx-auto"/>
        <form action="">
        <h1 className="text-heading mt-6 text-center">
            Help them identify you
        </h1>
        <div className="relative">
            <div className="border border-gray-200 h-60 w-60 rounded-full mx-auto mt-10 p-4 relative">
                <div className="h-full w-full rounded-full">
                    <img src={profilePlaceholder} alt=""/>
                </div>
            </div>
            <label htmlFor="file" className={styles.profilePhotoLabel}>
                    <input type="file" name="file" id="file" className={styles.inputfile}/>
                    <div className=" -left-1/2 relative">
                        <div className="round-button rounded-full flex bg-white text-center justify-between shadow-md px-5 py-3">
                              <img src={image} alt=""/>
                            <p className="text-body-bold text-black">
                            upload photo
                            </p>
                        </div>
                    </div>
                </label>
        </div>
        <label 
                        htmlFor="mobileNumber" 
                        className="text-subtext text-oslo-gray mt-10 block mb-1">
                        Your name
                    </label>
                    <Input 
                        id="mobileNumber" 
                        onChange={handleInputChange} 
                        value={name}
                    />
        </form>

        </section>
    </main>
    </>
}