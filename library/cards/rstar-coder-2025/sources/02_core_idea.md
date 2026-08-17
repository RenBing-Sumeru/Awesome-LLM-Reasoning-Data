The central idea is to decouple test construction into input generation and output labeling. An LLM writes a problem-specific input generator and validator; the resulting utilities are executed at varied scale parameters to produce candidate inputs. Seed problems use their oracle solutions to label outputs. Synthetic problems instead use agreement among executable QWQ-32B solutions to infer both the expected output vector and which solutions to retain.

| Contract element | What the paper or release exposes |
|---|---|
| Prompt | Expert seed question plus reference solution, or a transformed synthetic question |
| Test-input producer | LLM-written `generate_test_input` with scale-controlling arguments, assisted by CYaRon |
| Input acceptance | LLM-written `validate_test_input`, executed on each generated input |
| Seed output label | Output from the supplied oracle solution |
| Synthetic output label | Agreement derived from 16 QWQ-32B candidates over at least 50 shared inputs |
| Trace target | Long-reasoning response plus implementation code, supervised at answer level |
| RL-ready object | Problem rows and linked input-output test rows, not a demonstrated RL training run |

The paper describes majority agreement on complete output sets. The released script implements a narrower, different procedure: it takes a plurality separately for each input, marks a solution consistent only if it matches every per-input selected output, filters with a strict `>` consistency threshold, and removes problems whose selected outputs are constant across all tested inputs. The Card therefore records both the paper contract and the released-code behavior rather than merging them.

Agreement is an executable verifier, not a trusted oracle. Shared teacher biases, incomplete generated inputs, or incorrect validation utilities can make multiple candidates agree on the same error. The paper's oracle comparison measures this gap directly: reported output-label accuracy is 96.8% on 3,150 tests and 92.8% on a larger 27,613-test evaluation.
