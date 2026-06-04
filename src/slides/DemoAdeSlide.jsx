import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import copilotLogo from '../data/logos/github-copilot-cli.png'
import githubAppLogo from '../data/logos/github-app.svg'
import styles from './DemoAdeSlide.module.css'

export default function DemoAdeSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.demoAde}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.demoBadge}>
          <span className={styles.liveIcon} />
          <Editable as="span" id="slide.badge">LIVE DEMO</Editable>
        </div>

        <Editable as="h1" id="slide.title" className={styles.title}>
          Agentic Development Environments
        </Editable>

        <Editable as="p" id="slide.subtitle" className={styles.subtitle}>
          From TUI to ADE — agents get their own workspace
        </Editable>

        <div className={styles.transitions}>
          <div className={styles.transitionRow}>
            <div className={styles.fromTo}>
              <div className={styles.logoBlock}>
                <img src={copilotLogo} alt="GitHub Copilot CLI" className={styles.logo} />
                <span className={styles.logoLabel}>Copilot CLI</span>
              </div>
              <div className={styles.arrowContainer}>
                <div className={styles.arrowLine} />
                <div className={styles.arrowHead}>▶</div>
              </div>
              <div className={styles.logoBlock}>
                <img src={githubAppLogo} alt="GitHub App" className={styles.logo} />
                <span className={styles.logoLabel}>GitHub App</span>
              </div>
            </div>
          </div>
        </div>

        <Editable as="p" id="slide.description" className={styles.description}>
          Purpose-built environments where agents operate autonomously — review, plan, code, test, and ship.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">ANWB Developer Day</Editable>} />
    </Slide>
  )
}
