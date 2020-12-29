class TableTemplate {
    static fillIn(id, dict, columnName) {
        //replace the header with the dict value
        let table = document.getElementById(id);
        table.style.visibility = "visible";
        let A = table.tBodies[0].rows[0].cells;
        for (let i = 0; i < A.length; i++) {
            const elem = A[i].innerText;
            let m = elem.match(/[a-zA-Z]+/g)[0];
            A[i].innerText = dict[m];
        }

        //if there is no columnName in the input arguments
        if (columnName == undefined) {
            let A = table.tBodies[0].rows;
            for (let i = 1; i < A.length; i++) {
                let B = A[i].cells;
                for (let j = 0; j < B.length; j++) {
                    const elem = B[j].innerText;
                    let m = elem.match(/[a-z0-9_]+/g)[0];
                    B[j].innerText = dict[m];
                }
            }
        }
        else {
            let jj = 0;
            let A = table.tBodies[0].rows;
            if (columnName == table.tBodies[0].rows[0].cells[0].innerText)
                jj = 0;
            else
                jj = 1;
            for (let i = 1; i < A.length; i++) {
                let B = A[i].cells;
                const elem = B[jj].innerText;
                let m = elem.match(/[a-z0-9_]+/g)[0];
                B[jj].innerText = dict[m];

            }
        }
    }
}