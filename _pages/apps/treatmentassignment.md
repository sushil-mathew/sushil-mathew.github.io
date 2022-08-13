---
layout: splash
title: Treatment assignment
permalink: /treatmentassignment/
---

## Optimal treatment assignment using covariates

This app allows you to calculate optimal treatment assignments using baseline covariates.
This treatment assignment minimizes the expected mean squared error of estimators for the average treatment effect.
To use this app:

1. Upload a .csv file of baseline covariates (without headers).
2. Choose a prior and estimation method.
3. Choose the number of re-randomization draws and the expected R2 of your covariates for the outcome
4. Calculate optimal design, and then download a .csv file with this design.

The downloaded .csv file contains the original covariates (V1, V2, ...), as well as a new column with the recommended treatment assignment (Dstar).  
To read more about the theoretical background, go to [experimentaldesign.pdf](/files/papers/experimentaldesign.pdf).  
The source code for the app can be downloaded at [https://github.com/maxkasy/optimal-treatment-assignment-app](https://github.com/maxkasy/optimal-treatment-assignment-app) 

<iframe src="https://maxkasy.shinyapps.io/webappdontrandomize/" style="border:none;width:1000px;height:800px;"></iframe>




