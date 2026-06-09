import { RED, GOLD } from "./tokens";

const FOOTER_LINKS = [
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "Games", href: "/games" },
  { label: "Shop", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-900 py-10" role="contentinfo">
      {/* Nav links */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
        {FOOTER_LINKS.map((link) => (
          <a key={link.label} href={link.href}
            className="text-xs text-gray-500 transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-600 text-center">
        Made by{" "}
        <span className="text-gray-400 font-medium">Rispit</span> with{" "}
        <span style={{ color: RED }}>♥</span> for the{" "}
        <span className="text-gray-400 font-medium">Yarl Table Toppers</span>.
      </p>
      
      <p className="mt-2 text-xs text-gray-700 text-center">
        © {new Date().getFullYear()} Yarl Table Toppers · Jaffna, Sri Lanka
      </p>
    </footer>
  );
}
