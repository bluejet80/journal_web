
owl_index= {
    "p1" : { "i1" : "Quotes; I felt this evening, in the course of a solitary walk in the most beautiful weather" },
    "p2" : { "i1" : "If they so wish to speak to me then let them make the effort to come to where I am.", 
            "i2" : "I so dispise the everlasting tactics of envious routine against growing talent."},
    "p3" : { "i1" : "[7.28.11] I can never tell whether I am being incredibly lazy or just giving myself a break." },
    "p4" : { "i1" : "Whether we allow it to control us or if we choose to perform the necessary work to understand how it works… " },
    "p5" : { "i1" : "Soon I will be going on an adventure to an alien world." },
    "p6" : { "i1" : "I am filled with great enthusiasm when I read about the triumph of 'Hernani' " },
    "p7" : { "i1" : "So many things are just discarded by our society and pass… ",
          "i2" : "Some Other things were written too. " },
    "p8" : { "i1" : "Probably the greatest human invention of the wheel, the beginning of commerce." },
    "p9" : { "i1" : "Did she ask me to teach her how to play the cello because she wanted to have sex with me? " },
    "p10" : { "i1" : "Notes from “maldoror” by Lautreamont" },
    "p11" : { "i1" : "Imagine if you anticipated being reincarnated 150yrs from now and you wanted to leave a hint for yourself. ",
		  "i2" : "Some Other things were Written too. " },
    "p12" : { "i1" : "The essence is captured in the image of a train, a steam locomotive… " },
    "p13" : { "i1" : "The steam creates a magical atmosphere as if the magician just caused… "},
    "p14" : { "i1" : "A clean window means one of two things either humans rarely come in contact with it or… ",
         "i2" : "Just step inside, shut the door, and hit the forward button.." ,
         "i3" : "Emotions were created to facilitate communication and language." }
};


// Actual Section

// 1. Create thumbnail function
function createThumb (pagenum) {
let imgfldr = "images/";
let source = imgfldr + "pg" + pagenum + ".jpg";
document.write('<div class="thumb"><a href="' + source + '">');
document.write('<img src="' + source + '" alt="pg' + pagenum + '"></a></div>');
}


// 2. Create Details
function createDetails(journal_name, pagenum) {
let index = 1
document.write('<div class="details">');
document.write('<h2 class="title">' + journal_name + ' - pg ' + pagenum + ' <span style="font-size:1ch;">of 119</span></h2><ul>');
for(let i=1;i<5;i++){

var page_ref = "p" + pagenum;
var index_ref = "i" + index;
var stop = owl_index[page_ref][index_ref]
if (stop == undefined){break}
document.write('<li>' +  owl_index[page_ref][index_ref] + '</li>');
index ++;
}

document.write('</ul></div>')
}

// 3. Create Details Page
function createDetailsPage (pagenum) {
document.write('<div class="right"><a href="details/pg' + pagenum + '.html">')
document.write('Details</a></div>')
}

// 4. Create Node

function createNode(pagenum) {
for(let i=1;i<=30;i++) {
var page_ref = "p" + pagenum;
var stop = owl_index[page_ref]
if (stop == undefined){break}
document.write('<div class="node">');
createThumb(pagenum);
createDetails("Owl Journal", pagenum);
createDetailsPage(pagenum);
document.write('</div>');
pagenum++
}

}










