import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">Animal Welfare</h2>
            <nav className="mt-2">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-green-400 transition">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">Animals</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">Resources</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-white">Developed By</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-800 p-4 rounded-lg shadow-lg">
              <h4 className="font-semibold text-white">Mitanshu Bansal</h4>
              <p className="text-gray-300">Roll No: 2310991398</p>
              <p className="text-gray-400">mitanshu1398.be23@chitkara.edu.in</p>
            </div>
            <div className="bg-green-800 p-4 rounded-lg shadow-lg">
              <h4 className="font-semibold text-white">Jitesh Jain</h4>
              <p className="text-gray-300">Roll No: 2310990535</p>
              <p className="text-gray-400">jitesh0535.be23@chitkara.edu.in</p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} Animal Welfare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
