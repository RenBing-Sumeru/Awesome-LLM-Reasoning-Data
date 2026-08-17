Inputs are theorem candidates, domain-expert refinements, source questions or newly written questions, optional diagrams, and answer keys. Model outputs are evaluated after extracting a final answer compatible with the expected answer type.

The construction and evaluation pipeline is:
1. Use GPT-4 to propose theorem inventories across the target domains.
2. Have domain experts refine the theorem list and create or adapt questions grounded in those theorems.
3. Constrain answers to automatically checkable formats and discard or rewrite items whose answers are hard to evaluate reliably.
4. Run models with a disclosed prompting or Program-of-Thought setting.
5. Extract the final answer and compare it with the reference answer under the official normalization rules.

The output is answer-level accuracy, not proof validity. Reuse must pin dataset revision, split, evaluator implementation, prompt templates, tool use policy, and how the 51 diagram-based examples are handled.
