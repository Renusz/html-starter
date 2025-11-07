
function initPage(){
    currentimage = document.querySelectorAll('img.preview');
    for (let i = 0; i < currentimage.length; i++){
        console.log("Image" + currentimage[i]);
        currentimage[i].setAttribute('tabindex', '0');}               
}
    

function upDate(element){
    document.querySelector('#image').style.backgroundImage = 'url('+ element.src +')'
    document.getElementById('image').innerHTML = element.alt
    
	}

	function unDo(){
    document.querySelector('#image').style.backgroundImage = "none";
    document.getElementById('image').innerHTML = 'Hover and image below to display here'
	
	}

function changeOpacity(element){
    element.style.opacity = "1";
    element.style.width = "11%";
}

function resetOpacity(element){
    element.style.opacity = "0.7";
    element.style.width = "10%";
}