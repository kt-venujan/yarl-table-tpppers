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
      <p className="mt-2 text-xs text-gray-700">
        © {new Date().getFullYear()} Yarl Table Toppers · Jaffna, Sri Lanka
      </p>
    </footer>
  );
}
