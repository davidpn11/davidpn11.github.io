$(function(){
    
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox({gallery_parent_selector : ''});
	});
});
