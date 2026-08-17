1. **Build the source pool:** Have the Reasoner generate a full reasoning path and answer from an image and question.

2. **Generate or reorganize feedback:** Generate multiple critiques for the same reasoning, asking them to identify visual or logical errors and provide actionable revisions.

3. **Verify and filter:** Use rule-based reward to rank whether critiques detect errors and improve correction, form preference pairs, and train an independent Critic with DPO.

4. **Train and evaluate:** At inference, the Critic returns natural-language feedback and the Reasoner iteratively rewrites; actor–critic optimization is secondary to the data construction here.
