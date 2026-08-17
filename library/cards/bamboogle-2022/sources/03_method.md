1. Inputs: a compositional QA example, optional decomposed subquestions, a model prompt format, and optionally a search engine for follow-up answers.
2. Pipeline: ask the model the original question directly or with elicitive prompting; for self-ask, require an explicit "Are follow up questions needed" decision, follow-up questions, intermediate answers, and a final answer.
3. Outputs: final answer, optional follow-up trace, subquestion outcomes, and aggregate accuracy/gap measurements.
4. Verifier: short-answer correctness is the terminal predicate; the paper's gap metric additionally checks whether subquestions were answered correctly while the final composed answer was not.
5. Reproducibility boundary: pin the Bamboogle sheet/export, prompt exemplars, model/API version, search engine date, answer-normalization rules, and human-grading policy.
