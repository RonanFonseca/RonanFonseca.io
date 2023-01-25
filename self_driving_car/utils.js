// When t is 0, return A, when it is 0.5, move "half away from A"
function lerp(A,B, t){
    return A+(B-A)*t;
}