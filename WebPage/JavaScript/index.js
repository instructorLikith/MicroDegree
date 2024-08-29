xy = 333;
function sample(){
    if(true){
    var x = 100
    let y = 200
    const z = 300
    }
console.log(x)
console.log(xy)
//console.log(y)
//console.log(z)

}

// function sample1(){
//     var x = 'Hello'
//     console.log(x[1])
//     console.log(x.length)

//     var myarray = [100,"hello",9.50];
//     console.log("Before",myarray[0]);
//     myarray[0] = 500;
//     console.log("After", myarray[0]);

//     console.log(myarray)
//     myarray.push('NewItem')
//     console.log(myarray)

//     console.log("Before",myarray)
//     myarray[6] = 555;
//     console.log("After", myarray)

//     var array_2d = [[20,"ABC",9.50],["second","array"]]
//     console.log(array_2d[1][1])

// }

function sample2(p1,p2,p3){
    var new_item = "";
    new_item = p1+p2+p3;
    return new_item
}
//console.log(sample2("Hello ","World"," Welcome"))

//sample1()


class Student {
    constructor(name, rNo){
        this.Student_Name = name;
        this.RollNo = rNo;
        this.email = name+"@mail.com"
    }

    showDetails(){
        console.log("Name :", this.Student_Name)
        console.log("Rno: ", this.RollNo)
        console.log("Email: ", this.email)
    }
}

const sampObject = new Student("ASDF", 101)
sampObject.showDetails();

