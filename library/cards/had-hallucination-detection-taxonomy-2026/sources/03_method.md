1. **Unify taxonomy:** Hallucination definitions across NLG tasks are consolidated into eleven cross-task types with boundary guidance.

2. **Synthesize training data:** Correct and controlled-error texts are generated from real task inputs and labelled with type, span, and correction, yielding about 90K samples.

3. **Build HADTest manually:** Annotators review real model outputs, localise errors, assign types, and provide corrections for 2,248 gold examples.

4. **Train joint models:** HAD models perform detection, localisation, and correction with a shared output format; generators, taxonomy, and decoding template must be fixed.
