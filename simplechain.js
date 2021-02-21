//require SHA256 from Crypto-JS
const SHA256 = require('crypto-js/sha256');

//a class to construct individual blocks
class Block {
    constructor(data){
        this.hash = "",
       this.height = 0,
       this.body = data,
       this.time = 0,
       this.previousblockhash = ""
    } 
}


//class to construct the chain
class Blockchain {
    constructor(newBlock){
        this.chain = [];
        this.addBlock(new Block('This is the first block ever'));
    }
    addBlock(newBlock){
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0, 3);
        if(this.chain.length > 0){
            newBlock.previousblockhash = this.chain[this.chain.length-1].hash;
           }
        this.chain.push(newBlock);
    }
}


let blockVar = new Blockchain();
blockVar.addBlock(new Block("test 1"));
blockVar.addBlock(new Block("test 2"));

console.log(blockVar);