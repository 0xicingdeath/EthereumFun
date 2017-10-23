pragma solidity ^0.4.0; 

contract Test {  
	uint storedData; 

	function set (uint y) { 
		storedData = y; 
	} 
	function get () returns (uint) {  
		returns storedData; 
	} 
} 
