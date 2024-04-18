function skillsMember() {
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    if (member == "sarah") {
        document.getElementById("skills").innerHTML = "Sarah's skills are: <br>1. HTML <br>2. CSS <br>3. JavaScript";
    } else if (member == "john") {
        document.getElementById("skills").innerHTML = "John's skills are: <br>1. HTML <br>2. CSS <br>3. JavaScript <br>4. React";
    } else if (member == "sara") {
        document.getElementById("skills").innerHTML = "Sara's skills are: <br>1. HTML <br>2. CSS <br>3. JavaScript <br>4. React <br>5. Node.js";
    } else {
        document.getElementById("skills").innerHTML = "Member not found";
    }
}