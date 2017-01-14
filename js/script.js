function Toggler(element) {
    this.element = document.querySelector(element);
};

Toggler.prototype.getElem = function() {
    return this.element;
};

Toggler.prototype.show = function() {
    this.element.style.display = "";
};

Toggler.prototype.hide = function() {
    this.element.style.display = "none";
};

(function(){
    var elem = new Toggler("#section");
    var button = document.querySelector("#btn");
    
    elem.hide();

    button.addEventListener("click", function() {
     
        if(elem.getElem().style.display == "none") {
            elem.show();
        } else {
            elem.hide();
        }
     
    }, false);
})();

