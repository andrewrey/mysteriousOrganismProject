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

const pAequorFactory = (num, dnaArray=mockUpStrand()) => {
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
        compare(pObject){
            let counter = 0;
            this.dnaArray.forEach((item, index) => {
                this.dnaArray[index] === pObject.dnaArray[index]? counter++: null;
            })
            console.log(counter);
            let percentageSame = counter / this.dnaArray.length;
            return `Specimen #${this.num} and specimen #${pObject.num} have ${Math.round(percentageSame * 100)}% DNA in common.`; 
        }, 
    };
};
  
  
 let first = pAequorFactory(1);
 let second = pAequorFactory(2);

 console.log(first);
 console.log(second);
 console.log(first.compare(second));