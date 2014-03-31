var br = new BookReader();
br.IIIF({
    url: 'http://www.shared-canvas.org/impl/demo1d/res_human/manifest.json',
    sequenceId : 'http://www.shared-canvas.org/impl/demo1d/res_human/sequence/normal.json',
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
