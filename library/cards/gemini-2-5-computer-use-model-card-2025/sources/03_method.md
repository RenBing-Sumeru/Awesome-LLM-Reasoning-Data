The deployed loop is:

1. **State input:** user goal or prompt, current screenshot, and recent action history.
2. **Policy output:** an autoregressive function call containing an action name and arguments, including normalized 0-999 coordinates where applicable.
3. **Client execution:** the developer's browser/mobile harness executes the action rather than the model directly changing the environment.
4. **Observation:** the client returns a `function_result`, current URL, and a new screenshot.
5. **Iteration and safety:** the loop repeats; an external per-step safety service may prohibit an action or request user confirmation. Completion, error, safety response, or user choice terminates deployment.

Online-Mind2Web excludes `search` and `navigate`, uses Anchor for actuation, API defaults with temperature 1 and `include_thoughts=True`, autoregressive pass@1, and one trajectory per task. WebVoyager follows the same sampling and human-evaluation procedure after date editing and removing infeasible tasks. Three humans judge each complete trajectory; majority vote defines success. These are evaluation settings, not training sampling or reward evidence.

AndroidWorld excludes eight browser functions and adds `open_app`, `long_press_at`, and `go_home`. It uses Pixel 6 emulators, Android 13/API 33, screenshot-only observation, and no accessibility tree; maximum steps and random seed remain at unspecified benchmark defaults. Reproduction additionally requires Anchor, Browserbase, browser/Chrome/Playwright, sites, viewport, OS/emulator image, app versions, locale, reset, timeout, and repository commit pins.

The training pipeline cannot be reconstructed beyond Gemini 2.5 Pro plus unspecified UI-control and safety-confirmation post-training. Training reward, verifier, terminal rule, rollout count, temperature, task generator, filtering, optimizer, curriculum, compute, and checkpoint mapping are all unknown.
