function linkViews(fakeNews){
    // This function changes the colors of the timeline to match the historical news chosen
    // It calls updateText to change the text description to match that fake news

    // Change the color of the timeline circles
    d3.selectAll(".circle").attr("fill", "steelblue");
    d3.select("#news-" + fakeNews.id)
        .attr("fill", "red")
        .transition()
        .duration(200)
        .attr("r", "20") // Make circle increase in size then decrease to "pop out"
        .attr("stroke-width", "2")
        .attr("stroke", "grey")
        .transition()
        .duration(200)
        .attr("stroke-width", "0")
        .attr("stroke", "none")
        .attr("r", "5");

    updateText(fakeNews);
}