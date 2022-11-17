function linkViews(fakeNews){
    // Change the color of the timeline circles
    d3.selectAll(".circle").attr("fill", "steelblue");
    d3.select("#news-" + fakeNews.id)
        .attr("fill", "red")
        .transition()
        .duration(200)
        .attr("r", "20")
        .attr("stroke-width", "2")
        .attr("stroke", "grey")
        .transition()
        .duration(200)
        .attr("stroke-width", "0")
        .attr("stroke", "none")
        .attr("r", "5");

    updateText(fakeNews);
}