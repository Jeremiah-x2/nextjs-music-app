"use client";
import { PlayIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const audioContext = new AudioContext();

export default function Player() {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );
  const [playBtn, setPlayBtn] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    const audioEl = document.querySelector("audio");
    const playBtnEl = document.getElementById("play");

    if (audioEl && playBtnEl) {
      setAudioElement(audioEl as HTMLAudioElement);
      setPlayBtn(playBtnEl as HTMLButtonElement);
      const track = audioContext.createMediaElementSource(
        audioEl as HTMLAudioElement
      );
      track.connect(audioContext.destination);
    }
  }, []);

  const handlePlayPause = () => {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    if (playBtn?.dataset.playing === "false") {
      audioElement?.play();
      playBtn.dataset.playing = "true";
    } else if (playBtn?.dataset.playing === "true") {
      audioElement?.pause();
      playBtn.dataset.playing = "false";
    }
  };

  return (
    <div className="bg-red-400 mt-20 w-full h-20 text-green">
      <audio src="https://p.scdn.co/mp3-preview/2bc0706ec4320df7bb3757fbb6ea69ee7e8f1eb6?cid=6e7a3fb75ab5473eb99c56967b17c660" />
      <button
        data-playing="false"
        role="switch"
        aria-checked="false"
        id="play"
        onClick={handlePlayPause}
      >
        <PlayIcon className="w-6 h-6" />
        <span>Play/Pause</span>
      </button>
    </div>
  );
}
