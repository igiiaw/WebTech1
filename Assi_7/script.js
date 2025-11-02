// jQuery Ready Function
$(document).ready(function() {
    console.log("jQuery is ready!");

    // PART 1: SELECTORS & CSS
    
    // Change Text using .text()
    $('#btn-change-text').click(function() {
        $('#demo-id').text('Changed text');
        $('.demo-class').text('Class selector changed');
        $('p').last().text('Tag selector changed');
    });

    // Change HTML using .html()
    $('#btn-change-html').click(function() {
        $('#demo-id').html('<strong>Text changed</strong>');
    });

    // Change CSS dynamically
    $('#btn-change-css').click(function() {
        $('#demo-id').css({
            'background-color': '#1c1c1cff',
            'color': 'white',
            'padding': '15px',
            'border-radius': '5px'
        });
        $('.demo-class').css('color', '#940000ff');
        $('.demo-class').css('font-size', '30px');
    });

    // PART 2: JQUERY EFFECTS

    // Visibility Methods
    $('#btn-hide').click(function() {
        $('#visibility-text').hide(500);
    });

    $('#btn-show').click(function() {
        $('#visibility-text').show(500);
    });

    $('#btn-toggle').click(function() {
        $('#visibility-text').toggle(500);
    });

    // Fade Methods
    $('#btn-fadein').click(function() {
        $('#fade-image').fadeIn(1000);
    });

    $('#btn-fadeout').click(function() {
        $('#fade-image').fadeOut(1000);
    });

    $('#btn-fadetoggle').click(function() {
        $('#fade-image').fadeToggle(1000);
    });

    // Slide Methods
    $('#btn-slide-toggle').click(function() {
        $('#slide-panel').slideToggle(600);
    });

    // PART 3: DOM MANIPULATION

    // Add & Remove Elements
    let itemCounter = 3;

    $('#btn-add-item').click(function() {
        $('#item-list').append('<li>New Item ' + itemCounter + '</li>');
        itemCounter++;
    });

    $('#btn-prepend-item').click(function() {
        $('#item-list').prepend('<li>Prepended Item ' + itemCounter + '</li>');
        itemCounter++;
    });

    $('#btn-remove-item').click(function() {
        $('#item-list li').last().remove();
    });

    // Modifying Attributes
    let imageToggle = true;
    $('#btn-change-image').click(function() {
        if (imageToggle) {
            $('#attr-image').attr('src', 'img4.jpg');
        } else {
            $('#attr-image').attr('src', 'img3.jpg');
        }
        imageToggle = !imageToggle;
    });

    let linkToggle = true;
    $('#btn-change-link').click(function() {
        if (linkToggle) {
            $('#attr-link').attr('href', 'https://www.youtube.com');
            $('#attr-link').text('YOUTUBE');
        } else {
            $('#attr-link').attr('href', 'https://www.faceit.com/ru/players/igiiaw/stats/cs2');
            $('#attr-link').text('FACEIT');
        }
        linkToggle = !linkToggle;
    });

    // Form Interaction - Live Update
    $('#input-name').on('input', function() {
        let nameValue = $(this).val();
        $('#output-name').text(nameValue || '---');
    });

    $('#input-email').on('input', function() {
        let emailValue = $(this).val();
        $('#output-email').text(emailValue || '---');
    });

    // PART 4: ANIMATIONS

    // Basic Animation
    $('#btn-basic-anim').click(function() {
        $('#anim-box').animate({
            width: '200px',
            height: '200px',
            left: '100px'
        }, 1000);
    });

    // Sequential Animations
    $('#btn-seq-anim').click(function() {
        $('#seq-box')
            .animate({ left: '200px' }, 800)
            .animate({ top: '100px' }, 800)
            .animate({ width: '50px', height: '50px' }, 800)
            .animate({ left: '0px', top: '0px', width: '100px', height: '100px' }, 800);
    });

    // Combined Animation
    $('#btn-combined-anim').click(function() {
        $('#combined-box').animate({
            width: '250px',
            height: '150px',
            opacity: '0.5',
            left: '150px',
            top: '50px'
        }, 1500, function() {
            // Reset after animation
            $(this).animate({
                width: '100px',
                height: '100px',
                opacity: '1',
                left: '0px',
                top: '0px'
            }, 1000);
        });
    });

    // PART 5: MINI PROJECT - IMAGE GALLERY

    // Image Gallery with fade and enlarge
    $('.thumbnail').click(function() {
        let imgSrc = $(this).attr('src');
        let imgAlt = $(this).attr('alt');
        
        // Remove any existing large image
        $('#gallery-display img').fadeOut(300, function() {
            $(this).remove();
        });
        
        // Create and fade in new large image
        let largeImg = $('<img>').attr({
            'src': imgSrc.replace('150', '400'),
            'alt': imgAlt
        }).hide();
        
        $('#gallery-display').append(largeImg);
        largeImg.fadeIn(800);
    });

});