var slide_number = 0;
var layer = true;
var current_gallery_image = 0;
var g_image_order = 0;
var images = [
    "slide2.jpg1",
    "slide1.jpg1",
    "slide3.jpg1",
    "slide4.jpg1"
];
var gallery_image = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg"
];

$('#img_below').data('inforamtion', "img_below");
$('#img_above').data('inforamtion', "img_above");
$('#slideshow_text').data('information', "this is show text");
/*Липкий header*/

var circle_height = $('.circle_menu').height();
console.log(circle_height);

//-----------------sticky header end------------------------------------------
function find(mass, value){
    console.log(mass.length);
    for (var i = 0; i < mass.length;  i++){
        if (mass[i] == value){
            return i;
        }
    }
    return -1;
}




//timer ------------------------------

var clock = $('.my_timer').FlipClock();
clock.setTime(36000);
clock.start();

//timer end -----------------------------



//slide_show start 
function get_slide(mass, position, value){
    if (position == 'next'){
        if (value >= (mass.length-1)){
            value = 0;
        } else {
            value++;
        }
        console.log(slide_number);
        return value;
    } else if (position == 'prev'){
        if(value <= 0){
            value = (mass.length-1)
        } else {
            value--;
        }
        return value;
    }
}


//анимация надписи для класса slideshow
$('#next').on('click', function(){
    slide_show('100%', 'next');
})

$('#prev').on('click', function(){
    slide_show('-100%', 'prev');
})


function slide_show(value, direction){
    slide_number = get_slide(images, direction, slide_number);
    
    $('#slideshow_text').animate({
        top: '-25%',
        opacity: 0
    }, 500, function(){
        $(this).css({
            top: "30%"
        })
        if (layer == true){
             layer = false;        
            $('#img_above').attr('src', images[slide_number]);
            $('#img_below').animate({
                right: value
            }, 500, function(){
                $(this).css({right: 'auto'});
                $(this).css({'z-index': 98});
                text_up();
            })    
        } else {
            layer = true;
            $('#img_below').attr('src', images[slide_number]);
            $('#img_above').animate({
                right: value
            }, 500, function(){
                $(this).css({right: 'auto'});
                $('#img_below').css({'z-index': 99});
                text_up();
            });
        } 
    });
    
   
}
//-------------------------------------------------------
function text_up(){
   $('#slideshow_text').animate({
       top: '0',
       opacity: 1
   }, 500); 
}


//end slide show
$('#edit_name').data('value', 'Name');
$('#edit_phone').data('value', 'Phone');


$('#edit_name, #edit_phone').on({
    focus: function(event){
        $(event.target).attr('value', "");
    },
    focusout: function(event){
        var elem = event.target;
        var value = $(event.target).data('value');
        $(elem).attr('value', $(elem).data('value'));
        console.log('focus out');
    }
})

//---------------------------------------------------------
//sales start-----------------------------------------------


//sales end---------------------------------------------------

//gallery start--------------------------
$('#modal_close').on('click', function(){
    $('.modal_window').css({
        display: 'none'
    })
});


$('#gallery').on('click', function(event){
    var image = event.target;
    current_gallery_image = $(image).attr('src');
    $('.modal_window').css({
        display: 'block'
    })
    g_image_order = find(gallery_image, current_gallery_image);    
    $('#g_big_image').attr('src', current_gallery_image);
    
})

function g_change_image(value){
    g_image_order  = get_slide(gallery_image, value, g_image_order);
    console.log('image order = ', g_image_order);
    $('#g_big_image').attr('src', gallery_image[g_image_order]);
}

$('#g_next').on('click', function(){
   g_change_image('next');
})

$('#g_prev').on('click', function(){
    g_change_image('prev');
})
//gallery end ------------------------------