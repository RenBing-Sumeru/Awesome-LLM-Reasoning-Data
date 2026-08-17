Earlier repeated-sampling systems commonly use a fixed best-of-N or raw majority agreement. CaTS makes the reliability of that agreement an explicit learned object and uses it as a controller for inference allocation, rather than treating confidence as a post-hoc diagnostic.

The novelty therefore lies in linking a calibration target to a concrete action: stop, sample again, or aggregate. It does not introduce a new correctness oracle; the method inherits the base model’s answer space and the limitations of self-consistency when many samples share the same systematic error.
