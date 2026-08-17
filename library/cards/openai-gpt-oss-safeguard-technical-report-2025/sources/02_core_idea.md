The released model receives two inference-time inputs: a developer-provided policy and content to classify. It returns a policy decision with reasoning, and OpenAI states that Structured Outputs and low, medium, and high reasoning-effort modes are supported. Thus the visible data object is an inference interface, not a released training example.

OpenAI describes gpt-oss-safeguard as an open-weight implementation of its Safety Reasoner approach. The release says that approach began with reinforcement fine-tuning on policy-labelling tasks, rewarding the model for mirroring correct human-expert judgments. The exact released-model reward, label protocol, calibration, and acceptance thresholds are not disclosed, so this is high-level feedback lineage rather than a reusable feedback contract.

