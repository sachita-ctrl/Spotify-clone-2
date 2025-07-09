import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentSong } from './redux/features/playerSlice';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Player from './components/Player';
import SongList from './components/SongList'; // ✅ Add this

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(setCurrentSong({
    title: "Love Me Like You Do",
    artist: "Ellie Goulding",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ellie_Goulding_2015.jpg/440px-Ellie_Goulding_2015.jpg"
  }));
}, [dispatch]);



  return (
  <div className="relative h-screen w-full overflow-hidden text-white">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-black animate-gradient-xy z-0"></div>

    {/* Foreground Content */}
    <div className="relative z-10 flex h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6">Spotify 2.0 🎧</h1>
          <SongList />
        </div>
      </div>
      <Player />
    </div>
  </div>
);

}

export default App;
