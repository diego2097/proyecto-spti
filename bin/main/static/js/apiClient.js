apiclient = (function () {
	return {
		login: function (datos, succ, err) {
			$.ajax({
				method: "POST",
				contentType: "application/json",
				url: "/users",
				data: datos,
				success: succ,
				error: err
			});
		},

		
	}
})();