import React from 'react'
import error from '../../assets/error.png'
export const Error404 = () => {
    return (
        <div className="container text-center">
            <h1 className="mb-4 mt-5">En desarrollo, próximamente...</h1>
            <img src={error}  className="w-25 mb-5" alt="Error"/>
        </div>
    )
}
