import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/home/Footer'
import { HomePage } from '../components/home/HomePage'
import {Navbar} from '../components/Navbar/Navbar'
import { Error404 } from '../components/pages/Error404'
import { LegalNotice } from '../components/pages/LegalNotice'
import { Privacy } from '../components/pages/Privacy'
import { PrivacyMain } from '../components/pages/PrivacyMain'
import { TermsAndConditions } from '../components/pages/TermsAndConditions'
import { VirtualDesktop } from '../components/pages/VirtualDesktop'
import { Vps } from '../components/pages/Vps'
import { WebHosting } from '../components/pages/WebHosting'

export const AppRouter = () => {
    return (
        <>
        <Navbar />
              <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webhosting" element={<WebHosting />} />
        <Route path="/vps" element={<Vps />} />
        <Route path="/virtual-desktops" element={<VirtualDesktop />} />
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/privacy-main" element={<PrivacyMain />}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
        <Route path="/legal-notice" element={<LegalNotice />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
      <Footer />
        </>
    )
}
