The pipeline starts from MATH problems and candidate solutions, estimates the relative progress represented by intermediate steps, and synthesizes rationales with code verification where it can be executed. These records train a generative model to explain and judge steps.

At inference, multiple judgments can be sampled and aggregated, and the critic can guide policy refinement. Reproduction requires the candidate-solution source, RPE sampling rule, code environment, step segmentation, aggregation count, model checkpoint, and ProcessBench split.
