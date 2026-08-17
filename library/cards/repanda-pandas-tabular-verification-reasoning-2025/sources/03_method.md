1. **Prepare source table tasks:** Take tables, captions, claims, and binary labels from TabFact, and tables, questions, and reference answers from WikiTableQuestions, then normalize them into DataFrame-readable form.

2. **Generate pandas queries:** Use DeepSeek-Chat to produce filtering, comparison, sorting, or aggregation code whose execution returns a Boolean judgment or target value.

3. **Execute and repair automatically:** Run the code and iteratively correct syntax errors, column mismatches, and result disagreements. Only executable queries consistent with the label or answer are retained.

4. **Train and test transfer:** Fine-tune a 7B code model on PanTabFact for fact verification, train on PanWiki for answer retrieval, and evaluate zero-shot on WikiFact for out-of-distribution transfer.
