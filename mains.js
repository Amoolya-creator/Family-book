var i = 1; // since we have already display first picture on page load

function nextslide() {
    var images = [
       "http://clipground.com/images/grandmother-clipart-4.jpg",
        "http://images.clipartpanda.com/grandfather-clipart-grandfather5.png",
        "https://www.seekpng.com/png/detail/373-3737886_man-clipart-dad-animated-picture-of-father.png",
        "http://clipartmag.com/images/cartoon-mom-clipart-12.jpg",
        "https://i.pinimg.com/originals/61/2c/b7/612cb73d4284b091530ef6dda0993021.jpg",
        "https://www.clipartkey.com/mpngs/m/63-636927_sister-clip-art-curly-haired-girl-animated.png"
    ];

    document.getElementById("album").src = images[i++];
    if (i > 5) i = 0;
};
