Vanilla multi-agent debate can consume more test-time compute than majority voting without improving expected correctness. With homogeneous agents and uniform updates, agents may begin from similar answers, copy the initial majority, and exchange arguments without systematically moving toward the correct hypothesis.

The paper's data objects are the source QA item, an oversampled initial candidate pool, the selected five-agent pool, five rounds of reasoning/answers, explicit 0-10 confidence, reward components, answer changes, and terminal vote. These records are experimental artifacts; the official repository does not release a complete dialogue corpus.

