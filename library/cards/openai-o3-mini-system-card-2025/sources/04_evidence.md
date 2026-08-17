The official publication page dates the System Card to January 31, 2025 and credits OpenAI. The PDF's Model Data and Training section supports the broad public/in-house pretraining-source statement, filtering claims, and the high-level reinforcement-learning and chain-of-thought claims.

For safety evaluation, the PDF defines `not_unsafe` and `not_overrefuse` autograder metrics for refusal tests. It describes external red-team ratings and a Gray Swan jailbreak success criterion requiring both a Moderation API trigger and a classifier assessment of complete/actionable harmful content. In Preparedness evaluation, the report says that capability elicitation can use custom model training, scaffolding, and prompting, and explicitly cautions that reported results are lower bounds that may change with different prompting, fine-tuning, longer rollouts, interactions, or scaffolding.

These are direct disclosures about testing and mitigations. They do not demonstrate that any named autograder, moderation criterion, human rating, or Preparedness task served as the reinforcement-learning training reward.

