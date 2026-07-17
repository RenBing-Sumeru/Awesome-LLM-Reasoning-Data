The paper uses per-sample gradient magnitude as a signal of alignment tension. High-gradient records tend to produce larger drift, while moderate-gradient records can still support task learning with smaller safety loss.

The selection rule therefore avoids both indiscriminate full-data training and a low-gradient-only subset. It prefilters loss outliers and chooses examples nearest the median gradient magnitude.
