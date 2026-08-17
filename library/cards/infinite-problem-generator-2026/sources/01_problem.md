Physics reasoning data are scarce because ordinary text generation can produce fluent but unsolvable questions, inconsistent numbers, or hallucinated formulas. Static benchmarks also rarely expose executable solution traces suitable for training or automatic verification.

Infinite Problem Generator represents physics formulas as Python functions, expands expert textbook seeds into new scenarios, and executes every generated solution before acceptance. Its direct output is ClassicalMechanicsV1, a corpus of problem-code-answer records whose solvability and structural complexity can be checked mechanically.

L4 facts: official source arXiv:2603.14486v1, dated 15 March 2026; arXiv preprint with no confirmed venue; decision boundary is executable, finite, physically sane, signature-unique physics data; Track-01 object is a problem, formula IDs, Python solution, and numeric answer record; collected as an existing promoted Card.
