 // Main Variables
	
	let theInput = document.querySelector('.get-repos input')
	let getButton = document.querySelector('.get-button')
	let reposData = document.querySelector('.show-data')
			
	getButton.onclick = function(){
			getRepos();
	};
	
	// get repos function
	function getRepos(){
		if(theInput.value ==''){
			reposData.innerHTML = "<span> Please Write Github Username. </span>";
		}else{
		
			// 'https://api.github.com/users/elzerowebschool/repos'

			
			fetch(`https://api.github.com/users/${theInput.value}/repos`)
			.then((respons) => respons.json())
			.then((repositories)=>{
				// Empty The Container
				reposData.innerHTML='';

				// Loop On Repositories
				repositories.forEach((repo)=>{
					repo.length = 10;
					// Create The Main Div Element
					let mainDiv = document.createElement('div');
					
					// Create Repo Name Text
					let repoName = document.createTextNode(repo.name);
					
					// Append The Text To Main Div 
					mainDiv.append(repoName);
					
					// Create Repo URL
					let theUrl = document.createElement('a');
					// Create Text Repo URL  
					let theUrlText = document.createTextNode('Visit');
					// Append The Text  Url 
					theUrl.append(theUrlText);
					// Add URL the text
					theUrl.href=`https://${theInput.value}.github.io/${repo.name}`;
					// Set Attribute Blank
					theUrl.setAttribute('target','_blank')
					
					// Append The theUrl
					mainDiv.append(theUrl)
					
					let startSpan = document.createElement('span');
					let startTextSpan = document.createTextNode(`Start ${repo.stargazers_count}`);
					startSpan.append(startTextSpan)
					mainDiv.append(startSpan)
					
					// add class On Main Div
					mainDiv.className='repo-box'
					
					// Append The  Main Div  show-data
					reposData.appendChild(mainDiv )

				})

			});
		
		}
	
	};
		
	
