1. Fix an evaluation task, a judge model, and a prompt template, then record the clean verdicts that attacks will be compared against.

2. Run the 15 automated attack families on the judged content or evaluation context and measure attack success through the induced verdict change.

3. Apply each of seven defenses to the same attack setting, recording both recovered robustness and any clean-utility cost rather than treating a blocked example as sufficient evidence.

4. Repeat the protocol across 12 judge models and prompt templates to isolate configuration sensitivity, then run the harness on Alibaba PAI as a deployment case. Reproduction requires released code, exact templates, model/API versions, attack budgets, decoding, and platform settings; several provider-side details are version-dependent.
