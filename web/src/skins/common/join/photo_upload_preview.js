window.Join = {
  _onSubmit (e) {

  }
}





function onUploadImageChange(input) {
  var file = input.files[0];
  var reader = new FileReader();

  reader.addEventListener('load', function() {
    var div = document.createElement('div');
    div.className = 'upload__imagePreview';
    div.style = 'background-image: url(' + this.result + ')';
    input.parentElement.appendChild(div);
  });

  reader.readAsDataURL(file);
}
