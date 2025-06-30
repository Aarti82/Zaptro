import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <div className="min-h-screen  bg-gray-100 py-10 sm:px-6 lg:px-20 ">
            <div className="bg-white shadow-lg max-w-5xl mx-auto p-8 space-y-8 rounded-2xl ">
               <h1 className="text-4xl font-bold text-center"> About Zaptro</h1>
               <p> Welcome  to <span className="text-red-500 font-semibold">Zaptro</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.</p>

               <div className="space-y-6">
                <h2 className="text-red-500 font-bold text-2xl">Our Mission</h2>
                <p className="text-gray-700 text-base">At Zaptro, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.</p>
            </div>
            <div className="space-y-6">
             <h2 className="text-red-600 text-2xl font-semibold">  Why Choose Zeptro? </h2>
             <ul className="list-disc pl-6 text-gray-700 space-y-2 ">
                <li>Top-quality electronic products from trusted brands</li>
                <li>Lightning-fast and secure shipping</li>
                <li>Reliable customer support, always ready to help</li>
                <li>Easy returns and hassle-free shopping experienc</li>
             </ul>
            </div>
            <div className="space-y-6">
                <h2 className="text-red-600 text-2xl font-semibold">Our Vision</h2>
                <p className="text-gray-700 text-base">We envision a future where technology elevates everyday life. At Zaptro, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>
            </div>
            <div className="text-center mt-10"> 
                <h2 className="text-red-600 font-semibold text-2xl mb-2"> Join the Zaptro Family</h2>
                <p className="text-gray-700 mb-4 ">Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.</p>
               <Link to={'/product'}>
                <button className=" rounded-xl bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition duration-300">Start Shopping</button></Link>
           </div>
            </div>
            
        </div>
    );
}

export default About;