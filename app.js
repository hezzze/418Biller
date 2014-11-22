(function() {
    function Hero(name, val) {
        this.name = name;
        this.val = val || 0;
        this.to = "";
    }

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

        neg.sort(function(a, b) {
            return a.val < b.val;
        });
        nonneg.sort();

        if (neg.length > 0) {

            yeah(neg, nonneg);
        }

        return neg;
    }


    function yeah(neg, nonneg) {
        if (neg.length === 1) {
            for (var i = 0; i < nonneg.length; i++) {
                neg[0].to += "=> " + nonneg[i].name + ": $" + nonneg[i].val + "  ";
            }
        } else {
            if (-neg[0].val < nonneg[0].val) {
                neg[0].to += "=> " + nonneg[0].name + ": $" + -neg[0].val + "  ";
                nonneg[0].val += neg[0].val;
                yeah(neg.slice(1, neg.length), nonneg);
            } else {
                neg[0].to += "=> " + nonneg[0].name + ": $" + nonneg[0].val + "  ";
                neg[0].val += nonneg[0].val;
                if (neg[0].val === 0) {
                    yeah(neg.slice(1, neg.length), nonneg.slice(1, nonneg.length));
                } else {
                    yeah(neg, nonneg.slice(1, nonneg.length));
                }
            }
        }
    }

    $(function() {
        $('input').click(function() {
            this.select();
        });
    });

    //default 
    var HEROES = ["小熊猫", "小眼仔", "品叔", "贺泽"];

    /**
     * billCalculator Module
     *
     * Description
     */
    angular.module('billCalculator', [])

    .controller('HeroesCtrl', ['$scope',
        function($scope) {

            $scope.heroes = [];

            for (var i = 0; i < HEROES.length; i++) {
                $scope.heroes.push(new Hero(HEROES[i]));
            }

            $scope.add_hero = function() {
                if ($scope.heroName === "") {
                    alert("enter name for our hero!");
                    return;
                }
                $scope.heroes.push(new Hero($scope.heroName));
            };

            $scope.delete_hero = function(i) {
                $scope.heroes.splice(i, 1);
            };

            $scope.calc = function() {
                if (!$scope.billForm.$valid) {
                    $scope.result = "你输入的这是啥呀？。。"
                    window.location.href = window.location.href + "#result";
                    return;
                }
                var neg = bill(angular.copy($scope.heroes));
                var r = "";
                if (neg.length === 0) {
                    console.log("yay!!");
                    r += "Yay, 没毛事！"
                } else {
                    console.log("要算账了！！！shit!");
                    for (var l = 0; l < neg.length; l++) {
                        r += neg[l].name + " send\n" + neg[l].to + "\n\n";
                        console.log(neg[l].name + " 应该给: " + neg[l].to);
                    }
                }
                $scope.result = r;
                window.location.href = window.location.href + "#result";
            };
        }
    ])
})();
