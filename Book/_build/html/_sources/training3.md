# Data Science Track 

## Analytics Lifecycle 

::::{tabbed} Problem Framing 

:::{margin}
![d1](datascience.png)
:::

| Processes | Key Activities |
|-----------|----------------|
|Problem Definition | Root Cause Investigation | 
|Hypotheses Generation | Question Design |
|Identify and characterize the business problem or need |Utilize brainstorming techniques and effectively use divergent thinking processes to uncover potential cause-and-effect relationship |
|Generate (and manage) testable hypotheses | Utilize the FINER criteria to evaluate whether a problem can be translated into a question that can be answered |
::::

::::::{tabbed} Data Sense Making

:::::{margin} 
![d2](datascience2.png)
:::::

::::{dropdown} **Data Profiling**
:title: bg-jb-darkGold
:animate: fade-in-slide-down

:::{panels}
:column: col-sm
:header: text-center bg-jb-gold 
**Technical Quality**
^^^
- Invalid data
- Missing values
- Duplicate data
- Out of range values
---
**Business Quality**
^^^
- Relevance
- Accuracy
- Consistency
- Timeliness
- Comparable
- Completeness
---
**Quantitative Distribution**
^^^
- Shape
- Center
- Spread
- Position
- Outliers
:::
::::

| Processes | Key Activities |
|-----------|---------------|
| Data Identification and Prioritization |</li><li>Articulate the data required to solve the problem</li><li>Reconcile the difference between the data we get and the data we want</li><li>Trace back the business and operational workflows reflected in the data</li><li>Articulate the provenance and governance assumption of the data
| Data Collection and Preparation |</li><li>Extract data from large, structured data stores</li><li>Extract data from unstructured data sources</li><li>Integrate data from multiple sources</li><li>Ensure privacy and protection of data</li><li>Utilize variety of methods to cleanse and/or enrich data</li><li>Map results back to business and operational workflows</li><li>Model the data appropriately for the type of analysis needed
| Data Profiling and Characterization |</li><li>Identify relationships in the data</li><li>Perform exploration of unknown data</li><li>Profile datasets</li><li>Develop and execute a structured process to descrive the aggregate trends, features and culture of data set</li><li>Generate descriptive statistics, frequency analysis, and distribution of data</li><li>Identify and investigate outlier data</li><li>Develop theories that might address the problem
| Visual Exploration |</li><li>Utilize a variety of programmatic and menu-driven visualization tools to examine associations</li><li>Utilize principle of good design to craft visuals appropriate</li><li>Create graphics that help express the context and insight
::::::

::::{tabbed} Analytics Model Development

:::{margin}
![d3](datascience3.png) 
:::

| Processes | Key Activities | Example Methods
|-----------|----------------|--------------
| Making Comparisons |</li><li>Determine appropriate statistical tests and utilize them in basing conclusions</li><li>Apply a wide variety of statistical models, processes, routines and measures to compare two or more groups</li><li>Compare and contrast features of categorical and numerical data sets using appropriate tests</li><li>Apply quantitative measures to describe the properties of sample</li><li>Define and apply statistical significance, confidence intervals, effect size and hypothesis testing</li><li>Differentiate between categorical and continuous data and appropriateness of various testing strategies used for making inferences |</li><li>T-test</li><li>ANOVA / ANCOVA</li><li>McNemar test</li><li>Wilcoxon-Mann-Whitney test</li><li>Kruskal Wallis</li><li>Wilcoxon signed rank test</li><li>Friedman test</li><li>2-way / n-way / factorial ANOVA
| Measuring Associations |</li><li>Utilize visualization methods to examine relationships between different types of data</li><li>Distinguish between an explanatory and response variable and their role in tests of association</li><li>Describe the types of tests used in measuring associations including those in parametric and non-parametric testing</li><li>Relay the difference between an association and a cause-and-effect relationship |</li><li>Chi-square</li><li>Simple linear regression</li><li>Relative risk and odds ratio</li><li>Pearsons’ (R) product-moment correlation coefficient</li><li>Spearman (rho) rank correlations</li><li>Fishers’ exact test</li><li>A priori association rule
| Making Predictions |</li><li>Identify the two classes of prediction models</li><li>Enumerate the types and methods of supervised and unsupervised methods used for prediction models</li><li>Relate the type of prediction problem being asked back to the methods available in statistics, data mining and machine learning</li><li>Recognize common analytics methods such as predictive models, cluster analysis, neural networks and machine learning |</li><li>Multiple regression, logistic regression</li><li>Trees (random forest, GBM)</li><li>Linear smoothing (LOESS)</li><li>Ensemble</li><li>Time-series analysis</li><li>Neural networks, nearest neighbor (instance-based)</li><li>Linear discriminant, support vector, discriminant analysis</li><li>Naive Bayes</li><li>Density estimation
| Detecting Patterns |</li><li>Classify the types of problems that we can solve using pattern recognition</li><li>Describe the various classification approaches</li><li>Illustrate the difference between feature selection and feature extraction</li><li>Describe the difference between classification and discrimination |</li><li>Cluster analysis (statistical cluster K means, spectral clustering GMM)</li><li>Ensemble of decision trees, K nearest neighbor, KNN classifier</li><li>Fisher’s linear discriminant analysis (LDA)</li><li>Naive Bayes classifier</li><li>Artificial neural networks classifier</li><li>Classification and regression tree (CART)
::::

:::::{tabbed} Results Activation

::::{dropdown} **Planning For Your Data Story**
:title: bg-jb-darkGold
:animate: fade-in-slide-down

:::{panels}
:card: border-4 
:header: text-center bg-jb-gold 
**Content**
^^^
- **Why** are we doing this presentation and why should the audience care
- **What** are the key messages?
- **How** will we tell the story?
- **If** this resonates, what will success look like?
---
**Audience**
^^^
- **Who** are the key individuals or groups involved in the discussion?
- **Learning & Decision Styles:** What is the balance needed between education and setting the scope for decisions to be made? How does this vary for the decision makers and their key influencers?
---
**Story**
^^^
- **Structure:** What is the framework for the story?
- **Character:** Who or what are  the key characters and why would the audience empathize?
- **Sense of Urgency:** Why should your audience choose to support now?
- **Delivery Plan:** What is the sequence of people, place, events to tell the story?
---
**Tell**
^^^
**Test:** What is the target level of comprehension and background information required from the audience? Who should be included in the testing of the story? Will it help to involve key members of the audience?
:::
::::
| Processes | Key Activities 
|-----------|----------------
| Solution Evaluation |<li>Conduct data / analytics output interpretation</li><li>Coach and mentor stakeholders</li><li>Perform business validation of the model</li><li>Compare results from various models</li><li>Explore alternative explanations
| Operationalization |<li>Incorporate a set of analytics and insights into business workflow such that a continual, positive benefit is seen and the organizational learning paradigm is realized</li><li>Crate model, usability and system requirements for production</li><li>Deliver production model</li><li>Support the business process change</li><li>Support the implementation of the model</li><li>Assess actionability and impact to operational workflows</li><li>Document and communicate findings (including assumptions, limitations and constraints) 
| Presentation and Storytelling |<li>Communicate effectively with various audiences</li><li>Create data visualization that conveys meaning</li><li>Deliver report with findings</li><li>Evangelize value of analytics / business benefits</li><li>Socialize analytics results, advances
:::::