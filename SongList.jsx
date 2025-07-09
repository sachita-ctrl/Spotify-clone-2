import { useDispatch } from "react-redux";
import { setCurrentSong, playPause } from "../redux/features/playerSlice";
import { useState } from "react";

// 🎵 Playlist-wise songs
const playlists = {
  Chill: [
    {
      title: "Love Me Like You Do",
      artist: "Ellie Goulding",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Instrumental Chill",
      artist: "Artist 2",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ],
  Workout: [
    {
      title: "Energy Boost",
      artist: "DJ Pump",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Hard Run",
      artist: "Beatz Pro",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ],
  Romance: [
    {
      title: "Soft Piano",
      artist: "Artist 3",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ],
};

const SongList = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [activePlaylist, setActivePlaylist] = useState("Chill");

  const handlePlay = (song) => {
    dispatch(setCurrentSong(song));
    dispatch(playPause(true));
  };

  const songs = playlists[activePlaylist] || [];

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 🎛️ Playlist Tabs */}
      <div className="flex gap-4 mb-4">
        {Object.keys(playlists).map((playlist) => (
          <button
            key={playlist}
            onClick={() => setActivePlaylist(playlist)}
            className={`px-4 py-2 rounded-full ${
              activePlaylist === playlist
                ? "bg-green-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {playlist}
          </button>
        ))}
      </div>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search songs or artists..."
        className="w-full mb-4 px-4 py-2 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🎵 Song Cards */}
      <div className="grid gap-4">
        {filteredSongs.map((song, index) => (
          <div
            key={index}
            onClick={() => handlePlay(song)}
            className="cursor-pointer p-4 rounded-lg bg-white/10 hover:bg-white/20 transition text-white shadow-md"
          >
            <h2 className="text-lg font-semibold">{song.title}</h2>
            <p className="text-sm text-gray-300">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
