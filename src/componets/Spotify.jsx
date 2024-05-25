import React, { useEffect, useState } from "react";
import "./Spotify.css";
import Card from "./Card";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { LuLibrary } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
import { GrInstallOption } from "react-icons/gr";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const Spotify = () => {
  const [currentAudio, setCurrentAudio] = useState(null); // Holds the currently playing audio object.
  const [currentSongIndex, setCurrentSongIndex] = useState(null); // Holds the index of the current song.
  const [isPlaying, setIsPlaying] = useState(false); // Holds the playing state.
  const [time, setTime] = useState(0); // Holds the current time of the audio.
  const [duration, setDuration] = useState(0); // Holds the total duration of the audio.
  const [show, setshow] = useState(false);

  const songs = useSelector((state) => state.song.songs); // Select songs from the redux store.

  function ShowHide() {
    setshow(!show);
  }

  // Format seconds to MM:SS format.
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Update current time and duration.
  useEffect(() => {
    if (currentAudio) {
      const handleTimeUpdate = () => setTime(currentAudio.currentTime);
      const handleLoadedMetadata = () => setDuration(currentAudio.duration);

      currentAudio.addEventListener('timeupdate', handleTimeUpdate);
      currentAudio.addEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, [currentAudio]);

  // Play a new song.
  const playSong = (index) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(songs[index]);
    setCurrentAudio(audio);
    setCurrentSongIndex(index);
    setIsPlaying(true);
    audio.play();
  };

  // Toggle play, pause, play next song, and play previous song.
  const handlePlayPause = (direction = null) => {
    if (currentAudio) {
      if (direction === "next") {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        playSong(nextIndex);
      } else if (direction === "prev") {
        const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(prevIndex);
      } else if (isPlaying) {
        currentAudio.pause();
        setIsPlaying(false);
      } else {
        currentAudio.play();
        setIsPlaying(true);
      }
    } else if (songs.length > 0) {
      playSong(0);
    }
  };

  return (
    <div className="main flex h-screen md:w-screen p-5 gap-2 fixed right-0 left-0">
      <div className="container flex flex-col w-72 gap-2 z-50" id={show ? 'container' : 'active'}>
        <div className="box-left h-36 rounded-xl">
          <ol id="First-items" className="flex flex-col gap-3">
            <GiSplitCross className="cursor-pointer" onClick={ShowHide} />
            <li className="flex gap-4">
              <TiHome className="text-3xl" />
              <a href="#" className="text-xl">
                Home
              </a>
            </li>
            <li className="flex gap-4">
              <IoMdSearch className="text-3xl pt-px" />
              <a href="#" className="text-xl">
                Search
              </a>
            </li>
          </ol>
        </div>
        <div className="box-left-bottom rounded-xl p-6">
          <div className="playlist">
            <div className="icons flex text-xl gap-4">
              <LuLibrary className="mt-1" />
              <span className="">Your Library</span> <br />
            </div>
            <ul className="h-56">
              {songs.map((song, index) => (
                <li key={index} className="h-8 rounded-xl p-1">
                  <button onClick={() => playSong(index)}>
                    {song.split("/").pop()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="box-main rounded-xl">
        <div className="main">
          <div className="navBar flex justify-between rounded-t-xl fixed">
            <div className="nav flex h-14 rounded-t-xl md:pl-5 md:gap-2">
              <button className="burgur" id="burgur" onClick={ShowHide}>
                <RxHamburgerMenu className="bg-black rounded-full w-7 h-7 p-2" />
              </button>
              <button>
                <IoIosArrowBack className="bg-black rounded-full w-9 h-9 p-2" />
              </button>
              <button>
                <IoChevronForwardOutline className="bg-black rounded-full w-9 h-9 p-2" />
              </button>
            </div>
            <div className="otherAction flex md:gap-4 pr-20">
              <button className="bg-black rounded-full w-36 h-10 mt-2 p-1 font-bold text-sm">
                <a href="#"> Explore Premium</a>
              </button>
              <button className="bg-black rounded-full w-36 h-10 mt-2 p-1 font-bold text-sm">
                <a href="#" className="flex gap-2">
                  <GrInstallOption className="mt-1 ml-2" /> Install App
                </a>
              </button>
            </div>
          </div>
          <div className="playlist-body">
            <p className="text-2xl font-bold pt-20 pl-6">Made for you</p>
                  
                <div className="playlist w-full grid grid-cols-6 gap-4" id="playlist">
              {songs.map((song , index) => (
                <>
                <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix'/>  
                {/* <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix' />
                <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix' />
                <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix' />
                <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix' />
                <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix' />
                <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix' />
                <Card onClick={()=> playSong(index)} title={song.split('/').pop()} name='Romantic mix' /> */}
                </>
              ))}
                </div>
          </div>
        </div>
      </div>

      <div className="buttom rounded-2xl absolute bottom-1 left-0 ml-5 h-20 p-1 w-11/12" id="last">
        <div className="songInfo flex justify-around">
          {currentSongIndex !== null && <p>Now Playing: {songs[currentSongIndex].split("/").pop()}</p>}
          <div className="time">{formatTime(time)} / {formatTime(duration)}</div>
        </div>
        <div className="songTime border border-red-400 h-1 mt-2 relative">
          <div className="circle h-4 w-4 rounded-full bg-white absolute cursor-pointer" style={{ left: `${(time / duration) * 100}%` }}></div>
        </div>
        <div className="song-btn flex justify-center gap-4 text-2xl cursor-pointer pt-2">
          <BiSolidSkipPreviousCircle onClick={() => handlePlayPause("prev")} />
          {isPlaying ? (
            <i
              className="fa-solid fa-circle-pause text-green-500"
              onClick={() => handlePlayPause()}
            ></i>
          ) : (
            <i
              className="fa-solid fa-circle-play text-green-500"
              onClick={() => handlePlayPause()}
            ></i>
          )}
          <BiSolidSkipNextCircle onClick={() => handlePlayPause("next")} />
        </div>
      </div>
    </div>
  );
};

export default Spotify;
