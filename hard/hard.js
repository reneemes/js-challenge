function createPerson(name, ssn) {
  const PII = {
    name: name,
    SSN: ssn
  }

  return {
    getName: function() {
      return PII.name;
    },
    getSSN: function() {
      return undefined;
    }
  }
}

const patient2 = createPerson('John', '123-45-6789');
console.log(patient2.names);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());