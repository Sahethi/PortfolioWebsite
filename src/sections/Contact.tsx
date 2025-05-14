import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div id="contact" className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden'>
          {/* Background with lower z-index */}
          <div
            className='absolute inset-0 opacity-5 z-10'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          
          {/* Content with higher z-index */}
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-20'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Contact Me</h2>
              <p className='text-sm md:text-base mt-2'>
                Feel free to reach out for collaborations, inquiries, or to connect. I'd love to hear from you!
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <a 
                href="https://www.linkedin.com/in/sahethi-depuru-guru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors'
              >
                <span className='font-semibold'>LinkedIn</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a 
                href="https://github.com/Sahethi" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors'
              >
                <span className='font-semibold'>GitHub</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a 
                href="mailto:dgsahethi@gmail.com" 
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors'
              >
                <span className='font-semibold'>Email</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};