const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomInd = Math.floor(Math.random() * this.dna.length);
      let newBase = this.dna[randomInd];
      while (newBase === this.dna[randomInd]) {
        newBase = ["A", "T", "C", "G"][Math.floor(Math.random() * 4)];
      }
      this.dna[randomInd] = newBase;
      return this.dna;
    },
    compareDNA(otherOrganism) {
      let identicalCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          identicalCount++;
        }
      }
      const percentage = ((identicalCount / this.dna.length) * 100).toFixed(2);
      console.log(
        `Specimen ${this.specimenNum} and Specimen ${otherOrganism.specimenNum} have ${percentage}% DNA in Common`
      );
    },
    likelyToSurvive() {
      const cgCount = this.dna.filter(
        (base) => base === "C" || base === "G"
      ).length;
      const percentage = (cgCount / this.dna.length) * 100;
      return percentage >= 60;
    },
    complementStrand() {
      const complementaryBases = {
        A: "T",
        T: "A",
        C: "G",
        G: "C",
      };
      const complementedDNA = this.dna.map((base) => complementaryBases[base]);
      return complementedDNA;
    },
  };
};

const thirtyOrganisms = [];
let organismNum = 1;
while (thirtyOrganisms.length < 30) {
  const organism = pAequorFactory(organismNum, mockUpStrand());
  if (organism.likelyToSurvive()) {
    thirtyOrganisms.push(organism);
  }
  organismNum++;
}

let mostRelated1, mostRelated2;
let highestCommonPercentage = 0;

for (let i = 0; i < thirtyOrganisms.length; i++) {
  for (let j = i + 1; j < thirtyOrganisms.length; j++) {
    const commonPercentage = calculateCommonPercentage(
      thirtyOrganisms[i],
      thirtyOrganisms[j]
    );
    if (commonPercentage > highestCommonPercentage) {
      highestCommonPercentage = commonPercentage;
      mostRelated1 = thirtyOrganisms[i];
      mostRelated2 = thirtyOrganisms[j];
    }
  }
}

console.log("Most Related Organisms:");
console.log(mostRelated1);
console.log(mostRelated2);

function calculateCommonPercentage(organism1, organism2) {
  let identicalCount = 0;
  for (let i = 0; i < organism1.dna.length; i++) {
    if (organism1.dna[i] === organism2.dna[i]) {
      identicalCount++;
    }
  }
  return (identicalCount / organism1.dna.length) * 100;
}

const organism1 = pAequorFactory(1, mockUpStrand());
const organism2 = pAequorFactory(2, mockUpStrand());

// Call the mutate method on organism1
organism1.mutate();
console.log("Mutated organism1:", organism1.dna);

// Call the compareDNA method on organism1 and organism2
organism1.compareDNA(organism2);

// Call the likelyToSurvive method on organism1
console.log("Organism1 likely to survive:", organism1.likelyToSurvive());

// Call the complementStrand method on organism2
console.log("Complementary strand of organism2:", organism2.complementStrand());