Scientific search systems produce free-form answers from papers, but n-gram metrics miss factual, structural, and stylistic failures while expert review is costly. Generic LLM judges can also score flawed answers too generously, so their feedback is unsafe as an evaluation or reward signal.

YESciEval addresses this with a rubric-based, open-model evaluation framework for science Q&A. It supplies benign and deliberately degraded answer variants, enabling a judge to be tested on whether it lowers its score for a defined quality failure.
