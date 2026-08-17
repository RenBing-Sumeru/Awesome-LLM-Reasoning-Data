The strongest limitation is that Mind2Web: Towards a Generalist Agent for the Web is only reusable when its scoring surface, split policy, version, and artifact access conditions are pinned. A headline benchmark score can hide prompt/scaffold choices, dependency drift, judge or extractor behavior, and public-data contamination.

Split/version boundary: Pin public/hidden split, task version, snapshot date, and evaluator version before comparing results.

License/access boundary: Artifact-level license and redistribution terms must be checked before reuse.

Contamination boundary: Public tasks and traces can leak into future training data; post-release or live-web claims require dated evidence.

Known failure modes to preserve during Review: Live websites, service state, or browser dependencies can drift after release.; Prompt/scaffold choices, retries, vision settings, and action abstraction can change scores.; Public trajectories or task configurations can become training contamination.
