import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AgenticDivider.module.css'

const skills = [
  { id: 'prompting', label: 'Prompt Engineering' },
  { id: 'context', label: 'Context Architecture' },
  { id: 'guardrails', label: 'Guardrails & Safety' },
  { id: 'memory', label: 'Agent Memory' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'evaluation', label: 'Eval & Feedback' },
]

export default function AgenticDivider({ index, project }) {
  return (
    <Slide index={index} className={styles.agenticDivider}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      {/* floating skill tags */}
      <div className={styles.skillCloud} aria-hidden="true">
        {skills.map((s) => (
          <span key={s.id} className={styles.skillTag}>{s.label}</span>
        ))}
      </div>

      <div className={`${styles.body} content-frame content-gutter`}>
        <span className={styles.eyebrow}>
          <Editable as="span" id="slide.eyebrow">The New Developer Skillset</Editable>
        </span>

        <h1 className={styles.title}>
          <Editable as="span" id="slide.titleLine1">Agentic</Editable>
          <br />
          <span className={styles.highlight}>
            <Editable as="span" id="slide.titleLine2">Engineering</Editable>
          </span>
        </h1>

        <p className={styles.subtitle}>
          <Editable as="span" id="slide.subtitle">{"git checkout -b agentic-engineering 🚀"}</Editable>
        </p>

        <p className={styles.hook}>
          <Editable as="span" id="slide.hook">{"Stop writing code. Start engineering the agents that write it for you."}</Editable>
        </p>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">npm install --save-dev @future/agentic-skills</Editable>} />
    </Slide>
  )
}
