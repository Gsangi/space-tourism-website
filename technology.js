let techData;

$(document).ready(function() {

    $.getJSON("data.json", function(data) {
        techData = data.technology;  
    
        attachTechClickListener();
    });
});

function attachTechClickListener() {
    $('.rocket-carasoul div').click(function() {
        const techIndex = $(this).index();  

        if (techData[techIndex]) {
            
            $('.technology-content h1').text(techData[techIndex].name);
            $('.technology-content p:last-child').text(techData[techIndex].description);
            // $('.technology-rocket-image img').attr('src', techData[techIndex].images.portrait);
        }
    });
}
