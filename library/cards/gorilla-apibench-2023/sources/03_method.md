Inputs are the task materials and metadata needed to form one record: APIBench records built from HuggingFace, TorchHub, and TensorHub/TensorFlow Hub documentation; the paper reports 1,645 filtered API calls with 10 synthetic instruction-API pairs per API and metadata such as API name, arguments, domain, framework, requirements, examples, and descriptions.

Pipeline: Collect API documentation; filter and structure API metadata; generate instruction-call pairs; retrieve relevant API docs at inference time; ask the model to produce API calls; score calls by AST matching and hallucination checks.

Outputs are scored benchmark records or evaluation summaries under this contract: AST subtree matching of generated API calls and arguments, with hallucination counted when the call matches no API in the database. Reuse must pin source version, split, scorer or judge version, prompt/scaffold policy, runtime environment where relevant, and artifact license.
