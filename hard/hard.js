function createPerson(name, ssn) {
  const PII = {
    name: name,
    ssn: ssn
  }

  return {
    getName: function() {
      return PII.name;
    }
  }
}

const patient2 = createPerson('John', '123-45-6789');
console.log(patient2.name);
console.log(patient2.ssn);
console.log(patient2.getName());