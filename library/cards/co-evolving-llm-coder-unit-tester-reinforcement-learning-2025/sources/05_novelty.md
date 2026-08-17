CURE's main difference from fixed unit-test generation or fixed-verifier code RL is the coupled training object. One policy plays both roles, the code-by-test execution matrix supplies interaction evidence, gold tests anchor the code labels, and alternating updates change both sides of the feedback loop. The paper further derives the tester reward from reward precision rather than rewarding pass rate alone.

The method is also distinct from inference-only generated-test voting. Generated tests are trained to discriminate gold-test-passing and gold-test-failing sampled programs, then reused as a selection surface for Best-of-N and agentic coding. The long-CoT reward transformation adds a separate efficiency objective by penalizing excessive tester response length without intentionally reversing reward sign.

What is not new includes sampling multiple programs, executing unit tests, Best-of-N selection, PPO/GRPO-style updates, and using tests for debugging. The direction signal comes from connecting these components into a jointly changing coder/tester loop and exposing a concrete reward lineage.

The method should not be described as fully self-supervised co-evolution. Gold code is absent, but private gold tests remain an external anchor for both roles. That qualification is part of the novelty boundary, not merely a limitation.
