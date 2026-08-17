Long context windows do not guarantee that a model can aggregate evidence scattered across documents and perform reliable multi-hop analysis. Existing long-context QA often lacks both realistic unstructured context and an executable path for establishing the correct answer.

π² starts from Wikipedia tables, generates analytical questions whose answers agree under independent SQL and Python execution, replaces the table with realistic web documents, and back-translates a step-by-step trace from the context and verified answer. It produces training data where ground truth comes from structure but the student must reason over ordinary long text.

L4 facts: official source arXiv:2604.05114, 2026; preprint marked under review with no confirmed acceptance; decision boundary is SQL/Python-agreed QA with retained long-context evidence; Track-01 object is context, multi-hop question, reasoning trace, and short answer; collected as an existing promoted Card.
