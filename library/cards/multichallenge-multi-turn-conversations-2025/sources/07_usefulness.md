1. **Dialogue-model regression testing:** After model updates, evaluate whether cross-turn constraints, corrections, or context-state handling regress within each challenge category.

2. **Judge training:** Use dialogue trajectories, rubrics, and human decisions to train a specialized multi-turn evaluator rather than a generic single-turn reward model.

3. **Training-data construction:** Convert failures into correction demonstrations, chosen–rejected pairs, or process feedback for multi-turn SFT and preference optimization.

4. **Agent-state research:** Analyze the turn at which constraints are lost or incorrectly updated, informing memory, context compression, and planner design. Additional data is required for open-ended chat or very long conversations.
