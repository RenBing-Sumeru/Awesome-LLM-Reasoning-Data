Qwen releases Qwen2.5-Math-PRM-7B and Qwen2.5-Math-PRM-72B as models for assessing mathematical reasoning quality and intermediate steps rather than generating an answer. The official release says they are fine-tuned from Qwen2.5-Math-7B-Instruct and Qwen2.5-Math-72B-Instruct, respectively.

The concrete disclosed contract is an inference interface. A reasoning response is segmented with double line breaks; an extra_0 separator token is inserted after each step; and the positive-class probability at each separator is extracted as a reward from 0 to 1. This establishes a per-step scoring interface. It does not establish what the positive label means, how steps were labeled, whether scores are calibrated, or how step scores should be aggregated for a training or selection decision.

