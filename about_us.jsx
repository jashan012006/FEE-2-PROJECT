import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // set page title same as original
    document.title = "About Us - Knowledge Barter";

    // dynamically load Tailwind CDN if it's not already present (keeps original code behavior)
    const id = "tailwind-cdn";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.src = "https://cdn.tailwindcss.com";
      script.id = id;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="font-sans"
      style={{
        backgroundImage: "url('bg.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-violet-600">
        <div className="text-white text-3xl font-bold tracking-wide">Knowledge Barter</div>
      </nav>

      {/* Hero / About Section */}
      <section className="bg-gradient-to-r from-violet-50 to-white pt-20 pb-12 text-center">
        <h1 className="text-4xl font-bold text-violet-600 mb-4 tracking-wide">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold">Knowledge Barter</span>, we believe in the power of skill sharing.
          Our mission is to create a platform where people can connect, teach, and learn from each other
          without the barrier of money. We are here to make learning more accessible, collaborative, and fun.
        </p>
      </section>

      <hr className="border-t-2 border-gray-200 my-12 max-w-4xl mx-auto" />

      {/* Mission Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white border-b-4 border-white-400 inline-block pb-1 tracking-wide">Our Mission</h2>
        <p className="text-black max-w-3xl mx-auto hover:text-white">
          We aim to connect learners and teachers from all walks of life, enabling them to exchange skills
          in a supportive and engaging environment. Whether you’re a coder, artist, language enthusiast,
          or musician Knowledge Barter gives you a place to share your passion and gain new ones.
        </p>
      </section>

      <hr className="border-t-2 border-gray-200 my-12 max-w-4xl mx-auto" />

      {/* Team Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-black mb-10 tracking-wide">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="bg-white rounded-lg p-6 shadow-md text-center group relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="https://ui-avatars.com/api/?name=Jashan+Mukheja&background=7c3aed&color=fff"
              className="w-24 h-24 mx-auto rounded-full border-4 border-violet-200 mb-4"
              alt="Jashan Mukheja"
            />
            <h3 className="text-xl font-semibold text-gray-900">Jashan Mukheja</h3>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center group relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="https://ui-avatars.com/api/?name=Bhimanshu+Singh&background=7c3aed&color=fff"
              className="w-24 h-24 mx-auto rounded-full border-4 border-violet-200 mb-4"
              alt="Bhimanshu Singh"
            />
            <h3 className="text-xl font-semibold text-gray-900">Bhimanshu Singh</h3>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center group relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="https://ui-avatars.com/api/?name=Aryan+Sanghi&background=7c3aed&color=fff"
              className="w-24 h-24 mx-auto rounded-full border-4 border-violet-200 mb-4"
              alt="Aryan Sanghi"
            />
            <h3 className="text-xl font-semibold text-gray-900">Aryan Sanghi</h3>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center group relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="https://ui-avatars.com/api/?name=Chirag+Khosla&background=7c3aed&color=fff"
              className="w-24 h-24 mx-auto rounded-full border-4 border-violet-200 mb-4"
              alt="Chirag Khosla"
            />
            <h3 className="text-xl font-semibold text-gray-900">Chirag Khosla</h3>
          </div>

        </div>
      </section>

      <hr className="border-t-2 border-gray-200 my-12 max-w-4xl mx-auto" />

      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white border-b-4 border-white inline-block pb-1 tracking-wide">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-600">

          <div>
            <div className="flex justify-center mb-2 text-black hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black hover:text-white transition">Collaboration</h3>
            <p className="text-black hover:text-white">We grow together by sharing skills and supporting each other.</p>
          </div>

          <div>
            <div className="flex justify-center mb-2 text-black hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black hover:text-white transition">Accessibility</h3>
            <p className="text-black hover:text-white">Learning should be open to everyone, regardless of background.</p>
          </div>

          <div>
            <div className="flex justify-center mb-2 text-black hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0-8l4 4m-4-4l-4 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black hover:text-white transition">Innovation</h3>
            <p className="text-black hover:text-white">We embrace creativity and new ways to connect learners worldwide.</p>
          </div>

        </div>
      </section>

      <hr className="border-t-2 border-gray-200 my-12 max-w-4xl mx-auto" />

      {/* Call-to-Action Section */}
      <section className="bg-violet-50 py-10 text-center">
        <h2 className="text-2xl font-bold text-violet-700 mb-4">Join Knowledge Barter Today!</h2>
        <a href="LOGIN_SIGNUP.HTML" className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition">
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-violet-700 to-violet-500 text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Knowledge Barter</h3>
            <p className="text-sm opacity-90">© 2025 All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline opacity-90 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100">Terms</a>
            <a href="#" className="hover:underline opacity-90 hover:opacity-100">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
