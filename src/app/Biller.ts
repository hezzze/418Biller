export class Biller {
  bill(data: any[]) {
    let avg = 0;
    let neg: any[] = [];
    let nonneg: any[] = [];
    let obj: any = null;
    let sum = 0;

    let objs = JSON.parse(JSON.stringify(data));

    let len = objs.length;

    for (let k = 0; k < len; k++) {
      sum += objs[k].val;
    }

    avg = sum / len;

    for (let i = 0; i < len; i++) {
      obj = objs[i];

      obj.val -= avg;

      if (obj.val < 0) {
          neg.push(obj);
      } else {
        nonneg.push(obj);
      }
    }

    neg.sort(function (a: any,b: any):number {return a.val - b.val;});



    if (neg.length > 0) {
      this.calc(neg, nonneg);
    }

    return neg;

  }

  private calc(neg: any[], nonneg: any[]) {
    if (neg.length === 1) {
        for (var i = 0; i < nonneg.length; i++) {
            neg[0].to += "=> " + nonneg[i].name + ":" + nonneg[i].val + ", ";
        }
    } else {
        if (-neg[0].val < nonneg[0].val) {
            neg[0].to += "=> " + nonneg[0].name + ":" + -neg[0].val + ", ";
            nonneg[0].val += neg[0].val;
            this.calc(neg.slice(1, neg.length), nonneg);
        } else {
            neg[0].to += "=> " + nonneg[0].name + ":" + nonneg[0].val + ", ";
            neg[0].val += nonneg[0].val;
            if (neg[0].val === 0) {
                this.calc(neg.slice(1, neg.length), nonneg.slice(1, nonneg.length));
            } else {
                this.calc(neg, nonneg.slice(1, nonneg.length));
            }
        }
    }
  }


}

//
// var guys = [{
//     name: "A",
//     val: 54,
//     to: ""
// }, {
//     name: "B",
//     val: 29,
//     to: ""
// }, {
//     name: "C",
//     val: 11,
//     to: ""
// }, {
//     name: "D",
//     val: 66,
//     to: ""
// }];
//
// var guys2 = [{
//     name: "A",
//     val: 10,
//     to: ""
// }, {
//     name: "B",
//     val: 20,
//     to: ""
// }, {
//     name: "C",
//     val: 30,
//     to: ""
// }, {
//     name: "D",
//     val: 40,
//     to: ""
// }];
//
// var guys418 = [{
//     name: "heze",
//     val: 159,
//     to: ""
// }, {
//     name: "Pin",
//     val: 30.19,
//     to: ""
// }, {
//     name: "kaiwen",
//     val: 92.96,
//     to: ""
// }, {
//     name: "yao",
//     val: 54.63,
//     to: ""
// }];
//
//
//
//
// bill(guys418);
