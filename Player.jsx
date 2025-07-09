import { useSelector, useDispatch } from "react-redux";
import { playPause } from "../redux/features/playerSlice";
import { useEffect, useRef } from "react";

const Player = () => {
  const dispatch = useDispatch();
  const { currentSong, isPlaying } = useSelector((state) => state.player);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log("Audio error:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  if (!currentSong || !currentSong.url) return null;

  return (
    <>
      {/* Blur Background Cover */}
      <div
        className="fixed bottom-0 left-0 w-full h-28 blur-md opacity-30 z-0"
        style={{
          backgroundImage: `url(${currentSong.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Foreground Player Card */}
      <div
        className="fixed bottom-0 left-0 w-full flex items-center justify-between p-4 z-10 backdrop-blur-md bg-white/10 border-t border-white/20 shadow-xl"
      >
        <div className="flex items-center gap-4">
          <img
  src={currentSong.cover || "https://via.placeholder.com/64x64.png?text=No+Image"}
  onError={(e) => e.target.src = "https://via.placeholder.com/64x64.png?text=Error"}
  alt="cover"
  className="w-16 h-16 object-cover rounded-md shadow-md"
/>
          <div>
            <h3 className="text-lg font-semibold text-white">{currentSong.title}</h3>
            <p className="text-sm text-gray-300">{currentSong.artist}</p>
          </div>
        </div>

        <button
          onClick={() => dispatch(playPause(!isPlaying))}
          className="text-xl bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          {isPlaying ? "⏸ Pause" : "▶️ Play"}
        </button>

        <audio ref={audioRef} src={currentSong.url} />
      </div>
    </>
  );
};

export default Player;
