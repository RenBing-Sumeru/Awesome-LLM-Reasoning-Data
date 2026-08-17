1. **One-sentence position:** Composition-RL turns saturated easy verifiable prompts into 1.323M harder composed tasks that restore RL signal.

2. **Method hook:** It selects prompts by pass rate, composes instructions and output formats, reuses component verifiers, and increases depth through a curriculum.

3. **Data hook:** Polaris-Composition-1323K centers on subproblems, subanswers, composed prompts, and a joint parsing contract.

4. **Evidence anchor:** Models from 4B to 30B benefit consistently, and curriculum and cross-domain composition help, but token and formatting difficulty also grow.

5. **Reuse decision:** It fits recycling saturated RL data. Test every checker and parser and include token-matched baselines.
