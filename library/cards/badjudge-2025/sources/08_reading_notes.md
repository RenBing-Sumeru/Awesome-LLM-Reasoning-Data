1. Positioning: this is a supply-chain backdoor audit for LLM evaluators, not a prompt-injection study.
2. Method handle: a poisoned candidate emits the trigger and a poisoned judge maps it to a target score.
3. Artifact handle: the official badjudge repository provides code, tools, notebooks, and experiment scaffolding; it is not a new dataset release.
4. Evidence anchor: full-access rare-word poisoning raised score 1.51→4.9/5 and ASR 0→93.8%; merging reduced ASR to 0 in that setting.
5. Reuse decision: audit candidate and judge together; validate clean degradation and false positives before trusting model merging.

The relevant success criterion is not merely high clean accuracy: it is low triggered ASR without unfairly altering benign verdicts.
