
const inCartMessage = document.getElementById('inCartMessage'); 
const cartMessage = document.getElementById("cartMessage");
const groupApplyBtn = document.getElementById("groupApply");
const hiddenSg_No = document.getElementById("hiddenSg_No");

console.log($("#hiddenSg_No").val());


	groupApply.onclick = function() {
		
		const sg_no = $("#hiddenSg_No").val();
        const user_no = $("#hiddenUser_No").val();
        const sg_level = $("#hiddenSg_Level").val();
        
        $.get('/check/group', {user_no: user_no, sg_no: sg_no})
         .done(function(checkData) {
             if(checkData === false) { 
                 displayMessage(inCartMessage); 
             } else {
                 $.get('/apply/group', {user_no: user_no, sg_no: sg_no, sg_level: sg_level})
                  .done(function(data) {
                      displayMessage(cartMessage); 
                  })
                  .fail(function(error) {
                      console.log("Apply to group failed");
                  });
             }
         })
         .fail(function(error) {
             console.log("Group check failed");
         });
    };

    function displayMessage(element) {
        element.style.display = "block";
        clearTimeout(element.timeoutId);
        element.classList.add('visible');
        element.style.opacity = '1';
        element.timeoutId = setTimeout(function() {
            element.style.opacity = '0';
            setTimeout(() => { element.style.display = "none"; }, 600); // Adjust timing as necessary
        }, 2000); 
    }
	
		/*$.ajax({
			url:"/check/group",
			data: {
				user_no: user_no, 
				sg_no: sg_no
			},
			method:"GET",
			succss: function(data){
				console.log(data);
				if(data == false){
				
				} else {
				    cartMessage.style.display = "block";
				  	clearTimeout(cartMessage.timeoutId); 
				  	cartMessage.classList.add('visible'); 
				  	cartMessage.style.opacity = '1'; 
				  	cartMessage.timeoutId = setTimeout(function() {
				  	cartMessage.style.opacity = '0'; 
					}, 2000)
					$.ajax ({
						url:"/apply/group", 
						data: { 
							user_no: user_no, 
							sg_no: sg_no,
							sg_level: sg_level
						},
						method: "GET",
						success: function(data){
							console.log("성공")
						},
						error: function(status, error){
							console.log(status, error, "에러")
						}
					});	
				},
				error: function(status, error){
							console.log(status, error, "에러")
						}
		
			}
		})
		*/
	



