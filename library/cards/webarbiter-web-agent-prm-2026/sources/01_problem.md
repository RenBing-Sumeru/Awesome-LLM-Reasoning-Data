Web-agent learning often observes only whether an action eventually succeeds. That signal does not explain whether an agent misunderstood the task, ignored page state, or chose an action that was plausible but incompatible with the goal.

WebArbiter asks how a reward model can judge an intermediate web decision in a way that is useful for training. It treats the decision as a comparison between candidate actions under a task intent and an accessibility-tree state, then makes the reasoning behind the preference explicit.
