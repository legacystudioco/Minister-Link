import { Heart, Mic, Church, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Mic className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-bold">FaithCast</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Connecting churches with inspiring speakers to advance God's kingdom through powerful preaching and teaching. Every sermon, every revival, every conference is an opportunity to transform lives.
            </p>
            
            <div className="flex items-center gap-2 text-secondary">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Built with faith for the body of Christ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  For Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                  <Church className="w-4 h-4" />
                  For Churches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Community Guidelines</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary" />
              <div>
                <div className="font-medium">Email Us</div>
                <div className="text-sm text-primary-foreground/80">hello@faithcast.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary" />
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-sm text-primary-foreground/80">(555) 123-FAITH</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <div>
                <div className="font-medium">Ministry HQ</div>
                <div className="text-sm text-primary-foreground/80">Nashville, TN</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/80">
            © {currentYear} FaithCast. All rights reserved. Advancing God's kingdom through connected ministry.
          </div>
          
          <div className="text-sm text-primary-foreground/80">
            <span className="text-secondary">"Go into all the world and preach the gospel."</span> - Mark 16:15
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;