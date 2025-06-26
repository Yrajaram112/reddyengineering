import Services from '@/components/Service'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Services | Reedy Engineering",
  description: "Innovative engineering solutions for a sustainable future",
};

const ServicePage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[120px]">
        <Services />
      </section>
    </>
  )
}

export default ServicePage