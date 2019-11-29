 function helloProperties(obj) {
	 var elements = [];
	 var template = "Hello";

	 if(typeof obj == "object" && Object.keys(obj).length > 0){
   		
	 
		for (const [key, value] of Object.entries(obj)) {
		   
		     elements.push(template+"-"+key);
		}

	}

	return elements;

}

