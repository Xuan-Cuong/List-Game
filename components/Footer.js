// components/Footer.js
// Optional: If you add links
import styles from '@/styles/Footer.module.css'; // Adjust path if not using alias

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} Xuan Cuong. All Games Showcased Here.
        {/* Optional: Add a link to your main portfolio or GitHub */}
        {/* | <Link href="https://github.com/xuan-cuong" target="_blank" rel="noopener noreferrer">GitHub</Link> */}
      </p>
      <p className={styles.madeWith}>
        Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a>
      </p>
    </footer>
  );
}