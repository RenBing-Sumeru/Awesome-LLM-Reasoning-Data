Use the learnability gap as a preflight test before scaling a teacher-trace pipeline. Generate candidate traces from multiple teacher sizes or styles, measure student perplexity and downstream transfer, and retain teacher identity and trace length as row-level fields.

Mix-Long and Mix-Large provide simple baselines for capacity-aware data composition. They can be compared with learned selectors, curriculum schedules, or student-conditioned rewards. Curators should preserve both accepted and rejected responses so that later audits can separate answer correctness, process quality, and student compatibility.

For Track 8, the paper is best treated as a failure-and-recipe card rather than an open release. Its value lies in exposing hidden construction variables and showing that “stronger teacher” is not an adequate data-quality label.
