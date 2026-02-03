 let op=false;
     let calculation=localStorage.getItem('calculation');
      if(calculation===null)
      {
        calculation='';
      }
      function updatecalculation(operation,number)
      {
        if(operation==='num'&& op===true)
        {
          calculation='';  
        }
        calculation+=number;  
        op=false;
        displaycalc();
        localStorage.setItem('calculation',calculation); 
      }
      function calc()
      {
        if(calculation!=="")
        {
          calculation=eval(calculation);
          op=true;
        }
        displaycalc();
      }
      function displaycalc()
      {
        document.querySelector('.js-calc').innerHTML=calculation;
      }
      function remlast()
      {
       if(calculation<0)
        { calculation=Math.ceil(Number(calculation)/10);
        }  
       else
          calculation=Math.floor(Number(calculation)/10);
        if(calculation==0)
        {
          calculation="";
        }
       displaycalc();
      }