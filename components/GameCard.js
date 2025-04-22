// components/GameCard.js
import Image from 'next/image';
import styles from '@/styles/GameCard.module.css'; // Use alias @ for src/ or root

export default function GameCard({ game, onPlayClick }) {
  return (
    <div className={styles.card} onClick={() => onPlayClick(game.gameUrl)} role="button" tabIndex="0">
      <div className={styles.imageContainer}>
        <Image
          src={game.imageUrl}
          alt={`Screenshot of ${game.name}`}
          fill // Use fill for responsive container
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
        />
      </div>
      <div className={styles.info}>
        <div> {/* Group title and description */}
          <h3 className={styles.title}>{game.name}</h3>
          <p className={styles.description}>{game.description}</p>
        </div>
         {/* We handle click on the whole card now, button is just visual */}
        <div className={styles.playButton}>
          Play Now
        </div>
      </div>
    </div>
  );
}