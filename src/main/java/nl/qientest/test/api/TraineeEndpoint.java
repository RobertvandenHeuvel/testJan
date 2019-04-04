package nl.qientest.test.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import nl.qientest.test.domein.Trainee;
import nl.qientest.test.services.TraineeService;

@Component
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("tra")

public class TraineeEndpoint {
	@Autowired
	TraineeService ts;

	@GET

	public Response proberen() {
		Iterable<Trainee> trai = ts.alleTrainees();
		return Response.ok(trai).build();

	}

	@POST
	public Response inDatabaseStoppen(Trainee trainee) {
//		System.out.println(trainee.getId());
		Trainee trai = ts.saveTrainee(trainee);
		return Response.ok(trai).build();

	}

}
