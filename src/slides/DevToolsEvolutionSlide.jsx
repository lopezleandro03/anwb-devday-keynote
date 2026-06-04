import React, { useState } from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './DevToolsEvolutionSlide.module.css'

const eras = [
  {
    id: 'ide',
    icon: '🖥️',
    label: 'IDE',
    name: 'Integrated Dev Environment',
    desc: 'GUI-first. Extensions. Language servers. Deep integration. Still the powerhouse for complex projects.',
    era: '2000s–2020s',
    glow: 'var(--blue-glow)',
  },
  {
    id: 'tui',
    icon: '⌨️',
    label: 'TUI',
    name: 'Terminal UI Renaissance',
    desc: 'CLI-native agents. Headless workflows. Lightweight, fast, perfect for agent-driven iteration.',
    era: '2025–2026',
    glow: 'var(--purple)',
  },
  {
    id: 'ade',
    icon: '🤖',
    label: 'ADE',
    name: 'Agent Development Environment',
    desc: 'Agents orchestrate. Humans steer. Purpose-built for autonomous, multi-step engineering.',
    era: '2026 →',
    glow: 'var(--green)',
  },
]

export default function DevToolsEvolutionSlide({ index, project }) {
  const [visible, setVisible] = useState(1)

  const advance = (e) => {
    e.stopPropagation()
    if (visible <= eras.length) {
      setVisible((v) => v + 1)
    } else {
      setVisible(1)
    }
  }

  return (
    <Slide index={index} className={styles.devToolsEvolution}>
      {/* click target covering the whole slide */}
      <div className={styles.clickTarget} onClick={advance} />
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="h2" id="slide.title" className={styles.title}>
            Developer Tools Are Evolving
          </Editable>
          <Editable as="p" id="slide.subtitle" className={styles.subtitle}>
            An improving experience for humans and agents to collaborate
          </Editable>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          <div className={styles.synergyLine} />

          {eras.map((era, i) => (
            <React.Fragment key={era.id}>
              <div
                className={`${styles.eraCard} ${styles[`era${i}`]} ${i < visible ? styles.visible : styles.hidden}`}
                style={{ '--era-glow': era.glow }}
              >
                <div className={styles.eraIcon}>{era.icon}</div>
                <div className={styles.eraLabel}>{era.label}</div>
                <div className={styles.eraName}>
                  <Editable as="span" id={`slide.eras.${era.id}.name`}>
                    {era.name}
                  </Editable>
                </div>
                <div className={styles.eraDesc}>
                  <Editable as="span" id={`slide.eras.${era.id}.desc`}>
                    {era.desc}
                  </Editable>
                </div>
                <div className={styles.eraDate}>{era.era}</div>
              </div>
              {i < eras.length - 1 && (
                <div className={`${styles.arrow} ${i + 1 < visible ? styles.arrowVisible : styles.arrowHidden}`}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className={`${styles.punchline} ${visible > eras.length ? styles.visible : styles.hidden}`}>
          <Editable as="p" id="slide.punchline" className={styles.punchlineText}>
            Evolution, not elimination — different tools for different moments.
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">ANWB Developer Day</Editable>} />
    </Slide>
  )
}
