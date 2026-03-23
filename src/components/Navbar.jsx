import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // 🔥 SMART NAVIGATION FUNCTION
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // wait for page render
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + window.innerHeight * 0.35;

          setScrolled(window.scrollY > 20);

          let current = "home";

          for (let i = 0; i < links.length; i++) {
            const section = document.getElementById(links[i].id);
            if (section) {
              const top = section.offsetTop;
              const height = section.offsetHeight;

              if (scrollPos >= top && scrollPos < top + height) {
                current = links[i].id;
                break;
              }
            }
          }

          setActive(current);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo → always go home */}
        <Link to="/" className="text-xl font-semibold tracking-wide text-white">
          Apexcify<span className="text-green-400">.</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative capitalize transition-colors duration-300 cursor-pointer
                  ${active === link.id ? "text-green-400" : "text-gray-300 hover:text-white"}`}
              >
                {link.label}

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-green-400 transition-all duration-300
                  ${active === link.id ? "w-full opacity-100" : "w-0 opacity-0"}`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/auth"
          className="hidden md:block px-4 py-2 bg-green-500 text-black text-sm rounded-lg font-medium hover:bg-green-400 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
