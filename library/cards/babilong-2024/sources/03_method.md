1. Inputs: a bAbI task generator, a target task such as QA1-QA20, a requested context length, and a background text source such as PG19 or Wiki.
2. Pipeline: generate the support facts and question, interleave or hide the task sentences among background sentences, build a prompt for the tested model, collect the model's final answer, and score it against the generated reference.
3. Outputs: per-example prompts, answers, task/length metadata, model responses, and aggregate accuracy by task and length.
4. Verifier: the official answer key/scoring script decides success at answer level; no semantic judge validates alternate reasoning traces.
5. Reproducibility boundary: pin dataset split, generated length bin, background corpus, prompt template, model revision, decoding budget, scorer version, and leaderboard date.
