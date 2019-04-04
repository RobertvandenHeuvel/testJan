package nl.qientest.test.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.qientest.test.domein.Trainee;
@Component
public interface TraineeRepository extends CrudRepository<Trainee, Long> {

}
