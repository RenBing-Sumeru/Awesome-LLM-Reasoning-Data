1. **Aggregate existing benchmarks:** Collect specifications and programs from multiple public Dafny, Verus, and Lean sources, retaining source IDs and licence information and removing evident duplicates.

2. **Translate and add tasks:** Convert some Python, APPS, and HumanEval problems into Dafny or Lean specifications and create new Hoare-style tasks from sources such as NumPy documentation, normalizing holes and file components.

3. **Analyze compilation quality:** Run each file with its native tool. Files that compile up to `sorry` or `assume false` become tasks, while failed translations and non-compiling files remain in `issues`, avoiding the false claim that every one of 12,504 is directly verifiable.

4. **Evaluate models uniformly:** Have off-the-shelf LLMs fill holes, assemble complete files, run verifiers, and record success and syntax, type, or proof failures, with or without natural-language descriptions. Reproduction requires fixed toolchains, prompts, retries, and timeouts.
