1. **Evaluation:** Train a code ORM directly from question_content, code_pos, and code_neg with Bradley–Terry loss, calibrating it on a held-out executable set.

2. **Training:** Provide approximate RL rewards for synthetic problems without tests, while periodically executing samples to estimate reward hacking.

3. **Transfer or deployment:** Use it for low-latency Best-of-N code selection and report selection accuracy, actual-test pass@1, and scoring latency together.
