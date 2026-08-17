The paper reports that Mobile-Agent-v3 reaches 73.3 on AndroidWorld and 37.7 on OSWorld-Verified. It also reports GUI-Owl-7B at 66.4 on AndroidWorld and 29.4 on OSWorld, and a TRPO-trained variant reaching 34.9 on OSWorld-Verified.

The instance-level evidence is environment execution: a trajectory must complete the GUI task under the benchmark's success definition. This is more auditable than a text-only answer, but the paper-level numbers still depend on benchmark version, cloud environment state, model checkpoint, and scaffold settings.

The evidence boundary is that public aggregate scores do not expose every trajectory, filter decision, or training-data lineage. Any reuse of the self-evolving trajectories needs artifact-level access and a separate audit of accepted, rejected, timeout, and ambiguous runs.
