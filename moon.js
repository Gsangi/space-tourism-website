let planetData;

$(document).ready(function() {
    $.getJSON("data.json", function(data) {
        planetData = data.destinations;  
        
        attachClickListener();
    });
});

function attachClickListener() {
    $('.planet-bar p').click(function() {
        const planetName = $(this).text();  

        
        const matchedData = planetData.find(destination => destination.name.toUpperCase() === planetName.toUpperCase());
        
        if (matchedData) {

            $('.moon-content h1').text(matchedData.name);
            $('.moon-content > p').text(matchedData.description);
            $('.moon-dist-time h2').text(matchedData.distance);
            $('.moon-dist-time h2:last-child').text(matchedData.travel);
            
            const [distance, travel] = $('.moon-dist-time h2'); 
            $(distance).text(matchedData.distance);
            $(travel).text(matchedData.travel);
        }
    });
}
