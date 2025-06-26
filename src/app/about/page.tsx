import AboutSectionOne from '@/components/About/AboutUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About Us | Reedy Engineering",
  description: "Innovative engineering solutions for a sustainable future",
};

const About = () => {
  return (
    <>
    <AboutSectionOne/>
    </>
  )
}

export default About