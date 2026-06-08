import CoverSlide from './src/slides/CoverSlide.jsx'
import structuredvibecodingVibeCodingLimits from './src/slides/composed/structured-vibe-coding/VibeCodingLimits.jsx'
import structuredvibecodingAgenticDivider from './src/slides/composed/structured-vibe-coding/AgenticDivider.jsx'
import structuredvibecodingSdlcInfographic from './src/slides/composed/structured-vibe-coding/SdlcInfographic.jsx'
import structuredvibecodingAgentsMdSlide from './src/slides/composed/structured-vibe-coding/AgentsMdSlide.jsx'
import structuredvibecodingCustomInstructions from './src/slides/composed/structured-vibe-coding/CustomInstructions.jsx'
import structuredvibecodingSkillsAndPlans from './src/slides/composed/structured-vibe-coding/SkillsAndPlans.jsx'
import structuredvibecodingUseCaseVideo from './src/slides/composed/structured-vibe-coding/UseCaseVideo.jsx'
import nordclouddevdayAgenticEvolutionSlide from './src/slides/composed/nordcloud-devday/AgenticEvolutionSlide.jsx'
import nordclouddevdayVibeCodingSlide from './src/slides/composed/nordcloud-devday/VibeCodingSlide.jsx'
import nordclouddevdayAbstractionLadderSlide from './src/slides/composed/nordcloud-devday/AbstractionLadderSlide.jsx'
import nordclouddevdayAbstractionLadderDiagramSlide from './src/slides/composed/nordcloud-devday/AbstractionLadderDiagramSlide.jsx'

import IqPlatformSlide from './src/slides/IqPlatformSlide.jsx'
import DevToolsEvolutionSlide from './src/slides/DevToolsEvolutionSlide.jsx'
import DemoAnnouncementSlide from './src/slides/DemoAnnouncementSlide.jsx'
import CopilotCliScreenSlide from './src/slides/CopilotCliScreenSlide.jsx'
import DemoAdeSlide from './src/slides/DemoAdeSlide.jsx'
import UnlockIntelligenceSlide from './src/slides/UnlockIntelligenceSlide.jsx'
import ClosingQuoteSlide from './src/slides/ClosingQuoteSlide.jsx'
import ThankYouSlide from './src/slides/ThankYouSlide.jsx'

export default {
  private: true,
  id: 'anwb-devday',
  title: 'ANWB DevDay',
  subtitle: 'ANWB DevDay',
  icon: '🚀',
  accent: '#3fb950',
  slides: [
    CoverSlide,
    nordclouddevdayAgenticEvolutionSlide,
    nordclouddevdayVibeCodingSlide,
    nordclouddevdayAbstractionLadderSlide,
    nordclouddevdayAbstractionLadderDiagramSlide,
    structuredvibecodingVibeCodingLimits,
    structuredvibecodingAgenticDivider,
    structuredvibecodingUseCaseVideo,
    structuredvibecodingAgentsMdSlide,
    structuredvibecodingCustomInstructions,
    structuredvibecodingSkillsAndPlans,
    structuredvibecodingSdlcInfographic,
    DevToolsEvolutionSlide,
    DemoAnnouncementSlide,
    UnlockIntelligenceSlide,
    IqPlatformSlide,
    CopilotCliScreenSlide,
    DemoAdeSlide,
    ClosingQuoteSlide,
    ThankYouSlide,

  ],
}
