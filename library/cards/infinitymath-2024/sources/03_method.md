Step 1:
Input: A solved item from one of seven public math datasets.
Operation: Extract numerical constants, replace them with named placeholders, and formulate a number-independent generic problem with valid-value constraints.
Output and transition: The original problem becomes a reusable template plus a variable specification.
Check / stop rule: Reject malformed extractions or constraints that cannot reconstruct the source item.

Step 2:
Input: The generic problem, extracted numbers, and source answer.
Operation: Prompt the teacher to write a function-style Python program with a docstring and line comments that explain the invariant computation.
Output and transition: A unified program and its instantiated original-problem solution move to execution.
Check / stop rule: Require the declared output structure and executable code rather than free-form prose alone.

Step 3:
Input: The instantiated program and source ground-truth answer.
Operation: Execute in Python and compare the result with the known answer; after failure, provide interpreter feedback and request a minimal repair.
Output and transition: Passing records move to release; one repaired candidate may be rechecked.
Check / stop rule: Stop and discard when execution still fails or the result disagrees after the repair opportunity.

Step 4:
Input: A checked generic record with variable constraints.
Operation: Substitute new valid numbers, remove obsolete assignments or docstring fragments, execute again, and serialize the expanded demonstration for SFT.
Output and transition: Number-varied problem-program-answer examples train a 7B consumer or support robustness evaluation.
Check / stop rule: Every expanded instance must execute, match its generated answer, and stay inside the declared semantic constraints.
