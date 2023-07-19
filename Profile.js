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


    function checkAndSave() {

        var form1Value = document.getElementById("form1").value;
        var form2Value = document.getElementById("form2").value;
        var form3Value = document.getElementById("form3").value;
        var form4Value = document.getElementById("form4").value;

        if (form1Value === '' || form2Value === '' || form3Value === '' || form4Value === '') {
            alert("Помилка! Заповніть усі 4 форми.");
        } else {
            alert("Інформація збережена");
        }
    }



