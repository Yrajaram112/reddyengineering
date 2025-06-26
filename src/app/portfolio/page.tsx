import PortfolioGallery from '@/components/Portfolio'
import { Metadata } from 'next';
import React from 'react'

// Change the Founder Page

export const metadata: Metadata = {
  title: "Portfolio | Reedy Engineering",
  description: "Innovative engineering solutions for a sustainable future",
};
const PortfolioPage = () => {
    return (
        <>
            <PortfolioGallery />
        </>
    )
}

export default PortfolioPage