ClawBench asks whether AI web agents can complete routine online tasks on real production websites. The primary source is the 2026 arXiv paper "ClawBench: Can AI Agents Complete Everyday Online Tasks?" with project page listed as `https://claw-bench.com`.

The decision boundary is that this is a live-web agent benchmark, not a static webpage sandbox, mobile UI benchmark, or training recipe. The evaluation surface is a task episode over a production platform, including user goal, required documents or fields, browser trajectory, and final-submission interception.

It matters because many web-agent benchmarks avoid real side effects by using offline replicas; ClawBench tests the harder live-site setting while trying to block the final real-world action.
