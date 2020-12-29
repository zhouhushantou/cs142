class Cs142TemplateProcessor {
    constructor(inTemp) {
        this.template = inTemp;

    }
    fillIn(inDict) {
        const A = this.template.match(/{{[a-zA-Z]*}}/g)
        for (let i = 0; i < A.length; i++) {
            const elem = A[i]
            this.template = this.template.replace(elem, inDict[elem.match(/[a-zA-Z]+/g)[0]]);
        }
    }

}

/*var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016' };
var str = dateTemplate.fillIn(dictionary);
console.log(dateTemplate.template)*/