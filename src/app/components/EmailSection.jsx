"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";

const EmailSection = () => {

		const form = useRef();

		const sendEmail = (e) => {
			e.preventDefault(); 

			console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
	
			emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
					form.current, 
					{ publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID}
				)
			.then(
				(result) => {
					console.log('SUCCESS!', result.text);
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
		};	

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
			<div className="absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to transparent blur-lg rounded-full h-80 w-80 z-0"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Let's Connect
				</h5>
					<p className="text-[#ADB7BE] mb-4 max-w-md">
						{" "}
						I'm currently looking for new opportunities, my inbox is always open.
						Whether you have a question or just want to say hi, I'll try my best
						to get back to you!
					</p>
					<div className="socials flex flex-row gap-6">
						<Link href="https://github.com/IanTsung1999" style={{ filter: "invert(100%) brightness(2)" }}>
							<Image 
								src={GithubIcon}
								alt="github icon"
								width={25}
								height={25}
							/>
						</Link>
						<Link href="https://www.linkedin.com/in/zhaoyancong/">
							<Image 
								src={LinkedInIcon}
								alt="linkedin icon"
								width={25}
								height={25}
							/>
						</Link>
					</div>
			</div>
			<div>
				<form ref={form} onSubmit={sendEmail} className="flex flex-col">
					<div className="mb-6">
						<label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
							Your Name
						</label>
						<input
							type="text"
							name="from_name"
							id="name"
							placeholder="John Doe"
							className="block w-full p-2.5 text-gray-100 text-sm rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
							Your Email
						</label>
						<input
							type="email"
							name="from_email"
							id="email"
							placeholder="JohnDoe@abc.com"
							className="block w-full p-2.5 text-gray-100 text-sm rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							placeholder="Just to say hi"
							className="block w-full p-2.5 text-gray-100 text-sm rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
						/>
					</div>
					<div className="mb-12">
						<label 
							htmlFor="message"
							className="text-white block text-sm mb-2 font-medium"
						>
							Message
						</label>
						<textarea 
							name="message" 
							id="message" 
							rows={5}
							className="block w-full p-2.5 text-gray-100 text-sm rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]"
							placeholder="Hi Ian, I'd like to talk about..."
						/>
					</div>
					<button
						type="submit"
						className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>
				</form>
			</div>
    </section>
  )
}

export default EmailSection