class Poll {
    // Constructor function for creating Poll instances
    constructor(root, title) {
        // Initialize instance properties
        this.root = root;
        this.selected = sessionStorage.getItem("poll-selected");
        this.endpoint = "http://localhost:3000/poll";

        // Insert HTML for poll title in the DOM
        this.root.insertAdjacentHTML("afterbegin", `
            <div class="poll__sub--title"> Who will win the <div class="poll__title">${title}?</div></div>
        `);

        // Call the _refresh method to fetch and display the poll data
        this._refresh();
    }

    // Private method to refresh the poll data
    async _refresh() {
        // Fetch poll data from the API
        const response = await fetch(this.endpoint);
        const data = await response.json();

        // Sort the data array based on percentage in descending order
        data.sort((a, b) => b.percentage - a.percentage);

        // Check if a poll option is selected
        if (this.selected) {
            // Clear existing title and display a Thank you message
            this.root.innerHTML = "";
            this.root.insertAdjacentHTML("afterbegin", `
                <div class="poll__sub--title"> Thank you for<div class="poll__title"> your response</div></div>
            `);
        }

        // Iterate through the poll options and create HTML elements
        for (const option of data) {
            const template = document.createElement("template");
            const fragment = template.content;

            template.innerHTML = `
                <div class="poll__option ${this.selected == option.label ? "poll__option--selected" : ""}">
                    <div class="poll__option-fill"></div>
                    
                    <div class="poll__option-info">
                        <span class="poll__label">${option.label}</span>
                        <span class="poll__percentage">${option.percentage}%</span>
                    </div>
                </div>
            `;

            // Check if a poll option is not selected (allow interaction)
            if (!this.selected) {
                const pollOption = fragment.querySelector(".poll__option");
                
                // Click Event listener for selecting a poll option and Post the vote
                pollOption.addEventListener("click", () => {
                    fetch(this.endpoint, {
                        method: "post",
                        body: `add=${option.label}`,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).then(() => {
                        // Update selected option, store in session, and refresh
                        this.selected = option.label;
                        sessionStorage.setItem("poll-selected", option.label);
                        this._refresh();
                    });
                });

                // Add hover event listeners for styling on interaction
                pollOption.addEventListener("mouseenter", () => {
                    pollOption.classList.add("poll__option--hover");
                });

                pollOption.addEventListener("mouseleave", () => {
                    pollOption.classList.remove("poll__option--hover");
                });
            }

            // Set the width of the poll option fill based on the percentage
            fragment.querySelector(".poll__option-fill").style.width = `${option.percentage}%`;

            // Append the created poll option to the root element
            this.root.appendChild(fragment);
        }
    }
}

// Create a new Poll instance with a root element and title
const p = new Poll(
    document.querySelector(".poll"),
    "Premier League"
);
