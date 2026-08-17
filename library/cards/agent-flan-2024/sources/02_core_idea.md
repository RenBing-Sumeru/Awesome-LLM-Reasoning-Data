Agent-FLAN changes agent tuning from imitating one rigid trace format to training a capability-balanced set of natural conversations plus explicit non-tool examples, so formatting cannot dominate the loss and the model learns both how and when to act. The closest comparison is AgentTuning; the feedback boundary combines inherited task correctness with constructed negative conditions, and the released training mixture, not Agent-H, defines the category.

Google Scholar citations: 150（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Agent-FLAN%3A+Designing+Data+and+Methods+of+Effective+Agent+Tuning+for+Large+Language+Models&author=Zehui+Chen&hl=en）

Open dataset: yes
Dataset name: Agent-FLAN
Official URL: https://huggingface.co/datasets/internlm/Agent-FLAN
Scale: 24,703 paper records; seven public files covering AgentInstruct and ToolBench transformations, including 22,867 ToolBench samples
Record form: id plus conversation turns with role, content, and loss; content serializes state, Thought, Action, tool arguments or observations, final answers, and negative responses
File / storage format: seven JSONL files, approximately 219 MB according to the official repository manifest
Domains / languages: primarily English; web shopping, household worlds, web navigation, knowledge graphs, operating systems, databases, and APIs
Construction and filtering: reformat ReAct/JSON as conversations, decompose four capabilities, reweight them, keep valid source traces, and add two tool-use negative families
License / access constraints: Apache-2.0 for the official dataset and repository; inherited source-dataset terms still apply
Intended use: supervised fine-tuning for general agents and tool-use models
