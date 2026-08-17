1. **Design skill coverage.** Sixteen agent tasks are selected and mapped to five core skills with unified environment interfaces and a shared trajectory schema.
2. **Generate interaction trajectories.** Experts, strong models, or environment policies execute tasks while preserving instructions, thoughts, actions, observations, and terminal feedback.
3. **Filter execution quality.** Records are removed when environment success, action executability, format, or trajectory completeness fails.
4. **Reduce difficulty bias.** A new annotation pipeline adjusts sampling and labeling so easy tasks do not dominate the data.
5. **Form AgentBank.** Balancing skills, tasks, and difficulty yields more than 50K trajectories for trajectory tuning of the Samoyed model family.
