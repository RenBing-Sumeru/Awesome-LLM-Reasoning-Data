1. Code-Feedback is 68K conversations and 192K turns, not 68K independently verified programs.
2. The released object is static JSONL with id/messages role-content records; execution occurs during synthesis or downstream inference, not as part of the dataset loader.
3. Interaction simulation is the dominant branch at 51K records/155.5K turns, while explicit code correction contributes only about 500 records.
4. DeepSeek-Coder-33B improves from 79.0/70.4 single-turn average/plus scores to 83.2/76.4 with execution feedback and 88.0/81.0 with synthetic feedback, but the feedback adds inference-time information.
5. Apache-2.0 access is open, yet upstream lineage, OpenAI-generated records, semantic contamination, and arbitrary-code replay remain separate audit obligations.
