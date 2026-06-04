import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import screenshot from '../data/copilot-cli-screenshot.png'
import styles from './CopilotCliScreenSlide.module.css'

export default function CopilotCliScreenSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.copilotCliScreen}>
      <div className="accent-bar" />
      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.imageWrapper}>
          <img
            src={screenshot}
            alt="GitHub Copilot CLI in action"
            className={styles.screenshot}
          />
        </div>
      </div>
      <BottomBar text={<Editable as="span" id="slide.footer">ANWB Developer Day</Editable>} />
    </Slide>
  )
}
