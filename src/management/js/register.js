require(["config"], function() {
	require(["jquery"], function($) {
		$("#register").on("click", function() {
			$.ajax({
				type: "POST",
				url: "http://101.200.60.236:9090/login/register",
				data: {
					u_name: $("#username").val(),
					u_pwd: $("#password").val(),
					u_post: $("#post").val(),
					u_rank: $("#rank").val()
				}
				
		
			}).then(function(data){
				console.log(data);
			})
		})
	})
})