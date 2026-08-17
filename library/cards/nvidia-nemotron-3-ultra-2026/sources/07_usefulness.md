Use this Card to audit an "open-weight" claim layer by layer: checkpoint availability, model licence, data-collection release, recipe release, public and private source boundaries, environment reproducibility, and reward auditability are separate questions. NVIDIA's release lets those questions be recorded with more evidence than is typical, but it does not collapse them into a single open/closed label.

For post-training research, the report is a useful checklist for decomposing a broad agentic-RL statement into task families, trace construction, teachers, environments, rollout count, generation budget, verifier, terminal predicate, and calibration. The missing fields here are equally useful: they identify what would be required to reproduce or independently audit the reported result.

The released collections and NVIDIA-NeMo recipes can support inspection and reference implementation work. They should not be treated as proof that private/vendor inputs, all trajectory data, every reward, or the full production environment can be reconstructed.

