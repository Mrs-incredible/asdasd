<script>
function postToGoogle() {
                var field1 = $("#key").val();
                
				if(field1 == ""){
					alert('Please Fill Your Name');
					document.getElementById("key").focus();
					return false;
				}
				

//https://docs.google.com/forms/d/e/1FAIpQLSdA5XLyzUR2sS5IPws29VdYIcl0mzZDwpHGRbjx2x2Wou2jPA/formResponse?
				
	
                $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbyAN6XORMHpfl-lhlGGqC-lkGxkSnVTHvAD2IwW6ugHCXuwAzWX/exec",
					data: {"entry.1858612110"": field1},
					       
					      // https://docs.google.com/forms/d/e/1FAIpQLSdA5XLyzUR2sS5IPws29VdYIcl0mzZDwpHGRbjx2x2Wou2jPA/viewform
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
            }
</script>
