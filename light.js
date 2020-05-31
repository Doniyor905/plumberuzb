function ozgartir() {

  let id = document.getElementById("rasim");

  let tit = document.getElementById("sarlavha")

  if(id.src.match("lighton")  ){

    tit.style.color = 'blue'
    tit.textContent= "o'chiq"
    id.src="lightoff.jpg"
  }else
  {
    tit.textContent= "yoniq"
    tit.style.color = 'red'
    id.src="lighton.jpg"
  }
}

// function ozgartir() 

	
//   let id = document.getElementById("rasim");

//   let tit = document.getElementById("sarlavha")

//   if(id.src.match("light")  ){

//     // tit.style.color = 'blue'
//     // tit.textContent= "ochiq"
//     id.src="light.jpg"
//   }else
//   {
//     // tit.textContent= "yoniq"
//     // tit.style.color = 'lightblue'
//     id.src="light1.jpg"
//   }
