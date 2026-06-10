const schedules = {
    weekday: {
        "7-330": [
            "7:00-8:00 MSR",
            "8:00-9:00 Returns Service",
            "9:00-9:15 Break",
            "9:15-10:15 Produce",
            "10:15-11:15 Returns Curbside",
            "11:15-11:45 Lunch",
            "11:45-1:00 Returns Service / Service Return Basket",
            "1:00-1:15 Milk Bottles",
            "1:15-1:30 Break",
            "1:30-3:30 Midday"
        ],

        "1230-9": [
            "12:30-1:30 Curbside Cold Returns",
            "1:30-3:30 Midday",
            "3:30-3:45 Break",
            "3:45-4:15 MSR",
            "4:15-5:45 Wareroom Returns / Service Return Basket",
            "5:45-6:15 Lunch",
            "6:15-6:30 Milk Bottles",
            "6:30-7:30 Curbside Returns",
            "7:30-7:45 Break",
            "7:45-8:15 Service Returns",
            "8:15-9:00 Orphans & Cardboard"
        ],

        "130-10": [
            "1:30-3:30 Midday",
            "3:30-3:45 Milk Bottles",
            "3:45-4:00 Break",
            "4:00-4:45 Produce",
            "4:45-6:15 Returns",
            "6:15-6:45 Lunch",
            "6:45-7:15 MSR",
            "7:15-8:15 Service Returns / Basket",
            "8:15-8:30 Break",
            "8:30-9:45 Returns and Receiving",
            "9:45-10:00 Milk Bottles"
        ]
    },

    weekend: {
        "8-430": [
            "8:00-9:15 Curbside Returns",
            "9:15-10:15 Wareroom Returns",
            "10:15-10:30 Break",
            "10:30-11:30 Produce",
            "11:30-1:00 Service Returns",
            "1:00-1:30 Lunch",
            "1:30-2:30 Midday",
            "2:30-2:45 Break",
            "2:45-4:30 Market"
        ],

        "1230-9": [
            "12:30-1:30 Curbside Cold Returns",
            "1:30-3:30 Midday",
            "3:30-3:45 Break",
            "3:45-4:45 MSR",
            "4:45-5:45 Wareroom Returns",
            "5:45-6:15 Lunch",
            "6:15-6:30 Milk Bottles",
            "6:30-7:30 Curbside Returns",
            "7:30-7:45 Break",
            "7:45-8:15 Service Returns",
            "8:15-9:00 Orphans & Cardboard"
        ],

        "130-10": [
            "1:30-3:30 Midday",
            "3:30-3:45 Milk Bottles",
            "3:45-4:00 Break",
            "4:00-4:45 Produce",
            "4:45-6:15 Returns and Receiving",
            "6:15-6:45 Lunch",
            "6:45-7:15 MSR",
            "7:15-8:15 Service Returns",
            "8:15-8:30 Break",
            "8:30-9:45 Returns and Receiving",
            "9:45-10:00 Milk Bottles / Return Pickup"
        ]
    }
};

const dayType = document.getElementById("dayType");
const shift = document.getElementById("shift");
const scheduleDiv = document.getElementById("schedule");

dayType.addEventListener("change", () => {
    shift.innerHTML = '<option value="">Select Shift</option>';

    if (dayType.value === "weekday") {
        shift.innerHTML += `
            <option value="7-330">7:00 AM - 3:30 PM</option>
            <option value="1230-9">12:30 PM - 9:00 PM</option>
            <option value="130-10">1:30 PM - 10:00 PM</option>
        `;
    }

    if (dayType.value === "weekend") {
        shift.innerHTML += `
            <option value="8-430">8:00 AM - 4:30 PM</option>
            <option value="1230-9">12:30 PM - 9:00 PM</option>
            <option value="130-10">1:30 PM - 10:00 PM</option>
        `;
    }

    scheduleDiv.innerHTML = "";
});

shift.addEventListener("change", () => {
    const tasks = schedules[dayType.value]?.[shift.value];

    if (!tasks) return;

    scheduleDiv.innerHTML =
        "<h2>Today's Tasks</h2>" +
        tasks.map(task => `<div class="task">${task}</div>`).join("");
});
