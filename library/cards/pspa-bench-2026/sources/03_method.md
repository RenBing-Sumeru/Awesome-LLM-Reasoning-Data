Inputs are smartphone GUI task scenarios, app interfaces, manually built TDGs, user personas, and preference distributions. The paper reports 10 daily-use scenarios, 22 commonly used mobile apps, 100 user personas, and 12,855 personalized instructions.

Pipeline:
1. Build a TDG for each task, with fixed unit instructions and flexible preference-sensitive nodes.
2. Convert the TDG into templates where fixed nodes preserve procedure and flexible nodes become typed slots.
3. Instantiate slots from user profiles, including long-term and short-term preference weights, to generate personalized instructions with controlled complexity and clarity.
4. Run GUI agents in the smartphone environment and collect screenshots/action logs as execution traces.
5. Align each trace to the TDG with an LLM-based checklist evaluator, select the best path, and compute APR/PPR/CT/CPT plus long-term deltas.

Outputs are task instructions, TDGs/checklists, execution traces, and metric values. The judge is mixed: environment execution supplies the trace, an LLM maps actions to TDG unit instructions, and human validation audits the alignment. Reproducibility requires pinning app versions, Android/runtime settings, TDG/checklist versions, prompt/evaluator model, temperature, task split, and artifact release.
