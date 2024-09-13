import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center md:justify-start mb-8">
          <Image
            src="/images/Logo.svg" alt={"Logo"}
            height={150}
            width={150} 
          />
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Screen Sharing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                iOS & Android Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                File Sharing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                info@teamapp.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                1-800-000-999
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold">Stay up to date</h3>
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md bg-gray-800 text-white mt-4 w-full"
          />
        </div>
      </div>
    </div>
  );
}
