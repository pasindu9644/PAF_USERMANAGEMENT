$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateProjectForm();
	if (status != true) {
		
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid------------------------
	var type = ($("#hidProjectIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "ProjectService",
		type : type,
		data : $("#formProject").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onProjectSaveComplete(response.responseText, status);
		}
	});
});

function onProjectSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divProjectGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidProjectIDSave").val("");
	$("#formProject")[0].reset();
}

// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			
			$("#hidProjectIDSave").val(
					$(this).closest("tr").find('#hidProjectIDUpdate').val());
			$("#uName").val($(this).closest("tr").find('td:eq(0)').text());
			$("#uAddress").val($(this).closest("tr").find('td:eq(1)').text());
			$("#pName").val($(this).closest("tr").find('td:eq(2)').text());
			$("#uDate").val($(this).closest("tr").find('td:eq(3)').text());
			$("#uEmail").val($(this).closest("tr").find('td:eq(4)').text());
			$("#pNo").val($(this).closest("tr").find('td:eq(5)').text());
		});

// REMOVE===========================================
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "ProjectService",
		type : "DELETE",
		data : "uID=" + $(this).data("userid"),
		dataType : "text",
		complete : function(response, status) {
			onProjectDeleteComplete(response.responseText, status);
		}
	});
});

function onProjectDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {

			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();

			$("#divProjectGrid").html(resultSet.data);

		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// CLIENT-MODEL=========================================================================
function validateProjectForm() {
	// NAME
	if ($("#uName").val().trim() == "") {
		return "Insert User Name.";
	}

	// ADDRESS------------------------
	if ($("#uAddress").val().trim() == "") {
		return "Insert Address.";
	}

	// PRODUCT NAME------------------------
	if ($("#pName").val().trim() == "") {
		return "Insert Product Name.";
	}
	// Date------------------------
	if ($("#uDate").val().trim() == "") {
		return "Insert Date.";
	}
	// Email------------------------
	if ($("#uEmail").val().trim() == "") {
		return "Insert Email.";
	}
	// Phone------------------------
	if ($("#pNo").val().trim() == "") {
		return "Insert Phone Number.";
	}
	

	return true;
}