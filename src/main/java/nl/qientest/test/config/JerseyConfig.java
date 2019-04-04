package nl.qientest.test.config;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import nl.qientest.test.api.TraineeEndpoint;
import nl.qientest.test.api.UserEndpoint;




@Component
@ApplicationPath("/api")
public class JerseyConfig extends ResourceConfig {
	public JerseyConfig(){
		register(TraineeEndpoint.class);
		register(UserEndpoint.class);
	}
}
