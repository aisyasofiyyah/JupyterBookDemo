# Discovery Workshop 

::::{tabbed} AI Capabilities
:::{image} enterpriseAI.svg
:width: 100%
:align: center
:::
::::

::::{tabbed} Architecture Diagram for Hybrid Cloud Setup
:::{image} hybrid.svg
:class: mb-1
:width: 100%
:align: center
:::
::::

:::::{tabbed} Flow Diagram
::::{image} flowdiagram.png
:class: p-4
:width: 500px
:align: left
::::
:::{sidebar} Flow
:class: text-justify
1) Batch data sources collected into data lake raw zone
2) Raw data are processed with rich processing capabilities
3) Clean data are stored in data lake clean/curated zone
4) Curated data available in DWH via copy or virtual connection
5) Transformed business dataset stored in OLAP database
6) DWH data of interest made available to BI system
7) OLAP data of interest made available to BI system
8) Scheduled reporting jobs store results in report portal
9) Controlled datasets made available to data scientists
10) Data Scientists utilize data lab tool to explore datasets
11) Dataset enhanced analytically are stored in App Data Store
12) Applications access analytically enhanced data via API
13) Event data collected with streaming data pipeline
14) Streaming data stored in OLAP powers real-time dashboards
:::
:::::