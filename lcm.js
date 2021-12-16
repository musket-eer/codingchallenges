function leastCommonMultiple(n1, n2){
    if (n1 > n2){
        var greater = n1
    } else {
        var greater = n2
    }
// loop while increasing the value of greater until we find a value that can be divided by both n1 and n2
while (true){
    if (greater % n1 == 0 && greater % n2 == 0){
        var lcm = greater
        break
    }
    greater += 1
}
return lcm
}