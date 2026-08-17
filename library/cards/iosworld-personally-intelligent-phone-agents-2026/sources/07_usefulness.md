Use iOSWorld as a schema for personalized mobile-agent evaluation. Preserve task id, goal, app list, category, difficulty, seeded user state version, observation mode, simulator configuration, action trace, screenshots, events, rubric criteria, judge settings, and score.

It is useful for testing whether phone agents can coordinate across apps and personal context, and for designing benchmark tasks where privacy-sensitive behavior is approximated with fictional but connected data.

For atlas work, it belongs in environment-agent trajectory data and benchmark surfaces. The reusable lesson is that personal context must be represented as versioned environment state, while scoring should expose both rubric criteria and trajectory evidence.
