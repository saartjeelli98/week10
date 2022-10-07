let id=0;

document.getElementById('finish').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('books'); //referencing the table
    let row = table.insertRow(-1); //puts new rows underneath the ones already existing
    row.setAttribute('id', `item-${id}`); //creating an id for new info
    row.insertCell(0).innerHTML = document.getElementById('bookNumber').value; //inserting new book
    row.insertCell(1).innerHTML = document.getElementById('authorName').value; //adding an author
    row.insertCell(2).innerHTML = document.getElementById('title').value; //adding book title
    row.insertCell(3).innerHTML = `${createdDate.getMonth()}/${createdDate.getDate()}/${createdDate.getFullYear()}`;
    let actions= row.insertCell(5); //starting all new inputs at row 5, below the ones that exist
    actions.appendChild(createDeleteButton(id++)); 
    document.getElementById('new-task').value = ''; //to create a blank slate
});

