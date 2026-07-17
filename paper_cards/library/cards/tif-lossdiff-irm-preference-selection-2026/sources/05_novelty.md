Earlier selectors use reward margins, curriculum heuristics, or a single model score. This work makes individual validation influence the reference definition of a valuable pair and then approximates that decision with two complementary signals.

Influence functions and preference optimization are not new. The changed decision is to combine LossDiff and IRM because their errors offset, making model-relative pair selection practical. Reuse should test the same pair under different policies and validation splits rather than treating its score as portable metadata.
