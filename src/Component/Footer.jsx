import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa6';
import logoImages from '../Images/logo.png'
import { LuInstagram } from 'react-icons/lu';
import { BiSolidRightArrow } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="bg-[#FFF7F1] py-10">
<footer className="footer p-10 w-9/12 mx-auto   text-base-content">
  <aside>
        <div className='w-44'>
            <img className='w-20 md:w-32' src={logoImages} alt="" />
        </div>
    <p className='font-semibold'>We can find you the perfect property <br />and help you locate the home of your dreams.
</p>
<div className='grid grid-cols-4 gap-2  my-2'>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">  <div className='text-xl text-green-500'> <FaFacebook /></div></a>

  <div className='text-xl  text-green-500'><FaTwitter /></div>
  <div className='text-xl  text-green-500'><LuInstagram /></div>
  <div className='text-xl  text-green-500'><FaPinterest /></div>
</div> 
  </aside> 
  <nav>
    <h6 className="footer-title flex items-center gap-2">  General Info</h6> 
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>About Us</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Our Propertys</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Our Agencis</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Our Agents</a>
  </nav> 
  <nav>
    <h6 className="footer-title flex items-center gap-2"> Quick Links</h6> 
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Blog/News</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Elements</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Pricing Table</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Contact Us</a>
  </nav> 
  <nav>
    <h6 className="footer-title flex items-center gap-2"> Contact</h6> 
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>+123 456 7890</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>+123 456 7899</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>info@yourdomain.com</a>
  </nav>
</footer>
<div>
  
</div>
            <div  className='w-9/12 mx-auto flex justify-center items-center border-t-2  font-semibold pt-10' >@ All Right Reserved By- EcekerSly</div>
        </div>
    );
};

export default Footer;