import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/Despacito.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className={styles.profilePic}
        />
        <h1>Cedric James Lumawig</h1>
      </header>
      <main className={styles.main}>
        <article className={styles.post}>
          <h2>Introduce Yourself</h2>
          <div className={styles.resumeContainer}>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Hobbies</div>
              <p>Model Kits Building and Sleeping</p>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Favourite Music</div>
              <p>In The End by Linkin Park</p>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Favourite Food</div>
              <p>Ginisang Munggo</p>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Education and Experience</div>
              <p>I take the IT course that when I got Highschool I got fascinated by Technology. My first coding experience was HTML.</p>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Career Goals</div>
              <p>Probably see myself working as a Game Developer, Web Developer, or Web Designer. However, if the competition is high, I might work in a Call Center instead.</p>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Skills and Learning Goals</div>
              <p>I already know some basics of HTML and CSS, but I want to learn more about applying JavaScript to HTML and more advanced areas of CSS and JavaScript application on websites.</p>
            </div>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
       <p>(This is a sample website - you'll be building a site like this on</p>
        <a href='https://nextjs.org/learn'> our Next.js tutorial.) </a>
      </footer>
    </div>
  )
}

