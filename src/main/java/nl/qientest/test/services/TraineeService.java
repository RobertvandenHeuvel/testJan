package nl.qientest.test.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import nl.qientest.test.domein.Trainee;
import nl.qientest.test.repositories.TraineeRepository;

@Service
@Transactional
public class TraineeService {
	@Autowired
	TraineeRepository tr;

	public Iterable<Trainee> alleTrainees() {

		return tr.findAll();

	}

	public Trainee saveTrainee(Trainee trainee) {
		return tr.save(trainee);

	}
}
