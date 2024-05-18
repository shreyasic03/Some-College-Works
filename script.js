var myForm=document.querySelector("#myform")
console.log(myForm)

function validate(){
    if(myForm.firstname.value==""){
        alert("Firstname is required")
        myForm.firstname.focus()
        return false
    }
    else if(myForm.lastname.value==""){
        alert('Lastname is required')
        myForm.lastname.focus()
        return false
    }
    else if(myForm.emailAdd.value==""){
        alert('Email address is required')
        myForm.emailAdd.focus()
        return false
    }
    else if(myForm.mobile.value==""){
        alert('mobile no is required')
        myForm.mobile.focus()
        return false
    }
    else if(myForm.address.value==""){
        alert('Address is required')
        myForm.address.focus()
        return false
    }
    else if(myForm.department.value==""){
        alert('Email Department is required')
        myForm.department.focus()
        return false
    }
    else if(myForm.getBoundingClientRect.value=""){
        alert('Gender is required')
        myForm.getBoundingClientRect.focus()
        return false
    }
    else{
        return true
    }
}
