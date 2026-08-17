1. **Design tasks:** Construct complex questions requiring multi-hop text, image, or mixed retrieval and assign them to five chain structures.
2. **Annotate paths:** Write sequential subquestions, retrieval modalities, supporting facts, and intermediate answers for each task.
3. **Verify every hop:** HAVE checks whether each answer is supported by current evidence and removes chains with incomplete attribution.
4. **Evaluate and train:** Assess six MLLMs with answer, retrieval, and planning metrics and use verified chains for Search-Align SFT.
