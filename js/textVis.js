function updateText(fakeNews){

    myGlobeVis.description.html(`
                         <div style="width:40vw; max-height:30vh; border-radius: 5px; padding: 20px">
                             <h4>${fakeNews.year, fakeNews.event}<h3>
                             <h5> Place: ${fakeNews.name}</h5>    
                             <p>${fakeNews.news}</p>   
                 
                         </div>\``);

    myGlobeVis.newsimage.html(`
                    <img src="img/${fakeNews.image_code}">`
    );
}