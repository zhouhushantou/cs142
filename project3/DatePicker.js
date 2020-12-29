
class DatePicker {
    constructor(divId, callback) {
        this.id = divId;
        this.callback = callback;
    }
    render(inputDate) {
        this.inputDate = inputDate;
        document.getElementById(this.id).innerHTML = '';
        const fixedDate = {
            'month': inputDate.getMonth() + 1,
            'day': inputDate.getDate(),
            'year': inputDate.getFullYear()
        }
        this.callback(this.id, fixedDate);

        //draw the calender header
        document.getElementById(this.id).innerHTML += "<div id='head'><button id='minus'><</button>" + "<b1>" + fixedDate.year + "</b1><b1>"
            + fixedDate.month + "</b1><button id='add'>></button></div>";
        document.getElementById(this.id).innerHTML += "<div id='body'><b1>Sun</b1><b1>Mon</b1><b1>Tue</b1><b1>Wes</b1><b1>Thu</b1><b1>Fri</b1><b1>Sat</b1></div>";

        //calculate the start date
        let startDate = new Date(fixedDate.year + '-' + fixedDate.month + '-1');
        console.log(startDate + '  weekday:' + startDate.getDay())
        while (startDate.getDay() != 0) {
            startDate.setDate(startDate.getDate() - 1);
        }
        let endDate = new Date(fixedDate.year + '-' + fixedDate.month + '-1')
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(endDate.getDate() - 1);

        //fill the days
        while (startDate <= endDate) {
            let g = document.createElement("div")
            g.id = "body";
            document.getElementById(this.id).appendChild(g);
            if (startDate.getMonth() != inputDate.getMonth())
                document.getElementById(this.id).lastChild.innerHTML += "<b1 id='dim'>" + startDate.getDate() + "</b1>";
            else
                document.getElementById(this.id).lastChild.innerHTML += "<b1>" + startDate.getDate() + "</b1>";
            startDate.setDate(startDate.getDate() + 1)
            while (startDate.getDay() != 0) {
                if (startDate.getMonth() != inputDate.getMonth())
                    document.getElementById(this.id).lastChild.innerHTML += "<b1 id='dim'>" + startDate.getDate() + "</b1>";
                else
                    document.getElementById(this.id).lastChild.innerHTML += "<b1>" + startDate.getDate() + "</b1>";
                startDate.setDate(startDate.getDate() + 1)
            }

        }
        //minus month button click handler
        let clickHandleer = function () {
            inputDate.setMonth(inputDate.getMonth() - 1);
            this.render(inputDate);
        }
        document.getElementById(this.id).firstChild.firstChild.addEventListener("click", clickHandleer.bind(this, inputDate));
        //add month button click handler
        let clickHandleerAdd = function () {
            inputDate.setMonth(inputDate.getMonth() + 1);
            this.render(inputDate);
        }
        document.getElementById(this.id).firstChild.lastChild.addEventListener("click", clickHandleerAdd.bind(this, inputDate));
    }
}



