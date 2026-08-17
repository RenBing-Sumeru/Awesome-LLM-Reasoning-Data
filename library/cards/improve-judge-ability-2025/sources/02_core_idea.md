RISE treats judging as a transferable capability: filtered, explanation-bearing pairwise judgments first teach a base model how to critique, then preference optimization targets the cases on which the teacher was unreliable. The official release includes RISE-Judge-SFT-20K and RISE-Judge-DPO-20K, two public datasets of judge instructions, answer pairs, analyses, and verdict-oriented targets for training generative judges.

This separates formatting and reasoning adaptation from selection accuracy, while keeping the training target inspectable as text rather than reducing it to an opaque score. The paper reports public model weights; the paper itself does not state a dataset license.

The data mainly draws on Math-PRM800K, several subsets of Skywork-Reward-Preference-80K, and limited proprietary general dialogue. The authors state that synthesized data do not overlap the evaluation benchmarks.
