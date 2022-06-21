function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

let reverseStringIs = reverse("Danilo")
console.log(reverseStringIs)