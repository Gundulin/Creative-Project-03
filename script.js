var app = new Vue ({
    el: '#app',
    /* Data Section */
    data: {
        pageTitle: 'I lost on Jeopardy',
        url: 'http://jservice.io/api',
        searchData: '',
        loading: false,
        currentQuestion: {
            answer: '',
            question: '',
            category: '',
        },
        hidden: false,
        revealed: false,
        buttonPressed: false,
        
    },
    
    /* Methods Section */
    methods: {
        async newQuestion() {
            
            try {
                this.loading = true;
                const response = await(axios.get(this.url + "/random"));
                this.currentQuestion = response.data[0];
                this.currentQuestion.category = response.data[0].category.title;
                console.log(this.currentQuestion);
                console.log(response);
                this.loading = false;
                this.hidden = true;
                this.revealed = false;
                this.buttonPressed = true;
            } catch (error) {
                console.log(error);
            }
        },
        revealAnswer() {
            this.hidden = false;
            this.revealed = true;
        },
        hideAnswer() {
            this.revealed = false;
            this.hidden = true;
        }
    }

})