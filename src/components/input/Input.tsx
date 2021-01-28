import React from 'react';
import  styles from './Input.module.scss'

interface inputProps { 
    value: string, 
    id: string,
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

export default function Input(props: inputProps) {
    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        props.onChange(event);
    }
    return <>
        <div className={styles.input}>
            <input type="text" 
                id = {props.id}
                value = {props.value} 
                onChange={handleInputChange}
                className="bg-fade px-4 w-full"/>
        </div>
    </>
}
