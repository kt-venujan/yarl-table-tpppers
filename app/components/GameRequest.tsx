"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { GOLD } from "./tokens";

interface GameRequestProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GameRequest({ isOpen, onClose }: GameRequestProps) {
  const [gameName, setGameName] = useState("");
  const [gameMessage, setGameMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Google Form Config Details (using correct /formResponse endpoint)
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSespIqhaloOWOoTd5fOmxO6_mzsxd35y3kvwNTmPHScmQnzbw/formResponse";
  const GAME_NAME_ENTRY_ID = "entry.1927271872"; 
  const MESSAGE_ENTRY_ID = "entry.667718197";    

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append(GAME_NAME_ENTRY_ID, gameName);
    params.append(MESSAGE_ENTRY_ID, gameMessage);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // Crucial: Prevents CORS errors from blocking submission
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      setSubmitted(true);
      setGameName("");
      setGameMessage("");
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset submission state after modal finishes exit animation
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Request a Game">
      {submitted ? (
        <div className="text-center py-6">
          <div className="text-4xl mb-3">🎲</div>
          <p className="text-white font-bold text-lg mb-1">Request Submitted!</p>
          <p className="text-gray-400 text-sm">We&apos;ll try our best to bring it.</p>
        </div>
      ) : (
        <form onSubmit={handleRequestSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Game Name</label>
            <input
              type="text"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
              placeholder="e.g. Wingspan, Azul, Codenames..."
              required
              className="w-full rounded-lg border border-gray-800 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Message (optional)</label>
            <textarea
              value={gameMessage}
              onChange={(e) => setGameMessage(e.target.value)}
              placeholder="Tell us why you want this game..."
              rows={3}
              className="w-full rounded-lg border border-gray-800 bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg py-3 text-sm font-bold text-black transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: `linear-gradient(135deg, ${GOLD}, #FFD166)` }}
          >
            Submit Request
          </button>
        </form>
      )}
    </Modal>
  );
}
