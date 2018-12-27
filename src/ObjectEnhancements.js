/**
 * Get person details using object shorthands
 * 
 * @returns {object} Name and age of Person
 */
function getPerson()
{
    let firstname = 'John';
    let lastname = 'Doe';
    let age = 20;

    /* Same as:
    *  return {
    *    firstname: firstname, 
    *    lastname: lastname, 
    *    age: age,
    *    introduceSelf: function() {
    *       return 
    *           "Hi, I am " + this.firstname + " " + ${this.lastname} + ", " + ${this.age} + " years of age. " +
    *           "It is nice to finally meet you.";
    *    }
    *  }
    */
    return {
        firstname, 
        lastname, 
        age,
        introduceSelf() {
            return `
                Hi, I am ${this.firstname} ${this.lastname}, ${this.age} years of age.
                It is nice to finally meet you.
            `;
        }
    }
}

console.log(getPerson().introduceSelf());

/**
 * Get person details using object destructuring
 * 
 * @returns {object} Name and age of Person
 */

 let car =  {
      
 }