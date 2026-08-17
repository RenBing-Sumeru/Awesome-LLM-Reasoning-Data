HELM correctness is metric correctness under a chosen scenario adapter, not a universal statement about a model. Multi-metric coverage improves reporting but does not remove dataset bias, prompt sensitivity, benchmark contamination, or the limits of automatic scorers.

Because HELM is a living benchmark, result reuse is fragile. API models can change, scenarios can be added or revised, prompt templates can shift, and metric code can be updated. License and redistribution constraints inherit from each underlying scenario and must be checked per dataset.
