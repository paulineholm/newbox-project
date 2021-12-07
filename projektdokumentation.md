# Projektdokumentation

#### Navn: Pauline Holm

##### Hold: 1146521c105 / WU05

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](https://newsbox-pholm.netlify.app)


## Teknologier

-   HTML
-   CSS
-   JavaScript
-   Gulp + Babel
-   SASS

---


### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

_"@babel/core": "^7.14.0"_ hoved core af Babel complier - dvs. coren af automatisering set up/processen brugt i opgaven. Gør at alle elementer bliver transformet og samlet rigtigt.
_"@babel/preset-env": "^7.14.1"_ - samling af plugins, da tilpasser sig automatisk til de target-miljøer som man bruger i sit projekt. Babel Preset hjælper som udgangspunkt i at støtte enhver JavaScript script, lige meget syntax.
_"gulp": "^4.0.2"_ - Samling af processer da gør workflowet bedre og mere flydende. Automatiseret og mere efektivt måde at arbejde på.
_"gulp-babel": "^8.0.0"_ - Plugin til gulp - se beskrivelsen øverst.
_"gulp-concat": "^2.6.1"_ - komplier af filer ifølge tasks vi har oprettet.
_"gulp-connect": "^5.7.0"_ - en pakke da lader os køre LiveServer på projektet vi arbejder. Dvs. på "localhost:**"
_"gulp-image-resize": "^0.13.1"_ - fornemt resizing af billeder, mange muligheder - bl.a. bredde, højde, crop, kvalitet, filter. Baseret på GraphicsMagick og ImageMagick
_"gulp-imagemin": "^7.1.0"_ - minifying af billeder - vigtigt for load hasthigheden.
_"gulp-rename": "^2.0.0"_ - plugin for nemmere automatiseret re-navngivning
_"gulp-sass": "^4.1.0"_ - støtten for complier af scss => css
_"gulp-sourcemaps": "^3.0.0"_ - koordinering af source mappen
_"gulp-uglify": "^3.0.2"_ - complier af koden i build processen, hvor den bliver skrevet på en linje
_"node-sass": "^5.0.0"_ - complier af scss => css, samler filer i dist og build


_Koden til enkelte elementer blev inspireret af W3Schools. Resten af dokumentation der blev øvet kom fra MDN._

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

Jeg har ikke gjort større ovevejelser ift valg af animationer. Har dog brugt alt jeg har lært so far på uddannelsen, har forsøgt at være så brugervenligt som muligt.


---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Det gik godt med prioritering, da jeg lagde fokus på at lære og øve mig mest muligt. Det ville sige, at jeg ville hellere forstår alle processer og afhængigheder rigtigt, end at blive alt for ambitiøs ift alle "ekstra" ting i opgaven. Det tror jeg er vigtigt ift fremtiden på arbejdsmarked, samt selv-udvikling.

---
### En beskrivelse af særlige punkter til bedømmelse

```js at dataconv.js

	//Forsøger på at publishe data til arkviet, den kan kun console.logges()
	// LocalStorage

    // Get og set data

    saveIconDyn.addEventListener('click', e => {

    let savedData = JSON.parse(localStorage.getItem('savedArticles')) || [];

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
	```

	```js at modeToggle.js (har også forsøgt at teste funktionen på at skifte href på <link>)
		function toggleTheme() {
    	
    	let styleArray = document.querySelectorAll('link[rel="alternate stylesheet"]');
    	let lightSS = styleArray[0];
    	let darkSS = styleArray[1];

    	//console.log(lightSS.disabled)


    	//console.log(lightSS)
    	if(lightSS.disabled == false){
        lightSS.setAttribute("disabled", true);
        darkSS.setAttribute("disabled", false);
    }
}

const toggleBtn = document.querySelector(".toggle__modeBtn");

toggleBtn.addEventListener("click", toggleTheme);

	```