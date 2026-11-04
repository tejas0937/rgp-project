
import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917083477803"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us"
      >
        <MessageCircle size={25} strokeWidth={2.2} />
      </a>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`floating-scroll-top ${
          showScrollTop ? "visible" : ""
        }`}
        aria-label="Scroll to top"
        title="Back to top"
        tabIndex={showScrollTop ? 0 : -1}
      >
        <ArrowUp size={22} strokeWidth={2.3} />
      </button>

    </div>
  );
}
