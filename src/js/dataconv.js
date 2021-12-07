
document.addEventListener("DOMContentLoaded", ()=> {

    // Data kilder
    const worldData = "https://rss.nytimes.com/services/xml/rss/nyt/World.xml";
    const healthData = "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml";
    const sportData = "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml";
    const busData = "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    const scienceData = "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml";

    // Data destinationer

    const worldDest = document.querySelector(".cat__articleWorld");
    const healthDest = document.querySelector(".cat__articleHealth");
    const sportDest = document.querySelector(".cat__articleSport");
    const busDest = document.querySelector(".cat__articleBusiness");
    const scienceDest = document.querySelector(".cat__articleScience");

    // Fetch

    /**
    * This function coverts a DOM Tree into JavaScript Object.
    * @param srcDOM: DOM Tree to be converted.
    */

    function xml2json(srcDOM) {
    let children = [...srcDOM.children];

    // base case for recursion.
    if (!children.length) {
      return srcDOM.innerHTML
    }

    // initializing object to be returned.
    let jsonResult = {};
  
    for (let child of children) {
  
      // checking is child has siblings of same name. 
      let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;
  
      // if child is array, save the values as array, else as strings. 
      if (childIsArray) {
        if (jsonResult[child.nodeName] === undefined) {
          jsonResult[child.nodeName] = [xml2json(child)];
        } else {
          jsonResult[child.nodeName].push(xml2json(child));
        }
      } else {
        jsonResult[child.nodeName] = xml2json(child);
      }
    }

    return jsonResult;
  }

  // Fetch set up

  //Response
  const success = (response) => response.text()


  // Catch error
  const error = (err) => {
      console.log(err)
  }

function fetchResult(data, destElm, maxResults = 5) {
  fetch(data)
    .then(success)
    .then(result => {
    
    
        const parser = new DOMParser()
        const dataSrc = parser.parseFromString(result, "application/xml");
        return xml2json(dataSrc)
        })
        .then(jsonResult => {

          // Opbygning af strukturen da skal modtage alt data

            const dataSrcNew = jsonResult.rss.channel.item.slice(0, maxResults);
            dataSrcNew.forEach(item => {

            const article = document.createElement("article");
            article.classList.add("cat__article");

            const divIcon = document.createElement("img");
            divIcon.classList.add("cat__articleIcon");
            divIcon.setAttribute("src", "/img/iconfake.png")
            article.appendChild(divIcon);

            const divContent = document.createElement("div")
            divContent.classList.add("cat__artContBox");
            article.appendChild(divContent);

            // Swipers
            // Tilføjer swiper icon til "Gemme" funktionen

            const saveBox = document.createElement("div");
            saveBox.classList.add("cat__saveBox");
            article.appendChild(saveBox);

            // Create icon <i class="fas fa-inbox"></i>

            const saveIconDyn = document.createElement("i");
            saveIconDyn.classList.add("fas");
            saveIconDyn.classList.add("fa-inbox");
            saveIconDyn.classList.add("cat__saveIcon")
            saveBox.appendChild(saveIconDyn);

            // Slut med swiper tilføjelser

            const linkArticleHeadline = document.createElement("a");
            linkArticleHeadline.classList.add("cat__linkArticleHeadline");
            linkArticleHeadline.setAttribute("href", item.link);
            divContent.appendChild(linkArticleHeadline);

            const articleHeadline = document.createElement("h3");
            articleHeadline.classList.add("cat__articleHeadline")
            linkArticleHeadline.appendChild(articleHeadline);

            let newsTitle = document.createTextNode(item.title);
            articleHeadline.appendChild(newsTitle);

            const articleCont = document.createElement("p");
            articleCont.classList.add("cat__articleContent");
            divContent.appendChild(articleCont);

            let newsContent = document.createTextNode(item.description)
            articleCont.appendChild(newsContent);

            destElm.appendChild(article);

            swipeCatch(article, function() {
                // tilføj element i HTML og style på den i CSS med display none
                // skift på display style når funktionen kører
                saveBox.style.display = "flex";
            })

            // LocalStorage

            // Get og set data

            saveIconDyn.addEventListener('click', e => {

              let savedData = JSON.parse(localStorage.getItem('savedArticles')) || [];

              // Husk at forhindre fra at de samme gemmes flere gange
              //Foreach og parse når du henter data i arkivet
             // if (!savedData) savedData = [];

              savedData.push(article.innerHTML)
              let dataSaved = localStorage.setItem('savedArticles', JSON.stringify(savedData));

              // container.innerHTML = dataSaved;

              //console.log(JSON.parse(localStorage.getItem('savedArticles')))
            });

            // Publish data

            /* function publishArchive (){
              let container = document.querySelectorAll(".cat__LSarticleGen");
              container.appendChild.localStorage.getItem('savedArticles', JSON.stringify(savedData));
            } */
            /* let container = document.querySelectorAll(".cat__LSarticleGen");
            container.innerHTML = localStorage.getItem("savedArticles", JSON.stringify(savedData)) */

            //publishArchive();
            /* localStorage.result = localStorage.setItem('savedArticles', JSON.stringify(savedData));
            let container = document.querySelectorAll(".cat__LSarticleGen");
            container,innerHTML = "YOUR ARTICLE" + localStorage.result; */

          });
        })

    .catch(error)
}

fetchResult(worldData, worldDest);
fetchResult(healthData, healthDest);
fetchResult(sportData, sportDest);
fetchResult(busData, busDest);
fetchResult(scienceData, scienceDest);

});

// export {worldDest,healthDest, sportDest, busDest, scienceDest} ;



