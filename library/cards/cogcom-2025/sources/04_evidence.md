# Evidence

**Controlled data ablation.** CogCoM-chat is trained with and without the 70K automatically generated CoM records while other settings are kept unchanged. Adding CoM changes TextVQA from 64.5 to 71.1, MM-Vet from 45.9 to 46.1, and MathVista from 34.8 to 35.7. This is the strongest evidence that the released trace data contributes beyond the shared mixture, although the gains vary sharply by task and the comparison does not separate planning text from visual-operation returns.

**Construction-quality boundary.** The automatic pipeline finds a golden-answer-terminating path for 35.55% of planned items and discards other branches. The paper reports manual inspection found most retained paths correct, but gives no independent step-level error rate; small or uncommon objects have lower construction success, and an overly large grounding box can still produce a coincidentally correct final answer.
