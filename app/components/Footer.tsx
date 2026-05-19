import { RED } from "./tokens";

export function Footer() {
  return (
    <footer
      className="border-t border-gray-900 py-10 text-center"
      role="contentinfo"
    >
      <p className="text-sm text-gray-600">
        Made by{" "}
        <span className="text-gray-400 font-medium">Rispit</span> with{" "}
        <span style={{ color: RED }}>♥</span> for the{" "}
        <span className="text-gray-400 font-medium">Yarl Table Toppers</span>.
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/yarltabletop/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yarl Table Toppers on Instagram"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 9.5zM18.5 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
          </svg>
        </a>
      </div>
      <p className="mt-2 text-xs text-gray-700">
        © {new Date().getFullYear()} Yarl Table Toppers · Jaffna, Sri Lanka
      </p>
    </footer>
  );
}
