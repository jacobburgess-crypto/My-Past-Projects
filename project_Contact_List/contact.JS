// let nameInput = document.getElementById('log_input_fAlN').value;
// let emailInput = document.getElementById('log_input_email').value;
// let phoneInput = document.getElementById('log_input_phoneNumber').value;
// let birthInput = document.getElementById('log_input_birthDate').value;


function logContactList() {
    const table = document.getElementById("log_output");
    const row = document.createElement("tr");
    const buttons = document.createElement("button");
    const doc = document.getElementById("bodyTag");
    doc.appendChild(buttons);

    let nameInput = document.getElementById('log_input_fAlN').value;
    let emailInput = document.getElementById('log_input_email').value;
    let phoneInput = document.getElementById('log_input_phoneNumber').value;
    let birthInput = document.getElementById('log_input_birthDate').value;
    if (nameInput === "" || emailInput=== "" || phoneInput === "" || birthInput === "" ) {
        alert("filler");
    };


    const contactData = [
        // 0
        document.getElementById('log_input_fAlN').value, //1
        document.getElementById('log_input_email').value, //2
        document.getElementById('log_input_phoneNumber').value, //3
        document.getElementById('log_input_birthDate').value //4
    ];
     

    //changh to a For Loop
    for (let i=0; i < contactData.length; i++) {
        if(i == 0){
            const tdButton = document.createElement("button");

            // const editFunctionClick = document.createElement("onclick");

            tdButton.append("edit");
            // tdButton.append(editFunctionClick);
            tdButton.setAttribute("onclick", editFunctionClick());
            function editFunctionClick(){
                return console.log(tdButton);
            }
            // editFunctionClick.append();
            row.appendChild(tdButton);
            console.log(tdButton);

// row.remove();
            // const deleteFunctionClick = document.createElement("onclick");
            
            buttons.append("delete");
            buttons.setAttribute("onclick", deleteFunctionClick());
            function deleteFunctionClick(){
                return console.log("deleteFun");
                row.remove(contactData);
            }           
            row.appendChild(buttons);
            console.log(buttons);
        }

        console.log(i);
        const td = document.createElement("td");
        td.textContent = contactData[i];
        row.appendChild(td);
    }
    table.appendChild(row);
}
    
    // contactData.forEach((value, index) => {
    //     const td = document.createElement("td");

    //     // Assign a unique ID toeach cell
    //     td.id = `cell-id-${index + 1}`;

    //     td.textContent = value;

    //     //Add the cell to the row 
    //     row.appendChild(td); // Add <td> to the <tr>
    // })

    //
    
;
// function logContactList() {
//     var x = document.createElement("td")

// }


// function logContactList() {
//     const table = document.getElementById("log_output");
//     const row = document.createElement("tr");

//     // 1. Get values
//     let name = document.getElementById('log_input_fAlN').value;
//     let email = document.getElementById('log_input_email').value;
//     let phone = document.getElementById('log_input_phoneNumber').value;
//     let birth = document.getElementById('log_input_birthDate').value;

//     // 2. Validation
//     if (!name || !email || !phone || !birth) {
//         alert("Please fill in all fields");
//         return; // Stop the function if empty
//     }

//     // 3. Create the Delete Button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.onclick = function() { row.remove(); };

//     // 4. Put everything in the array
//     const contactData = [deleteBtn, name, email, phone, birth];

//     // 5. The Loop
//     for (let i = 0; i < contactData.length; i++) {
//         const td = document.createElement("td");
        
//         // Check if the item is the button or just text
//         if (contactData[i] instanceof HTMLElement) {
//             td.appendChild(contactData[i]); // Add the actual button element
//         } else {
//             td.textContent = contactData[i]; // Add the text string
//         }
        
//         row.appendChild(td);
//     }

//     table.appendChild(row);
// }