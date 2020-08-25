$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 350 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

function sideNavItemToggle()
{

 	let nav_link=document.querySelectorAll(".side__nav-link"); 	
 	let nav__side__container=document.querySelector(".nav__side__container");
 	let nav_button=document.querySelector(".navbar-button");
  nav_button.addEventListener("click",()=>showText(1));
 	let texts=document.querySelectorAll(".text");
 	
 	for(let i=0;i<nav_link.length;i++)
 	{
 		
 		nav__side__container.addEventListener("mouseover",showText); 		
 		nav__side__container.addEventListener("mouseout",hideText);

 	}
 	function showText(isbutton)
 	{
 		
 		if(isbutton && nav_button.classList[1]!=="show")
 		{
 				hideText();
 				return;	
 		}
 		nav__side__container.style.width="150px";
 		for(let i=0;i<nav_link.length;i++)
 		{
 			texts[i].style.display="inline";
 		}
 		nav_button.classList.remove("show");
 		
 	}
 	function hideText()
 	{
 		nav__side__container.style.width="75px";
 		for(let i=0;i<nav_link.length;i++)
 		{
 			texts[i].style.display="none";
 		}
 		nav_button.classList.add("show");
 	}

 }
function setCards(cards_name,slider_name,button_prev_name,button_next_name)
  	{

  	   //getting the cards dom node and slider node
  	  var cards=document.querySelectorAll(cards_name);
      var slider=document.querySelector(slider_name)
      //slider.style.transform="translateX("0px")";
      //setting the nextslide num , prev slide num and numslide to move
      var next_card=4;
      var prev_card=0;
      var num_cards=4;
      //total no of card
      var totalcards=cards.length;
      //getting the next and prev button dom node 
      var next_button=document.querySelector(button_next_name);
      var prev_button=document.querySelector(button_prev_name);
      //adding the event listener
      next_button.addEventListener("click" ,nextcard)
      prev_button.addEventListener("click" ,prevcard)
      //getting the width first card 
      var pic_width=cards[0].getBoundingClientRect().width;
     
   
  	function setValue()
  	{
  	  //getting the window windth to know the num of slide to move
  	  var window_width=window.innerWidth;
  	  //if it is laptop or computer 
  	  if (window_width>993) {
  	  	 next_card=4;
       	 prev_card=0;
       	 num_cards=4;
  	  }
  	  //if it is the mobile 
  	  else if(window_width<=500)
  	  {
  	  	 next_card=1;
       	 prev_card=0;
       	 num_cards=1;
  	  }
  	  //if it is the tablet 
  	  else
  	  {
  	  	 next_card=2;
       	 prev_card=0;
       	 num_cards=2;
  	  }
      
       pic_width=cards[0].getBoundingClientRect().width;
       setSlide()
      
  	}
      
     
      setValue()
      //adding event listener when resize the card img
     window.addEventListener("resize",setValue)

      //setslide for intial rendering
      function setSlide()
      {
        for(let i=0;i<totalcards;i++)
        {
           //setting the each card with 30 px space 
          cards[i].style.left=""+(pic_width+30)*i+"px"; 
        }
      }
      //function to move the next card
      function nextcard()
      {
      	//checking if the nextslide num that less than total card
        if(next_card<totalcards)
        {
          //getting the amount of the distance to move the slider
          let dis=cards[next_card].style.left;
          //moving the slider
          slider.style.transform="translateX(-"+dis+")";
          //setting the prev_card to next_card
          prev_card=next_card;
          if(next_card+num_cards>=totalcards)
          {
           next_button.style.display="none";
          }
          //if not increase the next card by num of card
          else
          {
            next_card+=num_cards;
          }
          //when user press the next button setting the prev button to visible 
          prev_button.style.display="inline";  
        }
      }
       //function to move the prev card
      function prevcard()
      { 
        if(prev_card>0)
        {
              next_card=prev_card;
              prev_card-=num_cards;
              //getting the amount of the distance to move the slider
              let dis=cards[prev_card].style.left;
              slider.style.transform="translateX(-"+dis+")";
              if(prev_card==0)
              {
              	//if no prev card is hide the prev button
              	 prev_button.style.display="none";
              }
            next_button.style.display="inline";
        }
      }
    }
function swapFromTo(count)
{
  let start;
  let buttons_swap=document.querySelectorAll(".button__swap");
  
  if(count>=0)
  {
    start=count+1;
  }
  else
  {
    start=0;
  }
  
  for(let i=start;i<buttons_swap.length;i++)
  {
  buttons_swap[i].addEventListener("click",swap);
  }
  
  function swap(event)
  {
    let id=event.target.id;
    console.log(id)
    let from_node=document.querySelector(".from"+id);
    let to_node=document.querySelector(".to"+id);
    console.log(from_node.value,to_node.value);
    //swapping the value 
    let temp_val=from_node.value;
    from_node.value=to_node.value;
    to_node.value=temp_val;
    console.log(from_node.value,to_node.value);
    console.log(from_node,to_node);


  }
}
function addFlightForm()
{
  let button__addflight=document.querySelector(".button__addflight");
  button__addflight.addEventListener("click",add);
  var count=0;
  function add()
  {
    let form='<div class="row form"><div class="col-md-auto p-0 ">\
                                <h6>from</h6>\
                               <input type="text" name="from" class="from3'+count+'">\
                               \
                            </div>\
                            <div class="col-md-auto p-0">\
                                <input type="button" name="swap" class="button__swap" id="3'+count+'">\
                                \
                            </div>\
                            <div class="col-md-auto p-0">\
                                <h6>to</h6>\
                                <input type="text" name="to" class="to3'+count+'">\
                            </div>\
                            <div class="col-md-auto p-0">\
                                <h6>departure</h6>\
                               <input type="text" name="departure">  \
                            </div>\
                            <div class="col-md-auto p-0">\
                                <h6>return</h6>\
                                <input type="text" name="return"> \
                            </div>\
                            </div>\
    '
    $(".multi__city").prepend(form);
    count+=1;

    swapFromTo(count);
  }
}
function main()
{
	
	sideNavItemToggle();
	setCards(".card1",".slider1",".button__prev1",".button__next1");
	setCards(".card2",".slider2",".button__prev2",".button__next2");
	setCards(".card3",".slider3",".button__prev3",".button__next3");
	setCards(".card4",".slider4",".button__prev4",".button__next4");
  swapFromTo();
  addFlightForm();
	
}

main();
