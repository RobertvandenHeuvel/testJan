package nl.qientest.test.repositories;

import nl.qientest.test.domein.User;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
//	@Id
//	@GeneratedValue (strategy = GenerationType.AUTO)
//	Long id;
	
	User findByUsername(String username);
}
