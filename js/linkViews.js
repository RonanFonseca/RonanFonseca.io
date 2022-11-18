function linkViews(fakeNews){
    // This function changes the colors of the timeline to match the historical news chosen
    // It calls updateText to change the text description to match that fake news

    // Make all news from that country a darker red

    // Get all news from that country
    let countryNews = myGlobeVis.historyData.filter(d => d.name == fakeNews.name);
    console.log(countryNews)

    console.log(fakeNews)

    // Reset the color of the timeline circles
    d3.selectAll(".circle")
        // .attr("fill", "#0B0B45");
        .attr("fill", d => {
            if(countryNews.includes(d)){
                return "maroon";
            }else{
                return "#0B0B45";
            }

        })


    // Change the circle of the selected fake news and make it red
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
        .attr("r", "8");

    updateText(fakeNews);
}