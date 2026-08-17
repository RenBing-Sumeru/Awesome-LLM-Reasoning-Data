Inputs are PubMed article metadata and structured abstracts. For PQA-L and PQA-U, the question is a PubMed title phrased as a question; the context is the structured abstract without the conclusion; the long answer is derived from the conclusion. PQA-A starts from declarative titles and converts them into question form.

The construction pipeline is:

1. collect candidate PubMed records with usable titles and structured abstracts;
2. remove the conclusion section from the model input while retaining it as long-answer evidence;
3. for PQA-L, have two qualified M.D. candidates label examples under different evidence conditions, then keep agreement labels or discuss disagreements;
4. for PQA-U, keep answerable question-title articles without expert labels;
5. for PQA-A, create artificial questions and labels through rule-based title conversion and negation heuristics;
6. evaluate predictions with the official PMID-to-label JSON scorer.

The output artifact is not a reasoning trace. It is a dataset record with question, context, long answer, final label where available, and split/subset metadata. Reproducibility depends on pinning PQA-L versus PQA-U versus PQA-A, the official script-generated split or local split, label normalization, PubMed source terms, and whether PQA-A/PQA-U are used only for training or also for evaluation.
