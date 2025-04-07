export function Footer() {
  //creating footer element
  const Footer = document.createElement("div");
  Footer.innerHTML = `
    <footer class="app-footer">
        <div class="footer-content">
            <p>&copy; 2025 <strong>RecipeBook</strong>. All rights reserved.</p>
        </div>
    </footer>`;

  return Footer;
}
