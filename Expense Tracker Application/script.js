document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expenseForm");
    const expenseList = document.getElementById("expenseList");
    const totalExpense = document.getElementById("totalExpense");

    let total = 0;

    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const expenseText = document.getElementById("expenseText").value;
        const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
        
        if (expenseText && !isNaN(expenseAmount)) {
            total += expenseAmount;
            const listItem = document.createElement("li");
            listItem.textContent = `${expenseText}: $${expenseAmount}`;
            expenseList.appendChild(listItem);
            totalExpense.textContent = total.toFixed(2);
            document.getElementById("expenseText").value = "";
            document.getElementById("expenseAmount").value = "";
        }
    });
});
