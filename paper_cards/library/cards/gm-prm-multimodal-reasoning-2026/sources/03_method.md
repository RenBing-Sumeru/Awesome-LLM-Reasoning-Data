The authors use a strong vision-language model to produce initial annotations and filter them with agreement checks. They train the model to generate three judgement dimensions and a correction, then use the resulting process feedback in refined best-of-N selection.

The construction intentionally retains both correct and incorrect reasoning steps. That allows the consumer to learn what an image-relevant step should accomplish, what visual evidence it fails to use, and how the solution should proceed after the first diagnosed error.
