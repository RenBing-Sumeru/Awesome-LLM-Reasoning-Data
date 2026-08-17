As models approach saturation on single-problem RL data, many prompts reach pass rate one and provide almost no learning signal. Finding new difficult human-written problems is expensive, and their answers or verifiers may be unreliable. Simply discarding easy prompts wastes existing verifiable resources.

Composition-RL combines multiple already verifiable problems into longer and harder within-domain or cross-domain tasks, constructs deterministic composite verifiers from sub-answer contracts, and increases composition depth through a curriculum to restore RL signal.
