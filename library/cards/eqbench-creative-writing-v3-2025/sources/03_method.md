Inputs are creative-writing prompts and model completions. The public page verifies the Creative Writing v3 leaderboard, score column, repetition column, and slop column.

Pipeline: collect model outputs for the writing prompts, score them with the benchmark judge, compute repetition from common words/bigrams/trigrams, compute slop from a list of overused phrases, then publish the leaderboard. Outputs are model scores and style diagnostics.

Reproducibility requires prompt set, model output text, judge model, judging prompt, generation settings, repetition/slop implementations, and leaderboard date.
