var tooltip = d3.selectAll(".tooltip:not(.css)");
var HTMLmouseTip = d3.select("div.tooltip.mouse");
var SVGmouseTip = d3.select("g.tooltip.mouse");

d3.select("svg").select("g")
    .selectAll("circle")

    /***** Easy but ugly tooltip *****/ 
    .attr("title", "Automatic Title Tooltip") 

    .on("mouseover", function () {
        tooltip.style("opacity", "1");
        tooltip.style("color", this.getAttribute("fill") );
        
        /***** For an SVG tooltip *****/ 
        
        //"this" in the context of this function
        //is the element that triggered this event handler
        //which will be one of the circle elements.
        var tooltipParent = SVGexactTip.node().parentElement;
        var matrix = 
                this.getTransformToElement(tooltipParent)
                    .translate(+this.getAttribute("cx"),
                         +this.getAttribute("cy"));
        
        SVGexactTip
            .attr("transform", "translate(" + (matrix.e)
                      + "," + (matrix.f-20) + ")");
    
        
        /***** For an SVG tooltip *****/ 
       
        var mouseCoords = d3.mouse(
            SVGmouseTip.node().parentElement);

        SVGmouseTip
            .attr("transform", "translate("
                  + (mouseCoords[0]-10) + "," 
                  + (mouseCoords[1] - 10) + ")");
        
        });