package com;

import com.Project;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ProjectAPI
 */
@WebServlet("/ProjectService")
public class ProjectService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	Project projectObj = new Project();

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ProjectService() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String output = projectObj.insertProject(request.getParameter("uName"), 
				request.getParameter("uAddress"),
				request.getParameter("pName"),
				request.getParameter("uDate"),
				request.getParameter("uEmail"),
				request.getParameter("pNo"));

		response.getWriter().write(output);

	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Map paras = getParasMap(request);
System.out.println("sudycyvauewvyc");
		String output = projectObj.updateProject(paras.get("hidProjectIDSave").toString(),
				paras.get("uName").toString(),
				paras.get("uAddress").toString(),
				paras.get("pName").toString(),
				paras.get("uDate").toString(),
				paras.get("uEmail").toString(),
				paras.get("pNo").toString()
				

		);

		response.getWriter().write(output);
	}


	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Map paras = getParasMap(request);

		String output = projectObj.deleteProject(paras.get("uID").toString());

		response.getWriter().write(output);
	}

	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();

			String[] params = queryString.split("&");
			for (String param : params) {

				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {

		}
		return map;

	}
}
