"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
					toast.success("Thank you for reaching out!", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					console.log('SUCCESS!', result.text);
				},
				(error) => {
					toast.error("An error occurred sending your message, please try again", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					console.log('FAILED...', error.text);
				}
			);
		};	

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
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
		<div className="z-10">
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
					className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
				>
					Send Message
				</button>
			</form>
		</div>
		<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={true}
			newestOnTop={true}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
		/>
    </section>
  )
}

export default EmailSection