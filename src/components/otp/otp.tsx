import { debug } from 'console';
import React, { useEffect, useState, createRef } from 'react';
import style from './otp.module.scss';

interface otpProps {
    value: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

// function singleInput() {

// }

export default function Otp(props: otpProps) {
    const [data, setData] = useState("");

    const textInput1 = createRef<HTMLInputElement>();
    const textInput2 = createRef<HTMLInputElement>();
    const textInput3 = createRef<HTMLInputElement>();
    const textInput4 = createRef<HTMLInputElement>();
    const textInput5 = createRef<HTMLInputElement>();
    const textInput6 = createRef<HTMLInputElement>();

    // useMemo(() => function, input)
    const refArray = [
        textInput1, textInput2, textInput3, textInput4, textInput5, textInput6
    ]

    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        

        const val = (event.currentTarget.value as string)
        if (data.length < 6) {
            setData(data.concat(val))
        }
        let newEvent = event
        newEvent.currentTarget.value = data
        props.onChange(newEvent)
    }
    
    function handleKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Backspace") {
            // debugger
            setData(data.slice(0, -1))

        }
    }

    useEffect(() => {
        if (data.length < 6) {
            refArray[data.length].current?.focus()
        }
    }, [data, refArray])

    

    const inputs = []

    for (let i = 0; i< 6; i++) {
        inputs.push(
            <input
            key={i} 
            // type="text" 
            className=" h-16 bg-fade w-14 rounded-md outline-none text-center" 
            value={data[i] || ''}
            onChange={handleInputChange}
            ref = {refArray[i]}
            onKeyDown={handleKeyDown}
        />
        )
    }


    return <>
    <div className={style.otp}>
        <div className="flex justify-between">
            {
                inputs
            }
        </div>
    </div>
    </>
}


// interface otpProps {
//     value: string;
//     onChange: (event: React.FormEvent<HTMLInputElement>) => void
// }

interface inputProps {
    value: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
    onKeyDown: (event: React.KeyboardEvent) => void
}

function SingleInput(props: inputProps) {

    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        props.onChange(event)
    }

    function handleKeyDown(event: React.KeyboardEvent) {
        props.onKeyDown(event)
    }
    return (
        <input
        type="text" 
        className=" h-16 bg-fade w-14" 
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
    />
    )
}