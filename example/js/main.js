var br = new BookReader();
br.IIIF({
    url: 'http://dms-data.stanford.edu/data/manifests/Walters/qm670kv1873/manifest.json',
    sequenceId : 'http://dms-data.stanford.edu/data/manifests/Walters/qm670kv1873/normal',
    maxWidth: 800
});

br.getEmbedCode = function(frameWidth, frameHeight, viewParams) {
    return "Embed code not supported in bookreader demo.";
}

// Book title and the URL used for the book title link
br.bookTitle = 'Open Library BookReader Presentation';
br.bookUrl = 'http://openlibrary.org';
// Override the path used to find UI images
br.imagesBaseURL = 'js/lib/BookReader/images/';

// Let's go!
br.init();

// read-aloud and search need backend compenents and are not supported in the demo
$('#BRtoolbar').find('.read').hide();
$('#textSrch').hide();
$('#btnSrch').hide();
