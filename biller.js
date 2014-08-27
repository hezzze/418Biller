function bill(objs) {
    var avg = 0;
    var neg = [];
    var nonneg = [];
    var obj = null;
    var sum = 0;
    for (var k = 0; k < objs.length; k++) {
        sum += objs[k].val;
    }

    avg = sum / objs.length;

    for (var i = 0; i < objs.length; i++) {
        obj = objs[i];

        obj.val -= avg;

        if (obj.val < 0) {
            neg.push(obj);
        } else {
            nonneg.push(obj);
        }
    }

    neg.sort(function (a,b) {return a.val < b.val;});
    nonneg.sort();

    if (neg.length === 0) {
        return "yay";
    } else {
        console.log("要算账了！！！shit!");
        yeah(neg, nonneg);

        for (var l = 0; l < neg.length; l++) {
            console.log(neg[l].name + " should give: " + neg[l].to);
        }
    }
}


function yeah(neg, nonneg) {
    if (neg.length === 1) {
        for (var i = 0; i < nonneg.length; i++) {
            neg[0].to += "=> " + nonneg[i].name + ":" + nonneg[i].val + ", ";
        }
    } else {
        if (-neg[0].val < nonneg[0].val) {
            neg[0].to += "=> " + nonneg[0].name + ":" + -neg[0].val + ", ";
            nonneg[0].val += neg[0].val;
            yeah(neg.slice(1, neg.length), nonneg);
        } else {
            neg[0].to += "=> " + nonneg[0].name + ":" + nonneg[0].val + ", ";
            neg[0].val += nonneg[0].val;
            if (neg[0].val === 0) {
                yeah(neg.slice(1, neg.length), nonneg.slice(1, nonneg.length));
            } else {
                yeah(neg, nonneg.slice(1, nonneg.length));
            }
        }
    }
}

var guys = [{
    name: "A",
    val: 54,
    to: ""
}, {
    name: "B",
    val: 29,
    to: ""
}, {
    name: "C",
    val: 11,
    to: ""
}, {
    name: "D",
    val: 66,
    to: ""
}];

var guys2 = [{
    name: "A",
    val: 10,
    to: ""
}, {
    name: "B",
    val: 20,
    to: ""
}, {
    name: "C",
    val: 30,
    to: ""
}, {
    name: "D",
    val: 40,
    to: ""
}];

var guys418 = [{
    name: "heze",
    val: 159,
    to: ""
}, {
    name: "Pin",
    val: 30.19,
    to: ""
}, {
    name: "kaiwen",
    val: 92.96,
    to: ""
}, {
    name: "yao",
    val: 54.63,
    to: ""
}];




bill(guys418);
