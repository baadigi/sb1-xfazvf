import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">BaaDigi</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              221 Main Street, Unit P<br />
              Huntington Beach, CA 92648
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Phone: (714) 707-2483
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  SEO & Content
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  PPC & Ads
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/daas" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Data as a Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/home-services" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Home Services
                </Link>
              </li>
              <li>
                <Link href="/industries/small-business" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Small Business
                </Link>
              </li>
              <li>
                <Link href="/industries/construction" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/industries/professional-services" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} BaaDigi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;