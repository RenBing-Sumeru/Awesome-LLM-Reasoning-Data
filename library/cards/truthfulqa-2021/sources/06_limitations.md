# 06 Limitations

TruthfulQA is public and small enough that benchmark contamination is a serious risk for modern models. A high score can reflect memorization, benchmark-specific post-training, or prompt adaptation rather than a general ability to answer truthfully under distribution shift.

The scoring contract is mixed and historically situated. Human evaluation is expensive and not always repeated for every new model; learned judges and semantic metrics can reward surface similarity, penalize alternative correct phrasings, or drift as implementations change. Multiple-choice scores can differ from free-form behavior because the answer options expose the true and false candidates.

The benchmark targets common English misconceptions and culturally salient false beliefs, not every form of factuality. It does not directly test retrieval quality, citation grounding, long-form synthesis, or tool-assisted verification. Reported scores should therefore name the mode, prompt, scorer, model date, and exposure assumptions.
