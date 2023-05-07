const inputFile = document.getElementById('input-file');
const previewImage = document.getElementById('preview-image');

inputFile.addEventListener('change', function() {
  const file = this.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.addEventListener('load', function() {
      previewImage.src = reader.result;
    });
    
    reader.readAsDataURL(file);
  }
});