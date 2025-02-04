import React, { useState } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { firstName, lastName, email, message };

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
      });
      console.log("request sent")
      const data = await response.json();
      if (data.success) {
        console.log("Success")
      } else {
        console.log("failed")
      }
    } catch (error) {
      console.error(error)
    }
  };


  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
        <div className="max-w-7xl w-full grid  grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Customer Support Section */}
          <div className="flex flex-col  justify-center items-center gap-6">
            <h2 className="text-3xl font-bold text-slate-800">Customer Support</h2>
            <ul className="text-gray-600 space-y-2">
              <li>📞 Available: Monday to Saturday (9:00 AM - 2:00 AM)</li>
              <li>📞 Sunday (12:00 PM - 12:00 AM)</li>
            </ul>
            <p className="text-gray-600">
              Need help? Reach out to us during the hours above. We're here to assist!
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
            <h1 className="text-2xl font-bold text-slate-900 text-center mb-6">
              Contact Us
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Have questions or feedback? Let us know below!
            </p>
            <form className="space-y-6">
              {/* First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Write your message..."
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-amber-800 transition duration-300"
                onClick={(e)=>handleSubmit(e)}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
