let width=900
let height=1200

// init drawing area
svg = d3.select("#imagePlace").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("svg:image")
    .attr("x", 0)
    .attr("y", 0)
    .attr("xlink:href", "img/fakenews.jpg")

svg.append("circle")
    .attr("cx", 220)
    .attr("cy", 180)
    .attr("r", "40")
    .attr("fill", "green")
    .on("mouseover", function(event, d) {
        d3.select(this)
            .attr("fill", "red")
        }
    )
    .on("mouseout", function(event, d) {
        d3.select(this)
            .attr("fill", "green")
})
