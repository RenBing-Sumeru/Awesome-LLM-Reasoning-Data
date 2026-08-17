1. **Non-verifiable RM training:** Initialise a pointwise evaluator with the 119K judge-SFT records and alternate training on local pairwise preferences.


2. **Interpretable reward:** Retain each rubric-satisfaction probability to explain why a policy response is rewarded or rejected instead of using one opaque score.


3. **Pipeline reuse:** Validate a small rubric set with experts before automatic expansion in a new domain; do not let generator and judge reinforce each other without human anchors.
