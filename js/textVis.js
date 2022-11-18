function updateText(fakeNews){

    myGlobeVis.description.html(`
                         <div style="width:60vw; max-height:30vh; border-radius: 5px; padding: 20px">
                             <h4>${fakeNews.event}<h3>
                             <h5>${formatYear(fakeNews.year)}, ${fakeNews.name}</h5>    
                             <p>${fakeNews.news}</p>   
                 
                         </div>\``);

    myGlobeVis.newsimage.html(`
                    <img src="img/${fakeNews.image_code}" alt="${fakeNews.alt}">`
    );
}