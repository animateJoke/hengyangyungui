require(["config"], function() {
	require(["jquery"], function($) {
		$(function() {
			$.ajax({
				url: "http://101.200.60.236:9090/mng/mng",
				type: "get",
				dataType: "json"
			}).then(function(res) {
				console.log(res)

				for(var i = 0; i < res.length; i++) {
					obj = res[i];
					var str = '<tr data-info="' + res[i].id + '"><td><span>' + res[i].title + '</span></td><td>' + res[i].neditor + '</td><td><p>' + res[i].message + '</p></td><td>' + res[i].time + '</td><td>' + res[i].ntype + '</td><td><a href="#">删除</a></td></tr>';
					$("#tab").append(str)
				}
				$("#tab tr td a").on("click", function() {
					$.ajax({
						url: "http://101.200.60.236:9090/mng/del",
						type: "post",
						dataType: "json",
						data: {
							id: $(this).parents("tr").data("info")
						}
					}).then(function(res) {
						console.log(res);
					});
					$(this).parents("tr").remove()
				})
			});

		});
	})
})

