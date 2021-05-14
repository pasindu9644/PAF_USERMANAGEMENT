<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@page import="com.Project"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.4.1.min.js"></script>
<script src="Components/User.js"></script>
</head>

<body>


	<div class="container">
		<div class="row">
			<div class="col">
				<h1>User Management</h1>
				<form id="formProject" name="formProject" method="post" action="User.jsp">

					 Name: <input id="uName" name="uName" type="text"
						class="form-control form-control-sm"><br> 
						
					Address: <input id="uAddress" name="uAddress" type="text"
						class="form-control form-control-sm"><br> 
					ProductName: <input
						id="pName" name="pName" type="text" class="form-control form-control-sm"><br>

					
					Date: <input
						id="uDate" name="uDate" type="text" class="form-control form-control-sm"><br>
					Email: <input
						id="uEmail" name="uEmail" type="uDate" class="form-control form-control-sm"><br>
					PhoneNo: <input
						id="pNo" name="pNo" type="text" class="form-control form-control-sm"><br>

					<br> <input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidProjectIDSave" name="hidProjectIDSave" value="">
				</form>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>

				<br>
				<div id="divProjectGrid">
					<%
					Project projectObj = new Project();
					out.print(projectObj.readProject());
					%>

			</div>
		</div>
	</div>

</body>
</html>