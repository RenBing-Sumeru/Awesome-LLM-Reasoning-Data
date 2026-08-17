Step 1 - Source the task substrate.
Input: public Alpaca and Alpaca-GPT4 instruction pools.
Operation: Normalize source identifiers, media or task inputs, and target fields into the release schema.
Output and transition: Candidate records containing instruction, optional input, output, GPT-2 instruction-following difficulty score, and selection membership advance to target construction.
Check / stop rule: Reject missing inputs, targets, or source provenance.

Step 2 - Write or transform the target.
Input: The normalized candidate and its source evidence.
Operation: a small GPT-2 model computes instruction-following difficulty from conditional loss produces or supplies the target while preserving fields needed for audit.
Output and transition: A serialized instruction, demonstration, caption, rationale, or response advances to verification.
Check / stop rule: A target that cannot be tied back to its input or source annotation is not retained.

Step 3 - Verify and package.
Input: Generated or transformed candidates.
Operation: Apply low instruction-following difficulty scores rank records before fixed-percentage selection; deduplicate and assign release splits where documented.
Output and transition: Passing records form scored Alpaca and Alpaca-GPT4 pools with public 5 percent and 2 percent selected subsets stored as JSON instruction-input-output records with filtering scores and selected splits and advance to training use.
Check / stop rule: Keep only records that pass the stated correctness, grounding, format, or selection contract.

Step 4 - Consume the data.
Input: The released records and the paper's chosen base model.
Operation: Use them for small-subset instruction SFT and compare against random selection and strong-LLM quality scoring over the full instruction pool.
Output and transition: A trained checkpoint and controlled evidence about the data intervention become the final evaluated artifacts.
Check / stop rule: Judge both target-task quality and regression on general capabilities; no universal early-stopping threshold is disclosed.

Reproducibility requires pinning source revisions, the public manifest, transformation prompts, teacher version, filters, split, base checkpoint, and evaluation harness. The complete generation budget is not disclosed.
