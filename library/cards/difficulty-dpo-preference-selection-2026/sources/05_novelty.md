Prior curation often uses broad quality, diversity, or influence scores designed for instruction tuning. This method uses the exact comparative quantity introduced by DPO, making a chosen-rejected pair's current separability the selection decision.

The contribution is not a new DPO loss. It separates a reusable preprocessing step from downstream optimization: selector policy, reference policy, implicit gap, rank, threshold, and retained record can be inspected before a reward model or a different DPO policy consumes the data.
