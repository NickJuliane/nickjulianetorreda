function toggleTheme(){
    document.body.classList.toggle('dark');

    localStorage.setItem(
        'theme',
        document.body.classList.contains('dark')
        ? 'dark'
        : 'light'
        );
}

/* Load saved theme */

if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
}

/* CHAT */

function toggleChat() {
    const chatBox = document.getElementById("chatBox");

    if (chatBox.style.display === "flex") {
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "flex";
    }
}






function sendMessage(event){

    if(event && event.key !== "Enter"){
        return;
    }

    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if(message === "") return;

    const chatBody = document.getElementById("chatBody");

    /* USER MESSAGE */

    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = message;

    chatBody.appendChild(userMsg);

    input.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;

    /* TYPING INDICATOR */

    const typing = document.createElement("div");
    typing.className = "bot-message";
    typing.id = "typing";

    typing.innerHTML = `
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    `;

    chatBody.appendChild(typing);

    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {

        const typingIndicator = document.getElementById("typing");

        if(typingIndicator){
            typingIndicator.remove();
        }

        const botMsg = document.createElement("div");
        botMsg.className = "bot-wrapper";

        let reply = "";

        const msg = message.toLowerCase();

        if(msg.includes("name")){
            reply = "My name is Nick Juliane Torreda, a Full Stack Developer specializing in Laravel, PHP, MySQL, Java, and modern web technologies.";
        }

        else if(msg.includes("project") || msg.includes("projects")){
            reply = "I have developed several projects including a Student Time Monitoring System, Record Management System, QR Attendance System, and other web-based solutions.";
        }

        else if(msg.includes("skill") || msg.includes("technology")){
            reply = "My technical skills include Laravel, PHP, MySQL, Java, JavaScript, Bootstrap, HTML, CSS, and database design.";
        }

        else if(msg.includes("experience")){
            reply = "I have experience developing web applications, student management systems, attendance systems, and database-driven solutions using Laravel and Java technologies.";
        }

        else if(msg.includes("education")){
            reply = "I am currently pursuing a Bachelor of Science in Information Technology while continuously improving my development skills through practical projects.";
        }

        else if(msg.includes("contact") || msg.includes("email")){
            reply = "You can contact me through the Contact section or by email. I am open to project discussions and collaboration opportunities.";
        }

        else if(msg.includes("laravel")){
            reply = "Laravel is my primary backend framework for building secure, scalable, and maintainable web applications.";
        }

        else if(msg.includes("java")){
            reply = "I use Java for developing desktop and web-based systems, including record management and educational applications.";
        }

        else if(msg.includes("hire") || msg.includes("work")){
            reply = "Thank you for your interest. Feel free to contact me regarding freelance work, collaborations, internships, or other opportunities.";
        }

        else if(msg.includes("hello") || msg.includes("hi")){
            reply = "Hello! 👋 It's great to meet you. Feel free to ask about my projects, skills, education, or development experience.";
        }

        else{
            reply = "Thank you for your message. Feel free to ask about my projects, technical skills, education, experience, or how to contact me.";
        }

        botMsg.innerHTML = `
        <img src="img/me.png" class="bot-avatar" alt="Nick">
        <div class="bot-message">
        ${reply}
        </div>
        `;

        chatBody.appendChild(botMsg);

        chatBody.scrollTop = chatBody.scrollHeight;

    }, 1200);
}











        /*carusel*/

const track = document.querySelector(".gallery-track");

let position = 0;

function autoSlide(){

    const firstImage =
        document.querySelector(".gallery-track img");

    const imageWidth =
        firstImage.offsetWidth + 15;

    position += imageWidth;

    track.style.transition = "transform .7s ease";
    track.style.transform =
        `translateX(-${position}px)`;

    const originalCount =
        document.querySelectorAll(
            ".gallery-track img"
        ).length / 2;

    if(position >= imageWidth * originalCount){

        setTimeout(() => {

            track.style.transition = "none";

            position = 0;

            track.style.transform =
                `translateX(0px)`;

        }, 700);
    }
}

setInterval(autoSlide, 4000);


















let currentModalIndex = 0;

function openImage(src){

    const images =
        document.querySelectorAll('.gallery-track img');

    images.forEach((img,index)=>{

        if(img.src === src){
            currentModalIndex = index;
        }

    });

    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "flex";

    document.body.style.overflow = "hidden";
}

function changeModalImage(direction){

    const images =
        document.querySelectorAll('.gallery-track img');

    currentModalIndex += direction;

    if(currentModalIndex < 0){
        currentModalIndex = images.length - 1;
    }

    if(currentModalIndex >= images.length){
        currentModalIndex = 0;
    }

    document.getElementById("modalImage").src =
        images[currentModalIndex].src;
}

function closeImage(){

    document.getElementById("imageModal").style.display = "none";

    document.body.style.overflow = "auto";
}







function openCertificate(imagePath){

    document.getElementById("modalImage").src = imagePath;

    document.getElementById("imageModal").style.display = "flex";

    document.body.style.overflow = "hidden";
}







function moveGallery(direction){

    const firstImage =
        document.querySelector(".gallery-track img");

    const imageWidth =
        firstImage.offsetWidth + 15;

    position += direction * imageWidth;

    const images =
        document.querySelectorAll(".gallery-track img");

    const maxPosition =
        imageWidth * (images.length - 1);

    if(position < 0){
        position = 0;
    }

    if(position > maxPosition){
        position = maxPosition;
    }

    track.style.transition = "transform .5s ease";
    track.style.transform =
        `translateX(-${position}px)`;
}


