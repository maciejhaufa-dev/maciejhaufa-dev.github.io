// skrypt do automatycznej aktualizacji roku w stopce
document.addEventListener('DOMContentLoaded', () => {
    
    //Aktualizacja roku
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    //(Easter Egg)
    console.log("%c Hello there! 👋", "font-size: 20px; font-weight: bold; color: #2563eb;");
    console.log("Welcome to my portfolio. Feel free to check out the source code on GitHub!");
});
