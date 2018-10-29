window.onload = function () {
    var blocks = [];
    blocks = document.querySelectorAll(".block-animate");

    setTimeout(function(){
        for(var i = 0; i < blocks.length; i++) {
            blocks[i].classList.add("on");
        }
    }, 1000);



    // blocks = window.getComputedStyle(
    //     document.querySelectorAll('.block-animate'), ':after'
    // ).getPropertyValue('width');
    
 

}