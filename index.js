// Define the Tree class
class Tree {
    // Constructor that initializes the species property
    constructor(species) {
      this.species = species;
    }
  
    // Static method that provides a general definition of trees
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class that extends Tree
  class Deciduous extends Tree {
    // Constructor that initializes the species and name properties
    constructor(species, name) {
      super(species); // Call the parent class constructor to assign species
      this.name = name; // Assign the name property
    }
  
    // Static method that provides a specific definition for deciduous trees
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`; // Access the parent class definition method and add additional info
    }
  }
  
  // Define the Evergreen class that extends Tree
  class Evergreen extends Tree {
    // Constructor that initializes the species and name properties
    constructor(species, name) {
      super(species); // Call the parent class constructor to assign species
      this.name = name; // Assign the name property
    }
  
    // Static method that provides a specific definition for evergreen trees
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`; // Access the parent class definition method and add additional info
    }
  }
  