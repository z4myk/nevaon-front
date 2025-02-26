import React from 'react'
import { Characteristics } from './Characteristics'
import { Faq } from './Faq'
import { Header } from './Header'
import { HeaderPlans } from './HeaderPlans'
import { Information } from './Information'

export const HomePage = () => {
    return (
        <>
        <Header />  
        <HeaderPlans />
        <Characteristics />
        <Information />
        <Faq />
        </>
    )
}
