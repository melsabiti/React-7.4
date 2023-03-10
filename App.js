import "./index.css";


function App() {
  return (
  
    <div>
    <header><h1>Satre's List</h1> 
    <h2>Better-Dressed People</h2>
<nav aria-label="Main Navigation" role="navigation"><ul>
    <li><a href="#">Women's</a></li>
    <li><a href="#">Men's</a></li>
    <li><a href="#">On the Street</a></li>
    <li><a href="#">The CatWalk</a></li>
    <li><a href="#">AdWatch</a></li>
    <li><a href="#">About</a></li>
</ul></nav></header>
    <main> 
        
    <article>
            <time datetime="2000-12-11">11/12/20</time>
        <h2>On the Street in Brooklyn</h2>
        <img src="https://cdn.discordapp.com/attachments/950849585956413491/1083773537304727582/blog-image-1.jpg" alt="womean aganist backdrop of city" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo adipisci quas debitis, at tempore blanditiis fugiat similique dolores eum perspiciatis ut quaerat magni autem hic atque reprehenderit commodi illo alias.</p>
        <a href="#">Continues...</a>
    </article>

    <article>
        <time datetime="2000-11-11">11/11/20</time>
    <h2>Vintage in Vogue</h2>
    <img src="https://cdn.discordapp.com/attachments/950849585956413491/1083773537556377670/blog-image-2.jpg" alt="various people in fashion clothing" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero molestiae error laborum dolorem aliquid sint ut assumenda enim porro odio, voluptatem consequatur culpa, mollitia inventore, exercitationem totam cum nostrum.</p>
    <a href="#">Continues...</a>
</article>

</main>
   
    <footer>
        <nav aria-label="Bottom Navigation" role="navigation"><ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Women's</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">On the Street</a></li>
            <li><a href="#">The Catwalk</a></li>
            <li><a href="#">Ad Watch</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Tips</a></li>
        </ul></nav>
        <div className="copyright">© 2013 Valet Industries, Inc</div>

    </footer>
</div>
  );
}

export default App;
