Training real software-engineering agents is bottlenecked by executable tasks: a pull request must be paired with the right repository revision, dependencies, test oracle, and problem statement before a patch can be evaluated. Missing any of these makes a code change difficult to replay or use as reliable supervision.

ScaleSWE asks how an automated sandbox pipeline can convert large numbers of GitHub changes into runnable agent tasks and trajectory data. It treats environment construction and test behavior as part of the training object rather than leaving them outside a text description.
