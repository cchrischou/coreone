document.getElementById('clickMeButton').addEventListener('click', function() {
    const body = document.body; 

    const newText = document.createElement('div');
    newText.classList.add('text');  
    newText.innerText = 'memories';

    body.appendChild(newText);

    const bodyWidth = body.clientWidth;
    const bodyHeight = body.clientHeight;

    const randomLeft = Math.random() * bodyWidth; 
    const randomTop = Math.random() * bodyHeight;

    newText.style.left = `${randomLeft}px`;
    newText.style.top = `${randomTop}px`;
});
