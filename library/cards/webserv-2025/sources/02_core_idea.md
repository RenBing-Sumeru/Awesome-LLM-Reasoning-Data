WebServ’s core idea is that web-agent data quality depends on the entire browser-server transition contract, not only on the language model. The system therefore redesigns both sides of each state-action transition.

On the browser side, a parser removes invisible or non-semantic elements, flattens redundant containers, preserves selected control state, detects clickable and hoverable elements, and assigns stable semantic identifiers. The resulting text observation contains an annotated HTML snapshot plus lists for clickable, hoverable, input, and select elements. A VLM mode can additionally provide a screenshot. The action space is restricted to human-like browser primitives such as click, type, select, hover, navigation, tab management, and terminate.

Action execution waits for network and UI quiescence instead of using only a fixed sleep or full-page-load event. The implementation instruments XMLHttpRequest and fetch activity, waits for a configurable idle period, and returns an explicit error when stabilization times out. This makes the returned observation part of a more explicit transition contract.

On the server side, each rollout receives isolated Incus clones of self-hosted WebArena applications. ZFS or Btrfs block-level copy-on-write avoids duplicating multi-gigabyte application files at every reset and supports cloning, rollback, and high parallelism.

The training attachment is SFT followed by GRPO. Claude 4.5 Sonnet supplies successful bootstrap demonstrations; Qwen3-4B and Qwen3-30B-A3B then generate on-policy episodes in the isolated environment. WebArena string, URL, and HTML evaluators produce the task score, with a small format/browser-error penalty added by the rollout code. The central contribution is this coordinated transition-and-reset stack, not a new RL algorithm.

