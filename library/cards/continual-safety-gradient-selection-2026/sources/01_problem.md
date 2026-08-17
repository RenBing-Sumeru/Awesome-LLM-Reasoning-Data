Benign continual fine-tuning can weaken refusal, truthfulness, and other alignment behaviors. The paper argues that drift is not caused equally by all task records: some examples create updates that pull the aligned model back toward pretrained behavior.

It asks which records should be withheld so a model can learn a new task without leaving its safety basin. The target is a data-level intervention, not a new safety dataset or architecture.
