function RankService3(defaultRankSymbol) {
    this.rankSymbol = defaultRankSymbol || "*";
}

RankService3.prototype.showRank = function(count) {
    var rankSymbol = this.rankSymbol;
    var result = rankSymbol;

    if (count >= 0 && count < 100) {
        result = rankSymbol.repeat(1);
    } else if (count >= 100 && count < 200) {
        result = rankSymbol.repeat(2);
    } else if (count >= 200 && count < 500) {
        result = rankSymbol.repeat(3);
    } else if (count >= 500 && count < 1000) {
        result = rankSymbol.repeat(4);
    } else if (count >= 1000) {
        result = rankSymbol.repeat(5);
    }

    return result;
};
