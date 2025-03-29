export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white py-10">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Top Section: Logo and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-gray-700  mb-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="B-Zea Logo" className="h-12 mb-4" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm">Copyright © 2025 | B-Zea Teams. All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="YouTube">
              <img src="/icons/youtube.svg" alt="YouTube" className="h-6" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Links and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-80 text-center md:text-left">
            <div>
              <h3 className="font-lato font-semibold text-2xl mb-2">Hỗ trợ khách hàng</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Chính sách chung
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-lato font-semibold text-2xl mb-2">Về chúng tôi</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    B-Zea Market
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tuyển dụng
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-lato font-semibold text-2xl mb-2">Liên hệ góp ý</h3>
              <ul className="space-y-1">
                <li>
                  <a href="mailto:example@example.com" className="hover:underline">
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:12345678" className="hover:underline">
                    Hotline
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    113
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  );
}