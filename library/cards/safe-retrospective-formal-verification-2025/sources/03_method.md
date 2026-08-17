1. **Collect traces:** Extract natural-language reasoning steps and context from mathematical problems and model solutions.

2. **Formalize steps:** Convert each step into a Lean 4 proposition with required assumptions and local goals.

3. **Execute verification:** Run the Lean proof checker; passing steps are formally provable, while failures are corrected or rejected.

4. **Build data and train:** Organize 30,809 FormalStep records for verifier or reasoning training; reproduction must fix Lean, library versions, and the translation model.
