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
  
  
// Factory function 

const pAequorFactory = (num, dnaArray) => {
    return {
        num,
        dnaArray,
        mutate(){
            let indexToMutate = Math.floor(Math.random() * this.dnaArray.length);
            let characterAtThatIndex = this.dnaArray[indexToMutate];
            let characterReplacement;
            do{
                characterReplacement = returnRandBase();
            } while (characterReplacement === characterAtThatIndex);
            this.dnaArray.splice(indexToMutate,1,characterReplacement);
            return this.dnaArray;
        },
        
    };
};
  
  
  let first = pAequorFactory(33, mockUpStrand());

  console.log(first);
  first.mutate();
  console.log(first.dnaArray);