const schedules = {


"Opener":[

{
time:"7:00 AM",
task:"MSR",
note:"1 Partner GM / 1 Partner Grocery"
},

{
time:"8:00 AM",
task:"Returns",
note:"1 Partner Curbside / 1 Partner Service"
},

{
time:"9:00 AM",
task:"Break"
},

{
time:"9:15 AM",
task:"Produce Stocking"
},

{
time:"10:30 AM",
task:"Floor Walk (Fresh)"
},

{
time:"11:00 AM",
task:"Lunch"
},

{
time:"11:30 AM",
task:"MSR",
note:"1 Partner GM / 1 Partner Grocery"
},

{
time:"12:15 PM",
task:"Returns",
note:"1 Partner Curbside / 1 Partner Service"
},

{
time:"12:45 PM",
task:"Break"
},

{
time:"1:00 PM",
task:"Midday"
},

{
time:"3:00 PM",
task:"Returns"
}

],



"Mid Shift":[

{
time:"11:00 AM",
task:"Returns"
},

{
time:"12:30 PM",
task:"Break"
},

{
time:"12:45 PM",
task:"Register Check"
},

{
time:"1:00 PM",
task:"Midday"
},

{
time:"3:00 PM",
task:"Lunch"
},

{
time:"3:30 PM",
task:"Returns"
},

{
time:"4:00 PM",
task:"MSR"
},

{
time:"5:00 PM",
task:"Floor Walk (Center)"
},

{
time:"5:30 PM",
task:"Returns"
},

{
time:"6:30 PM",
task:"Break"
},

{
time:"6:45 PM",
task:"Curbside & Fresh Returns"
}

],



"Closing Shift":[

{
time:"1:00 PM",
task:"Midday"
},

{
time:"3:00 PM",
task:"Break"
},

{
time:"3:15 PM",
task:"Register Check / Returns"
},

{
time:"4:00 PM",
task:"Floor Walk (Center)"
},

{
time:"4:30 PM",
task:"Returns"
},

{
time:"5:30 PM",
task:"Lunch"
},

{
time:"6:00 PM",
task:"Returns"
},

{
time:"7:00 PM",
task:"MSR"
},

{
time:"8:00 PM",
task:"Break"
},

{
time:"8:15 PM",
task:"Floor Walk (Center)"
},

{
time:"8:45 PM",
task:"Returns / Lead Checklist"
}

]


};



const shift = document.getElementById("shift");

const scheduleDiv = document.getElementById("schedule");



shift.addEventListener("change", function(){


const tasks = schedules[shift.value];


if(!tasks){

    scheduleDiv.innerHTML="";

    return;

}



scheduleDiv.innerHTML = `

<h2>${shift.value}</h2>


${

tasks.map(item => `


<div class="task">


<strong>${item.time}</strong>


<br>


${item.task}


${

item.note

?

`<small>${item.note}</small>`

:

""

}


</div>


`).join("")

}



<div class="notes">


<h3>Notes</h3>


<p>* MSR = 1 Partner GM / 1 Partner Grocery</p>

<p>** Returns = 1 Partner Curbside / 1 Partner Service</p>


</div>


`;



});
