1. Inputs: a daily task instruction, Android emulator configuration, screen image and/or view-hierarchy observation, previous actions, and an agent policy.
2. Environment: B-MoCA randomizes icon locations, icon sizes, wallpapers, language settings, dark mode/device type and other configuration features across prepared environments.
3. Action interface: agents can use continuous dual-gesture actions, discrete UI/location actions, navigation buttons, and text-based actions for LLM/MLLM prompting.
4. Feedback: rule-based success detectors inspect app data and UI attributes through ADB/Appium-style interfaces; episodes terminate by success or failure policy.
5. Outputs: success rates over all 131 tasks or selected challenging tasks, per-environment comparisons, and imitation-learning baselines trained from human demonstrations. Reproducibility depends on release version, emulator image, app versions, randomization config, detector code, prompt, model API version, and demonstration split.
