The one-sentence contribution is that Mind2Web: Towards a Generalist Agent for the Web packages offline real-website action traces with HTML snapshots across many sites into a reusable agent evaluation or trajectory surface. The core mechanism is to bind a task instruction to browser state, tool state, screenshots, DOM/HTML, or simulator state, then score the agent through offline action matching and element-selection evaluation over recorded page states.

The data object is crowdsourced web navigation demonstrations, HTML snapshots, task goals, and action targets. The feedback contract is environmental: success depends on page state, answer matching, task predicates, or evaluator checks rather than a free-form preference label. Category rationale: it belongs in environment_agent_trajectory_data because the reusable unit is an interactive environment, web action record, or browser-task harness.

Closest comparisons are WebLINX, WebArena, SeeAct, and Online-Mind2Web.
