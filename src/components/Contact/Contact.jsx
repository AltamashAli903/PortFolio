const Contact = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Contact Me
        </h2>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">

          {/* Intro */}
          <p className="text-gray-600 text-center">
            Feel free to reach out for opportunities, collaborations, or just a tech discussion.
          </p>

          {/* Info Grid */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Phone */}
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <a
                className="text-emerald-600 font-semibold hover:underline"
              >
                +91 9834588923
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <a
                href="mailto:sayyadaltamash26@gmail.com"
                className="text-emerald-600 font-semibold hover:underline break-all"
              >
                sayyadaltamash26@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="text-gray-800 font-medium">
                Nagpur, Maharashtra
              </p>
            </div>

            {/* Availability */}
            <div>
              <p className="text-gray-500 text-sm">Availability</p>
              <p className="text-emerald-600 font-medium">
                Open to opportunities
              </p>
            </div>

          </div>

          {/* Work Preference */}
          <div>
            <p className="text-gray-500 text-sm">Work Preference</p>
            <p className="text-gray-700">
              Open to Full-time Job Role, Mainly Focusing On Node Backend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="border-t pt-6">
            <p className="text-gray-500 text-sm mb-3 text-center">
              Connect with me
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/altamashali903"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600 font-medium"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sayyadaltamash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600 font-medium"
              >
                LinkedIn
              </a>
              <a
                href=" https://altamashali903.github.io/PortFolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600 font-medium"
              >
                Portfolio
              </a>
              
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 mt-8">
          Let’s build something impactful 🚀
        </p>

      </div>
    </section>
  );
};

export default Contact;