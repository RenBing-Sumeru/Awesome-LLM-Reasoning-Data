1. **Positioning:** Reward models are often tied to fixed criteria and opaque scalar outputs, limiting transfer to new evaluation dimensions.
2. **Method handle:** The decisive actions are complete examples with rubrics, generate reasoned score assignments, filter the 20k training records, followed by train and evaluate a rubric-agnostic rm.
3. **Artifact handle:** R3 releases a 20K rubric–reasoning–score dataset and trains a rubric-agnostic reward model that can infer relevant criteria and produce interpretable scores without a fixed rubric.
4. **Evidence anchor:** The paper evaluates R3 across several reward benchmarks and unseen-rubric settings.
5. **Reuse decision:** A self-inferred rubric may not match the user’s intended values.
