🚀 Motivational Quote CarouselA lightweight and reusable JavaScript component designed to display a cycling carousel of inspiring images and quotes. This project showcases clean, modular JavaScript for component creation and DOM manipulation.✨ FeaturesImage Slides: Displays a series of high-resolution, motivational background images.Motivational Quotes: Each slide features a central, impactful quote and attribution.Navigation Controls: Includes "Previous" and "Next" buttons to manually cycle through slides.Dot Indicators: Small navigational dots beneath the carousel indicate the current slide position.Modular JavaScript: The core logic is encapsulated in a reusable JavaScript module, making it easy to integrate into any part of a larger web application.Simple CSS: Styled using standard Vanilla CSS to ensure minimal dependencies and straightforward customization.🛠️ Technology StackHTML5: Structure and content for the carousel.CSS3 (Vanilla): Custom styling, layout, and transitions for the sliding effect.JavaScript (ES6+): Component logic, state management (tracking the current slide), and DOM manipulation (hiding and showing slides).🚀 Getting StartedTo view and run this project locally, follow these simple steps.PrerequisitesYou only need a modern web browser (like Chrome, Firefox, or Edge).Installation and SetupClone the Repository (or Download the File):If you have the single HTML file (carousel.html), you can skip this step. Otherwise, clone the project files:git clone [your-repository-url]
cd motivational-carousel
Open the File:Locate the main HTML file (e.g., index.html or carousel.html) and open it directly in your web browser.# Example command (may vary by OS)
open index.html
The carousel should load immediately and be ready for interaction.💻 Code StructureThe project emphasizes a clean separation between the structure and the logic:File/SectionRoleKey Conceptsindex.htmlStructure & StyleContains the HTML elements for the slides, buttons, and dots. All custom CSS is embedded in the <style> block.<script> BlockComponent LogicContains the CarouselController module, responsible for updating the currentSlide index and manipulating the DOM to change which slide is visible.💡 Reusability NoteThe JavaScript code is designed to be reusable. If you wanted to run a second, completely independent carousel on the same page, you would:Wrap the new HTML structure in a new container with a unique ID (e.g., #second-carousel).In the JavaScript, simply call the initialization function again, passing the new container ID.// Example of reusable initialization:
// CarouselController.init('main-carousel');
// CarouselController.init('second-carousel');
📸 Mock Data StructureThe project currently uses hard-coded slides within the HTML, following this conceptual structure:<!-- Main Carousel Container -->
<div id="carousel-container">
    <!-- Slide 1 -->
    <div class="slide" data-quote="The only way to do great work is to love what you do." data-author="Steve Jobs">
        <img src="..." alt="Motivational image 1">
    </div>
    <!-- Slide 2 -->
    <div class="slide" data-quote="..." data-author="...">
        <img src="..." alt="Motivational image 2">
    </div>
    <!-- ... and so on ... -->
</div>
Customization Tip: To change the quotes or images, you simply edit the content within the respective slide divs in the HTML file.