'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Show "Sending..." button state

    emailjs
      .sendForm(
        'service_fix5ra8', // Replace with your EmailJS service ID
        'template_9co5vkm', // Replace with your EmailJS template ID
        form.current, // Make sure form.current is valid
        'YP-HpdBFUIRdeIebd' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          setLoading(false);
          setMessageSent(true);
        },
        (error) => {
          console.error('Email send error:', error);
          alert(`Error: ${error.text || 'Something went wrong'}`);
          setLoading(false);
        }
      )
      .catch((error) => {
        console.error('Unexpected error:', error);
        alert('Unexpected error occurred. Please try again.');
        setLoading(false);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[56%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl text-purple-500">Let's Work Together!</h3>
              <p className="text-white/60">
                Feel free to contact me for any inquiries.
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  required
                  className="placeholder-white"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  required
                  className="placeholder-white"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="placeholder-white"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="placeholder-white"
                />
              </div>

              {/* Select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web_dev">Web Development</SelectItem>
                    <SelectItem value="backend_dev">
                      Back-End Development
                    </SelectItem>
                    <SelectItem value="game_dev">
                      Game Design & Development
                    </SelectItem>
                    <SelectItem value="qa_tester">Game QA Tester</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type Your Message Here."
                required
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="sm"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              {/* Success Message */}
              {messageSent && (
                <p className="text-green-500 mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: 'Phone',
                  description: '+66 61-336-2497',
                },
                {
                  icon: <FaEnvelope />,
                  title: 'Email',
                  description: 'nappdevdotx@gmail.com',
                },
                {
                  icon: <FaMapMarkedAlt />,
                  title: 'Address',
                  description: 'Bangkok, Thailand',
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#23232c] text-purple-700 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/80">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
