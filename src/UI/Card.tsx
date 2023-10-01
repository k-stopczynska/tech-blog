import React from 'react'

const Card = ({ title }: { title: string }) => {
  return (
      <section className="h-[300px] w-[300px] flex justify-center items-center rounded border-secondary-100 border-4 bg-secondary-200 hover:bg-secondary-100 hover:border-secondary-200 hover:scale-105 transition duration-[.6s] cursor-pointer"><h2>{title}</h2></section>
  )
}

export default Card