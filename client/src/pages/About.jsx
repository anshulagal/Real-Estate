import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About <span className='text-blue-700 font-bold'>Sparsh Realtors</span></h1>
      <p className='mb-4 text-slate-700'>
        Sparsh Realtors is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
      </p>
      <p className='mb-4 text-slate-700'>
        Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>

      <hr className='border-gray-300 my-8 ' />

      
      <div className='py-10 mt-50'>
        <div className='max-w-prose mx-auto'>
          <h1 className='text-2xl font-bold mb-4 text-gray-800'>
            Get to <b>know</b> me!
          </h1>
          <p className='mb-4 text-slate-700'>
            Hi, my name is{' '}
            <a href="https://www.linkedin.com/in/sparsh-dusad-13b0b3170" target='_blank' className='text-blue-800'>
              <b>Sparsh Dusad</b>
            </a>{' '}
            and I am from Jaipur, India. I'm an{' '}
            <b>aspiring Software developer and Full Stack Engineer</b> and a pre-final year college student pursuing{' '}
            <b>BTech in ECE </b> from <b>NIT, Kurukshetra</b>. <br /><br />
            I love to create original projects with beautiful designs. You can check out some of my work in the projects section.
            <br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me; links are in the footer.
          </p>
        </div>
      </div>
      
      {/* Visible divider */}
      
    </div>
  );
}
