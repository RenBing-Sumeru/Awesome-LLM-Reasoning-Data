Synthetic data and LLM-as-a-judge are often combined, but evaluation can be contaminated when the data generator and judge are related. A judge may favor a student trained on its own, inherited, or same-family generator data, inflating reported quality without obvious benchmark overlap.

The paper names this failure preference leakage, defines three generator--judge relatedness conditions, and measures the induced favoritism with a preference leakage score across controlled training and LLM-judge evaluations.
