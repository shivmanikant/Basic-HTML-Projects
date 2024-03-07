// Firebase configuration
const firebaseConfig = {
    // Your Firebase config details here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Firestore
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expenseForm");
    const expenseList = document.getElementById("expenseList");
    const totalExpense = document.getElementById("totalExpense");

    let total = 0;

    // Function to fetch and display expenses from Firestore
    function fetchExpenses() {
        expenseList.innerHTML = "";
        total = 0;
        db.collection("expenses").get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const expenseData = doc.data();
                    const listItem = document.createElement("li");
                    listItem.textContent = `${expenseData.text}: $${expenseData.amount}`;
                    expenseList.appendChild(listItem);
                    total += expenseData.amount;
                });
                totalExpense.textContent = total.toFixed(2);
            })
            .catch(error => {
                console.error("Error getting expenses: ", error);
            });
    }

    // Fetch and display expenses on page load
    fetchExpenses();

    // Function to add expense to Firestore
    function addExpenseToFirestore(expenseText, expenseAmount) {
        db.collection("expenses").add({
            text: expenseText,
            amount: expenseAmount
        })
        .then(() => {
            fetchExpenses();
        })
        .catch(error => {
            console.error("Error adding expense: ", error);
        });
    }

    // Form submission event listener
    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const expenseText = document.getElementById("expenseText").value;
        const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
        
        if (expenseText && !isNaN(expenseAmount)) {
            addExpenseToFirestore(expenseText, expenseAmount);
            document.getElementById("expenseText").value = "";
            document.getElementById("expenseAmount").value = "";
        }
    });
});
