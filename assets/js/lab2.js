function promptForFullName() {
    const fullName = prompt("enter full name:");

    if (fullName) {
        //save name
        localStorage.setItem('fullName', fullName);
        replacePlaceholder(fullName);
    }
}

function replacePlaceholder(name) {
    const spanElement = document.querySelector('.nav-item .nav-link .text-danger');
    
    if (spanElement) {
        spanElement.textContent = name;
    }
}

window.onload = function() {
    const savedName = localStorage.getItem('fullName');

    if (savedName) {
        replacePlaceholder(savedName);
    } else {
        promptForFullName();
    }
};

function prompFname(){
    let fullName = promp('enter full name');
    //fix later
    while (fullName || !isNaN(fullName)) {
        alert("Please enter a valid name.");
        fullName = prompt("Please enter your full name:");
    }
    localStorage.setItem('fullName', fullName);
    replacePlaceholder(fullName)//
}

function replacePlaceholder(name) {
    const spanElement = document.querySelector('.nav-item .nav-link .text-danger');

    if (spanElement) {
        spanElement.textContent = name;
    }
}

document.getElementById('changeNameButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    promptForFullName();
});

window.onload = function() {
    const savedName = localStorage.getItem('fullName');

    if (savedName) {
        replacePlaceholder(savedName);
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    
    const emailAddress = 'octaviolobo21@gmail.com';

   
    const currentDate = "21/8/2024";

    
    document.getElementById('date').textContent = currentDate;
    document.getElementById('email').textContent = emailAddress;
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const itemListContainer = document.getElementById('items');

    button.addEventListener('click', (event) => {
        event.preventDefault(); 

        let numberOfItems = parseInt(prompt("How many items would you like in the list?"), 10);

        
        while (isNaN(numberOfItems) || numberOfItems <= 0 || numberOfItems > 10) {
            alert("Please enter a number between 1 and 10.");
            numberOfItems = parseInt(prompt("How many items would you like in the list?"), 10);
        }

       
        itemListContainer.innerHTML = '';

        
        for (let i = 1; i <= numberOfItems; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'd-flex mb-4 item';
            itemDiv.innerHTML = `
                <div class="text-primary">
                    <img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">
                </div>
                <div class="mx-2">
                    <h3 class="h5 fw-bold mb-1">
                        Item #${i}
                    </h3>
                    <p>
                        This is item #${i}.
                    </p>
                </div>
            `;
            itemListContainer.appendChild(itemDiv);
        }
    });
});

