    function openFileExplorer() {
      const fileInput = document.getElementById('fileInput');
      fileInput.click();
    }

    document.getElementById('fileInput').addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
          const currentImage = document.getElementById('currentImage');
          currentImage.src = e.target.result;
          currentImage.style.width = 200+"px";
          currentImage.style.height = 200+"px";
        };

        reader.readAsDataURL(file);
      }
    });

