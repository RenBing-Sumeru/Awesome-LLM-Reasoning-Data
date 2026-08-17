Vision-to-code tasks for charts, tables, and SVGs require judging whether rendered code is visually equivalent to a target image. Textual rules only inspect code structure, while global similarities such as CLIP overlook local position, type, and severity differences and are vulnerable to reward hacking.

Visual-ERM trains a generative reward model that directly compares a target image with a candidate rendering and outputs discrepancy category, location, severity, and explanation. It also releases VC-RewardBench to test visual-equivalence judging with fine-grained discrepancy annotations.
