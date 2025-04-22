'use client'; // Needed for useState and onClick events

import { useState } from 'react';// Although metadata is preferred in layout, can use Head here if needed
import GameCard from '@/components/GameCard'; // Adjust path if not using alias
import styles from '@/styles/Home.module.css'; // Adjust path if not using alias

// --- Game Data ---
const games = [
  {
    id: 'gold-miner',
    name: 'Gold Miner',
    description: 'Classic gold mining game. Collect gold and treasures!',
    // IMPORTANT: Replace with your actual image path
    imageUrl: '/images/dao-vang.jpg',
    gameUrl: 'https://xuan-cuong.github.io/Game-Dao-vang/'
  },
  {
    id: 'shooter',
    name: 'Shooter Game',
    description: 'A fun shooting game experience.',
    // IMPORTANT: Replace with your actual image path
    imageUrl: '/images/ban-sung.jpg',
    gameUrl: 'https://xuan-cuong.github.io/Game-Ban-Sung/'
  },
  {
    id: 'airplane',
    name: 'Airplane Game',
    description: 'Fly high in this exciting airplane adventure.',
    // IMPORTANT: Replace with your actual image path
    imageUrl: '/images/may-bay.jpg',
    gameUrl: 'https://xuan-cuong.github.io/Game-may-bay/'
  },
  // Add more games here if needed
];

export default function HomePage() {
  const [selectedGameUrl, setSelectedGameUrl] = useState(null); // State to hold the URL of the game to display

  const handlePlayClick = (url) => {
    setSelectedGameUrl(url);
    // Optional: Prevent background scrolling when game is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseGame = () => {
    setSelectedGameUrl(null);
    // Optional: Restore background scrolling
    document.body.style.overflow = '';
  };

  return (
    <div className={styles.container}>
      {/* Metadata is better handled in layout.js, but Head can be used here too */}
      {/* <Head>
         <title>My Game Portfolio</title>
         <meta name="description" content="Showcase of my games" />
         <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <h1 className={styles.title}>My Game Portfolio</h1>

      <div className={styles.gameGrid}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onPlayClick={handlePlayClick}
          />
        ))}
      </div>

      {/* Conditional Rendering for the Game Display */}
      {selectedGameUrl && (
        <div className={styles.gameOverlay}>
           <button className={styles.closeButton} onClick={handleCloseGame}>
             × {/* Close icon */}
           </button>
          <div className={styles.gameContainer}>
            <iframe
              src={selectedGameUrl}
              className={styles.gameIframe}
              title="Selected Game" // Add title for accessibility
              allowFullScreen // Allows fullscreen mode if the game supports it
              sandbox="allow-scripts allow-same-origin allow-pointer-lock" // Security sandbox - might need adjustment based on game needs
            />
          </div>
        </div>
      )}
    </div>
  );
}