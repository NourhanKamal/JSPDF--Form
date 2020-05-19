let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault()
  
    var text = document.getElementById('text-input').value 
    var fontsize = document.getElementById('fontsize').value
    var myDocument = new jsPDF();

    myDocument.setFontSize(fontsize);
    myDocument.text(text, 20, 20);
    myDocument.save("File.pdf");
    
});