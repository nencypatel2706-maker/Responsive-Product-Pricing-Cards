
document.addEventListener("DOMContentLoaded", function () {

    const billingSwitch = document.getElementById("billing-switch");

    const priceAmounts = document.querySelectorAll(".amount");

  
    const periods = document.querySelectorAll(".period");

    if (billingSwitch) {

        billingSwitch.addEventListener("click", function () {

            const isYearly = billingSwitch.classList.toggle("active");

          
            billingSwitch.setAttribute("aria-pressed", isYearly);

            billingSwitch.setAttribute(
                "aria-label",
                isYearly
                    ? "Switch to monthly billing"
                    : "Switch to yearly billing"
            );

            
            priceAmounts.forEach(function (price) {

                if (isYearly) {
                    price.textContent = price.dataset.yearly;
                } else {
                    price.textContent = price.dataset.monthly;
                }

            });

           
            periods.forEach(function (period) {

                period.textContent = isYearly
                    ? "/ month, billed yearly"
                    : "/ month";

            });

        });

    }

    const planButtons = document.querySelectorAll(".plan-button");

    planButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.closest(".pricing-card");
            const planName = card.querySelector("h2").textContent;

            alert("You selected the " + planName + " plan!");

        });

    });

});
