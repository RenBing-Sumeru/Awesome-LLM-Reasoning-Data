1. **Collect tasks:** Select multimodal problems requiring visual evidence and multi-step reasoning.

2. **Generate step chains:** Use multiple models to generate candidate reasoning steps and reduce single-teacher phrasing bias.

3. **Aggregate and verify:** Merge semantically duplicate steps and have humans verify reference steps, order, and final answers.

4. **Compute metrics:** Use Match and Ordered Match F1 for coverage and order; reproduction must fix aggregation rules and the matching model.
