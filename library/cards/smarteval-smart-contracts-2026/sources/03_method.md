1. **Select specifications and gold:** Natural-language specifications and expert implementations from FSMSCG serve as inputs and references for 9,000 generations.

2. **Generate contracts:** Several LLMs generate Solidity contracts under standard prompts and configurations with metadata.

3. **Five-dimensional evaluation:** An LLM auditor scores functionality, variables, state machines, business logic, and code quality.

4. **External validation:** Three experts review scores and Slither checks security issues; compiler, auditor, and specification versions must be fixed.
