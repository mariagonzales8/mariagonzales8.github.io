// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let chosenBase = this.dna[randomIndex];
        let RandBase = returnRandBase();
        while (chosenBase === RandBase) {
          RandBase = returnRandBase();
        }
        const changedDNA = this.dna;
        changedDNA[randomIndex] = RandBase;
        return changedDNA;
      },
      compareDNA(pAequor) {
        let identBases = 0;
        for (i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            identBases++;
          }
        }
      let percentage = identBases/15 * 100;
      percentage.toFixed(2);
      return `Specimen ${specimenNum} and specimen ${pAequor.specimenNum} have ${percentage}% DNA in common.`;
      },
      willLikelySurvive() {
        let count = 0;
        for (i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'G' || this.dna[i] === 'C') {
            count++;
          }
        }
        let percentGC = count/15 * 100;
        if (percentGC > 60 || percentGC === 60) {
          return true;  
        } else {
            return false;
        }
      },
      complementStrand(pAequor) {
        let compStrand = [];
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'A') {
            compStrand.push('T');
          } 
          if (this.dna[i] === 'T') {
            compStrand.push('A');
          } 
          if (this.dna[i] === 'C') {
            compStrand.push('G');
          } 
          if (this.dna[i] === 'G') {
            compStrand.push('C');
          } 
        }
      return compStrand;  
      }
    }   
  }
  
  const Pabbit = pAequorFactory(1, [ 'T', 'A', 'C', 'A', 'G', 'A', 'T', 'A', 'C', 'G', 'A', 'C', 'G', 'A', 'T' ]);
  
  
  const MG = pAequorFactory(2, [ 'T', 'A', 'C', 'G', 'T', 'G', 'C', 'T', 'T', 'A', 'G', 'T', 'C', 'G', 'C' ]);
  
  console.log(MG.mutate());
  
  console.log(Pabbit.mutate());
  console.log(Pabbit.willLikelySurvive());
  
  let thirty = [];
  for (let i = 1; i <= 30; i++) {
    const newOrg = pAequorFactory(i, mockUpStrand());
    if (newOrg.willLikelySurvive() === true) {
      thirty.push(newOrg);
    }  
  }
   console.log(thirty);
  
  console.log(Pabbit.complementStrand());
  
  