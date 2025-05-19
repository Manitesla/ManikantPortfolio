import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import profileImage from "../assets/robot.png"; // adjust path based on your file structure


type IconKey = 'facebook' | 'whatsapp' | 'instagram';

const icons: { [key in IconKey]: JSX.Element } = {
  facebook: <Facebook />,
  whatsapp: <MessageCircle />,
  instagram: <Instagram />,
};

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = form;
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current = { name: false, email: false, message: false };

    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
    } else {
      nameError.classList.add("hidden");
      current.name = true;
    }

    const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError.classList.remove("hidden");
    } else {
      emailError.classList.add("hidden");
      current.email = true;
    }

    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
    } else {
      messageError.classList.add("hidden");
      current.message = true;
    }

    return Object.values(current).every(Boolean);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const mailtoLink = `mailto:manisavadatti@gmail.com?subject=Contact Form Submission from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.location.href = mailtoLink;

    toast.success("Thanks for contacting me. Your email client will open shortly.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <SectionWrapper idName="contact">
      <motion.div variants={slideIn("up", "tween", 0.1, 1)}>
        <p className={`${styles.sectionSubText} text-center text-gray-400`}>
          Feel free to reach out
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Contact Me
        </h2>
      </motion.div>

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.5] bg-[#1a1a1a] p-8 rounded-[25px] shadow-[10px_10px_30px_#121212,_-10px_-10px_30px_#222]"
        >
          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: "facebook", url: "https://facebook.com" },
              { icon: "whatsapp", url: "https://whatsapp.com" },
              { icon: "instagram", url: "https://instagram.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-full shadow-[6px_6px_12px_#121212,_-6px_-6px_12px_#222] hover:shadow-[inset_4px_4px_6px_#121212,_inset_-4px_-4px_6px_#222] transition-all duration-200"
              >
                {icons[item.icon as IconKey]}
              </a>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-[16px] overflow-hidden"
          >
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={loading}
                className="bg-[#1a1a1a] py-3 px-5 placeholder:text-gray-500 text-white rounded-[16px] outline-none shadow-[inset_6px_6px_10px_#121212,_inset_-6px_-6px_10px_#222] font-medium transition-all duration-200"
              />
              <span className="text-red-500 mt-2 hidden" id="name-error">
                Invalid Name!
              </span>
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                disabled={loading}
                className="bg-[#1a1a1a] py-3 px-5 placeholder:text-gray-500 text-white rounded-[16px] outline-none shadow-[inset_6px_6px_10px_#121212,_inset_-6px_-6px_10px_#222] font-medium transition-all duration-200"
              />
              <span className="text-red-500 mt-2 hidden" id="email-error">
                Invalid E-mail!
              </span>
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <textarea
                rows={5}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                disabled={loading}
                className="bg-[#1a1a1a] py-3 px-5 placeholder:text-gray-500 text-white rounded-[16px] outline-none shadow-[inset_6px_6px_10px_#121212,_inset_-6px_-6px_10px_#222] font-medium resize-none transition-all duration-200"
              />
              <span className="text-red-500 mt-2 hidden" id="message-error">
                Invalid Message!
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="mt-4 py-3 px-8 rounded-[16px] bg-[#1a1a1a] text-white font-semibold shadow-[6px_6px_12px_#121212,_-6px_-6px_12px_#222] hover:shadow-[inset_4px_4px_6px_#121212,_inset_-4px_-4px_6px_#222] transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Image Section */}
      <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className="flex-[0.5] flex justify-center items-center ml-6" // 👈 Add margin-left here
>
  <img
    src={profileImage}
    alt="Contact Illustration"
    className="w-full h-auto max-w-md rounded-[25px] shadow-[10px_10px_30px_#121212,_-10px_-10px_30px_#222]"
  />
</motion.div>

      </div>
    </SectionWrapper>
  );
};
