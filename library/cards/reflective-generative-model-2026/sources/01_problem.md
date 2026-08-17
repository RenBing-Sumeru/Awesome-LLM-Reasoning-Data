External test-time scaling often relies on a separate process reward model to rank many reasoning trajectories. That can add a large second model and require step-level labels, while outcome-only rewards do not directly identify which intermediate steps made a trajectory trustworthy.

The paper asks whether one reasoning model can generate and evaluate trajectories with far less additional capacity. The goal is to make trajectory selection and controllable thinking length part of one deployable inference system rather than two loosely connected models.
