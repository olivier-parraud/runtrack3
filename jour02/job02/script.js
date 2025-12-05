function showhide() {
    let text = document.getElementById('text');
    
    // Si elle est visible, on la masque
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}