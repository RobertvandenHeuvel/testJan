package nl.qientest.test.domein;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Trainee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	String voornaam;
	String achternaam;
	String geboortedatum;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getVoornaam() {
		return voornaam;
	}
	public void setVoornaam(String voornaam) {
		this.voornaam = voornaam;
	}
	public String getAchternaam() {
		return achternaam;
	}
	public void setAchternaam(String achternaam) {
		this.achternaam = achternaam;
	}
	public String getGeboortedatum() {
		return geboortedatum;
	}
	public void setGeboortedatum(String geboortedatum) {
		this.geboortedatum = geboortedatum;
	}
	
	
}
