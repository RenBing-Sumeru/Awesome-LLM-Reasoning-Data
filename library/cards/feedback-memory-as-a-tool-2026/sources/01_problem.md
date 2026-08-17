Test-time refinement repeatedly reads a rubric, generates critique, and revises each new sample. It can improve quality but incurs repeated reasoning cost, and historical feedback is not accumulated as reusable knowledge. Static prompt summaries also cannot be selected, updated, or retired by task.

The work distils recurring rubric feedback into persistent human-readable memory files and lets an agent retrieve and update them through tools so later tasks reuse prior experience.
